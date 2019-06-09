const Commando = require('discord.js-commando');

class diceRollCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'roll',
            group: 'simple',
            memberName: 'roll',
            description: 'Flips a coin, landing on either Heads or Tails'
        });
    }
    async run(message, args)
    {
        var roll = Math.floor(Math.random() * 6) +1;
        message.reply("the dice landed on "+ roll)
    }
}
module.exports = diceRollCommand;