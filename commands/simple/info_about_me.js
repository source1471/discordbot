const Commando = require('discord.js-commando');
const discord = require('discord.js');

class InfoCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'info',
            group: 'simple',
            memberName: 'info',
            description: 'Info about author'
        });
    }
    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
            .setTitle("Just some shit")
            .addField("About Me", "Hello, my name is Richard I'm 16 and I live in England",true)
            .setColor(0xFF0000)
            .setThumbnail(message.author.avatarURL)
            .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
            .setFooter("just testing stuff")
            
            message.channel.sendEmbed(myInfo);
    }
}
module.exports = InfoCommand;