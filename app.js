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
    if (msg === prefix + 'rules') {
      message.channel.send(':warning:️No harassing other people\n:warning:️No pornography or any kind of offensive matireal\n:warning:️Do not ask for Staff ranks\n:warning:️Do not spam in chats\n:warning:️If help required ask a staff member to move you to the staff channel\n:warning:️Ranks shall be earned not by begging for them\n:warning:️You can swear but not too much\n:warning:️ Bragging Is bannable\n:warning: DO NOT DISRESPECT OWNER/STAFF\n:warning: Be Nice to Everyone :heart:')
    }
    if (msg === prefix + 'ping') {
        message.channel.send('Pong! Your ping is ' + `${Date.now() - message.createdTimestamp}` + 'ms')
    }
});

// Listner Event: Run on start
bot.on('ready', () => {
    console.log('Bot Launched...');
    // Status
    bot.user.setStatus('Online');
    //"Playing"
    bot.user.setGame('+help | Bot by Levi')
});
// Login
bot.login('NDAxODI4MDg5NjAxOTgyNDY0.DTv8Xw.m_lQBrcvMVsj-XvHHljCh8gdJuo')
