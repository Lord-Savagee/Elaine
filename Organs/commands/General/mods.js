
require ('../../../settings')
module.exports={
    name:"mods",
    alias:["mod"],
    usage:`${prefa}mods`,
    desc:"shows mods list",
    category:"General",
    react:"🌺",

    start:async(client,m,{})=>{
        const mod= owner
        let mo=`
*🔮 Elaina Mods 🎀*\n`
for(let i=0;i<mod.length;i++){
    const um= await client.username(mod[i]+'@s.whatsapp.net')
    mo+=`\n✨${i+1}\n*👤 Name:* ${um}\n*📱 Contact:* http://wa.me/+${mod[i].split("@")[0]}\n`
}
await  client.sendMessage(m.from,{image:{url:'https://telegra.ph/file/8eed1568a71b3b55dac05.jpg'},caption:mo},{quoted:m})  
    }
}
