// Calling the package
var Discord = require('discord.js');
var bot = new Discord.Client();

// Listener Event: Message Received (This will run every time a message is received)
bot.on('message' , message => {

    // Variables
    var sender = message.author; // The person who send the message
    var msg = message.content;
    var prefix = '+' // The text before commands

    // Commands
    if (msg === prefix + 'help') {
      message.channel.send('This is a work in progress bot made by [HM] Levi. This is so far the only command. If you would like him to add a command @Mention him.')
    }
});

// Listner Event: Run on start
bot.on('ready', () => {
    console.log('Bot Launched...')
    // Status
    bot.user.setStatus('Online')
    //"Playing"
    client.setGame('+help | Bot by Levi')
});
// Login
bot.login('NDAxODI4MDg5NjAxOTgyNDY0.DTv8Xw.m_lQBrcvMVsj-XvHHljCh8gdJuo')
