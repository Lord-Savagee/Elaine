require('../../../settings')
const axios = require('axios')
module.exports = {
    name: "repo",
    alias: ["elaina"],
    usage: `${prefa}repo`,
    desc: "Will send you details of our bot",
    react: "🥺",
    
    category: "General",
    start: async (client, m, {
        command,
        prefix,
        text,
        args
    }) => {
let yup = [
            'https://telegra.ph/file/8eed1568a71b3b55dac05.jpg',
            'https://telegra.ph/file/8eed1568a71b3b55dac05.jpg',
            'https://telegra.ph/file/8eed1568a71b3b55dac05.jpg',
            'https://telegra.ph/file/8eed1568a71b3b55dac05.jpg',
            'https://telegra.ph/file/8eed1568a71b3b55dac05.jpg',
            'https://telegra.ph/file/8eed1568a71b3b55dac05.jpg'
          ]
let nezuko = await axios.get('https://api.github.com/union-savage/Elaina-md')
let rae = yup[Math.floor(Math.random() * yup.length)]

var rr = `✨ _*Elaina*_  ✨\n\n🍀 *Description:* ${nezuko.data.description}\n\n 📎 *Repo Link:* ${nezuko.data.html_url} \n\n 🌠 *Total Star:* ${nezuko.data.stargazers_count}\n\n 💕 *Total Forks:* ${nezuko.data.forks} \n\n 💁🏻‍♂️ *Tutorial:* https://www.youtube.com/watch?v=KqcOlvV8 \n`
await client.sendMessage(m.from,{image:{url:rae}, caption:rr},{quoted:m})
    }
}
