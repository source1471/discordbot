const Commando = require('discord.js-commando');
const YTDL = require('ytdl-core');

function Play(connection, message)
{
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0],{filter: "audioonly"}));
    server.queue.shift();
    server.dispatcher.on("end", function(){
        if(server.queue[0])
        {
            Play(connection,message);
        }
        else
        {
        connection.disconnect();
        }


    });
}


class JoinChannelCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'play',
            group: 'music',
            memberName: 'play',
            description: 'Joins the voice channel and starts playing music'
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