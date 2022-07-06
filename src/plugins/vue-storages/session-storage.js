import { setupDevtoolsPlugin } from '@vue/devtools-api'

function setupDevtools(app, storage) {
    // let trackId = 0
    let devtoolsApi
    const devtools = {}

    setupDevtoolsPlugin({
        id: 'vue-session',
        label: 'Vue Session',
        packageName: 'vue-session',
        homepage: 'http://example.com',
        componentStateTypes: ['vue-session'],
        enableEarlyProxy: true,
        app
    }, api => {
        devtoolsApi = api
        devtoolsApi
        storage
        api.addInspector({
            id: 'vue-session-storage',
            label: 'Vue Session Storage',
            icon: 'storage'
        })

        api.on.getInspectorTree((payload) => {
            if (payload.inspectorId === 'vue-session-storage') {
                payload.rootNodes = [
                    {
                        id: 'storage',
                        label: 'Storage'
                    }
                ]
            }
        })
    })

    return devtools
}

class VueSession {
    constructor(options) {
        const defaultOptions = options || {}
        const { persistent, initial } = defaultOptions

        this.VUE_SESSION_KEY = 'vue-session'
        this.storage = sessionStorage

        this._history = []

        // TODO: Implement functionnalities for persistence
        // and for implementing initial data
        this.isPersistent = persistent || false
        if (initial && typeof initial !== 'object') {
            throw new Error('Initial should be a dictionnary')
        }
        this.initial = initial
    }
    
    get data() {
        return JSON.parse(this.storage.getItem(this.VUE_SESSION_KEY))
    }

    _precheck() {
        // Ensures that the session key above
        // is always present before doing any
        // operations
        if (!(this.VUE_SESSION_KEY in this.storage)) {
            const sessionData = { 'session-id': Date.now() }
            this.storage.setItem(this.VUE_SESSION_KEY, JSON.stringify(sessionData))
        }
    }

    _save(data) {
        this._precheck()
        this.storage.setItem(this.VUE_SESSION_KEY, JSON.stringify(data))
        this._history.push(['save', data])
    }

    * iter() {
        yield* Object.values(this.data)
    }
    
    create(key, value) {
        this._precheck()
        const storedData = this.data
        storedData[key] = value
        this._save(storedData)
    }

    retrieve(key) {
        this._precheck()
        return this.data[key]
    }

    remove (key) {
        var storedData = this.data
        delete storedData[key]
        this._save(storedData)
    }

    renew () {
        // Fails silently if there is no
        // session in the storage
        try {
            const storedData = this.data
            storedData['session-id'] = Date.now()
            this.storage.setItem(this.VUE_SESSION_KEY, JSON.stringify(storedData))
            return true
        } catch {
            return false
        }
    }
    
    clear () {
        // Fails silently if there is no
        // session in the storage
        try {
            const sessionId = this.data['session-id']
            this.storage.setItem(this.VUE_SESSION_KEY, JSON.stringify({ 'session-id': sessionId }))
            return true
        } catch {
            return false
        }
    }
    
    contains(key) {
        return this.data ? key in this.data : false
    }
    
    destroy() {
        this.storage.clear()
    }

    getOrCreate(key, defaultValue) {
        this._precheck()

        const storedData = this.data

        if (!(key in storedData)) {
            this.create(key, defaultValue)
        }

        return storedData[key]
    }

    updateArray(key, value) {
        this._precheck()

        let result = this.data[key]

        if (!result) {
            result = []
        }
        result.push(value)
        this.create(key, result)
    }

    install(app) {
        setupDevtools(app, this)
        app.config.globalProperties.$session = this
        app.mixin({
            data: () => ({
                sessionStorage: this.data
            })
        })
        window.VueSession = this
    }
}

function createVueSession(options) {
    return new VueSession(options)
}

export {
    createVueSession,
    VueSession
}
