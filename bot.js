const Discord = require('discord.js');
const client = new Discord.Client();


 client.on('ready', () => {
    console.log('ready!');
});

 client.on('message', message => {
    if (message.content === 'nukecode0123897217') {
      client.fetchUser('244921929495085057').then((user) => {
        user.send("Hello");

  if (message.channel.type == "dm") {
    client.fetchUser("244921929495085057").send(message.content);
          }

});
       }
});


client.login(process.env.BOT_TOKEN);
