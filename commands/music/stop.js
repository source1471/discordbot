const Commando = require('discord.js-commando');

class LeaveChannelCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'stop',
            group: 'music',
            memberName: 'stop',
            description: 'Leaves the voice channel and stops playing music '
        });
    }
    async run(message, args)
    {
      if(message.guild.voiceConnection)
      {
          message.guild.voiceConnection.disconnect();
      }
      else
      {
          message.reply("I must be in a voice channel to discconect");
      }
    }
}
module.exports = LeaveChannelCommand;