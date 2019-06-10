const Commando = require('discord.js-commando');

class Kickcommand extends Commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'kick'
            group: 'admin',
            memberName: 'kick'
            description: 'Kicks a user - only used by admin'
        });
    }
    async run(message, args)
    {
       if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
            {
                //checks if bot is in channel
                if(!servers[message.guild.id])
                {
                    servers[message.guild.id] = {queue: []}
                }
                //joins the channel that the user is in
                message.member.voiceChannel.join()
                    .then(connection =>
                    {
                        var server = servers[message.guild.id];
                        message.reply("Successfully Joined!");
                        server.queue.push(args);
                        //plays the song that the user requsted
                        Play(connection, message);
                    })
                }
            }
            else
            {
           message.reply("You must be in a voice channel to call the bot!");
            }

    }
}
module.exports = JoinChannelCommand;