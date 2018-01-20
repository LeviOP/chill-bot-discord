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
        var embed = new Discord.RichEmbed()
        .setColor(0x00008B)
        .setTitle('Command List')
        .addField('+ping', 'Tells you your ping')
        .addField('+rules', 'tells you the rules of the server')
        message.channel.send({embed})
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
    bot.user.setPresence({ game: { name: '+help', type: 0 } });
});
// Login
bot.login('NDAxODI4MDg5NjAxOTgyNDY0.DTv8Xw.m_lQBrcvMVsj-XvHHljCh8gdJuo')
