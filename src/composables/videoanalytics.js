import { ref } from 'vue'

export default function videoAnalytics () {
  const videoDetails = ref({
    id: null,
    user: null,
    progress: 0,
    completed: false
  })

  function getData () {
    return JSON.parse(sessionStorage.getItem('videos'))
  }

  function saveData (data) {
    const savedData = getData()
    savedData.videos.push(data)
    sessionStorage.setItem('videos', JSON.stringify('videos', data))
  }

  function getVideo (id) {
    const items = getData().filter((video) => {
      return video.id === id
    })
    if (items.length > 0) {
      return items[0]
    } else {
      return { id: id }
    }
  }

  function rememberCurrentTime (id, currentTime) {
    const video = getVideo(id)
    video[currentTime] = currentTime
    saveData(video)
  }

  async function sendView () {
    // Do something
  }

  return {
    videoDetails,
    rememberCurrentTime,
    sendView
  }
}
