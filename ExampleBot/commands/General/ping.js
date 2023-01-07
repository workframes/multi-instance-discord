const { SlashCommandBuilder } = require('discord.js');
const { SlashCommand } = require('../../../BaseClient'); 

module.exports = class Ping extends SlashCommand{
    constructor(){
        super('ping', 'replies with pong', false);
    }

    async run(client, intercation){
        return await intercation.reply('pong bot 1');
    }

    getRaw(){
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription(this.description)
            .toJSON();
    }
}