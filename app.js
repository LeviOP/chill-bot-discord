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
      message.channel.send(':warning:️No harassing other people
:warning:️No pornography or any kind of offensive matireal
:warning:️Do not ask for Staff ranks
:warning:️Do not spam in chats.
:warning:️If help required ask a staff member to move you to the staff channel
:warning:️Ranks shall be earned not by begging for them
:warning:️You can swear but not too much
:warning:️ Bragging Is bannable
:warning: DO NOT DISRESPECT OWNER/STAFF
:warning: Be Nice to Everyone :heart:')
    }
});

// Listner Event: Run on start
bot.on('ready', () => {
    console.log('Bot Launched...');
    // Status
    bot.user.setStatus('Online');
    //"Playing"
    bot.user.setGame("+help | Bot by Levi")
});
// Login
bot.login('NDAxODI4MDg5NjAxOTgyNDY0.DTv8Xw.m_lQBrcvMVsj-XvHHljCh8gdJuo')
