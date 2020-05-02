const Discord = require('discord.js');
const client = new Discord.Client();


 client.on('ready', () => {
    console.log('ready!');
});

 client.on('message', message => {
    if (message.content.includes("e") {
        message.channel.send("I am almost finished with the auto smelter in my base anyone is free to us it. I haven’t put an out put chest in yet so no need to go crazy yet. The bamboo farm will automatically stop when all of the furnaces are full of bamboo, if it is lagging your game there is an over ride stop. DO NOT PUT ANYTHING INTO THE FIRST THREE CHESTS AS OF NOW.")
 }
 })


client.login(process.env.BOT_TOKEN);
