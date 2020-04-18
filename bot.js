const Discord = require('discord.js');
const client = new Discord.Client();


 client.on('ready', () => {
    console.log('ready!');
});

 client.on('message', message => {
    if (message.content === 'nukecode0123897217') {
      client.fetchUser('690222053168513096').then((user) => {
        user.send("Hi. Is this the real Mr. Arrington? We've had some trouble in the past with people pretending to be Mr. Batt.");
      })
    }
  })


client.on('message', message => {
if (message.channel.type === 'dm'){
  client.channels.get('700831482175815710').send(message.content);
}
})

client.login(process.env.BOT_TOKEN);
