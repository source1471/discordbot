const Commando = require('discord.js-commando');
const discord = require('discord.js');
const bot = new Commando.Client();
var htok = '' ;
const token = htok ;

bot.registry.registerGroup('simple','Simple');
bot.registry.registerGroup('music','Music');
bot.registry.registerGroup('admin','Admin');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};

bot.on('message', function(message){
    if(message.content == 'Hello')
    {
        message.channel.sendMessage('hello test');
    }
});

bot.on('ready' , function(){

    console.log("Ready");
})


bot.login(token);
