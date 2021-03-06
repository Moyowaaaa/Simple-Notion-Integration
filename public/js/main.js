const videosEl = document.querySelector('#videos')



const getVideosFromBackend = async () => {
 
  const res = await fetch('http://localhost:5000/videos')
  const data = await res.json()

  return data
}

const addVideosToDom = async () => {
  const videos = await getVideosFromBackend()

  videos.forEach((video) => {
    const div = document.createElement('div')
    div.className = 'video'
    div.innerHTML = `
      <h3>${video.title}</h3>
      <p>${video.Date}</p>
     

    `
    videosEl.appendChild(div)
  })
}

addVideosToDom()