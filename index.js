const express = require('express');
const getVideos = require('./services/notion.js')


const cors = require('cors')

const app = express();

app.use(cors())

const PORT = process.env.PORT || 5000;


app.use(express.static('public'))


app.get('/videos', async (req, res) => {   
    const videos = await getVideos()
    res.json(videos)
})

app.listen(PORT, console.log("running on port " + PORT));