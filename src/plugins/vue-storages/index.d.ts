import { App, ComponentCustomProperties, Ref } from 'vue'

declare type DictionnaryKey = string

/** Creates a VueLocalStorage instance that can be used by a Vue app */
export declare function createLocalStorage(): VueLocalStorage

/** Creates a VueSession instance that can be used by a Vue app */
export declare function createVueSession(options: VueSessionOptions): VueSession

/** VueLocalStorage instance */
export declare interface VueLocalStorage {
    /** The default session key (defaults: vue-session) */
    readonly VUE_SESSION_KEY: string
    /**
     * Returns all items saved in the localStorage
     *
     * @returns dictionnary
     */
    readonly data: Object
    /**
     * Returns the value store under a given key
     *
     * @param key - key to use
     * @returns an object, a string or an array
     */
    retrieve (key: DictionnaryKey): Object | String | Number | Array
    /**
     * Creates a new record under the given key
     *
     * @param key - key under which to save the element
     * @param value - string, array or dictionnary
     * @returns null
     */
    create(key: DictionnaryKey, value: any): void
    /**
     * Removes an element stored under a given key
     *
     * @param key key of the element to remove
     * @returns null
     */
    remove(key: DictionnaryKey): void
    /**
     * Saves an item globally in the local storage
     *
     * @param key - key under which to save the element
     * @param value - string, array or dictionnary
     * @returns null
     */
    save(key: DictionnaryKey, value: any): void
    /**
     * Returns a value saved globally and not under the session key
     *
     * @param key - key under which to save the element
     * @returns string, array or dictionnary
     */
    getValue(key: DictionnaryKey): Object | String | Number | Array

    install(app: App): void
}

/** Possible options for VueSession */
export declare interface VueSessionOptions {
    /** Persist the data in the local storage */
    persisent?: boolean
    /** Initial with which to init the storage */
    initial?: Object
}

/** 
 * VueSession allows serializing and deserializing
 * data in the base Window session storage
 */
export declare interface VueSession {
    /**
     * Returns all items saved in the storage
     *
     * @returns dictionnary
     */
    readonly data: Object
    /**
     * Creates a new record under the given global key
     *
     * @param key - key under which to save the element
     * @param value - string, array or dictionnary
     * @returns null
     */
    create(key: DictionnaryKey, value: any): void
    /**
     * Returns the value store under a given key
     *
     * @param key - key to use
     * @returns an object, a string or an array
     */
    retrieve(key: DictionnaryKey): String | Number | Object
    /**
     * Removes an element stored under a given key
     *
     * @param key key of the element to remove
     * @returns null
     */
    remove(key: DictionnaryKey): void
    /**
     * Renews the session key
     */
    renew(): void
    /**
     * Clears all data stored under the global key
     */
    clear(): void
    /**
     * Checks whether a key exists in the storage
     *
     * @param key key of the element to remove
     * @returns Boolean
     */
    contains(key: DictionnaryKey): Boolean
    /**
     * Destroys the session
     */
    destroy(): void
    /**
     * Tries to get a key and eventually creates
     * a new record with the given value if it
     * does not exist
     *
     * @param key - key of the element to remove
     * @param defaultValue - key of the element to remove
     * @returns any
     */
    getOrCreate(key: DictionnaryKey, defaultValue: any): String | Array | Object
    /**
     * Tries to push the incoming element to an 
     * array stored under the given key
     *
     * @param key - key of the element to remove
     * @param value - value to add
     */
    updateArray(key: DictionnaryKey, value: any)

    install(app: App): void
}

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        /** Current data saved under the VUE_SESSION_KEY */
        localStorage: Object
        /** Current data saved under VUE_STORAGE */
        /** The VueLocalStorage instance */
        $localstorage: VueLocalStorage
        /** The VueSession instance */
        $session: VueSession
    }
}
