// express server on port 5000 
var express = require('express');
const dotenv = require('dotenv').config()
const {Client} = require ('@notionhq/client')



//Clientt
const notion = new Client({
    auth : process.env.NOTION_TOKEN,
    notionVersion: '2021-08-16'
})

// const listDatabases = async () => {
//     const res = await notion.search({
//         query: '',
//         collectionId: '',
//         limit: 10,
//         offset: 0,
        
//     })
//     console.log(res)
// }
// listDatabases() 

module.exports = async function getVideos () {
    const database_id = process.env.NOTION_DATABASE_ID

    const payload = {
        path:`databases/${database_id}/query`,
        method:'POST'

    }
const {results} = await notion.request(payload)

// console.log(results)

const videos = results.map((page) => {
    console.log(page.properties.Description.rich_text[0].text.content)

    return{
        id:page.id,
        title:page.properties.Name.title[0].text.content,
        Date:page.properties.Date.date.start,
        // tags:page.properties.Tags.rich_text[0].text.content
    }
})

return videos
}










