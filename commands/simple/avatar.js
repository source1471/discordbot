const Commando = require('discord.js-commando');

class AvatarCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'avatar',
            group: 'simple',
            memberName: 'avatar',
            description: 'gets the URL of the users avatar'
        });
    }
    async run(message, args)
    {
        message.reply(message.author.avatarURL)
    }
}
module.exports = AvatarCommand;