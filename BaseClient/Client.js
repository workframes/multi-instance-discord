const discord = require('discord.js');

require('better-logging')(console)

const SlashCommnadLoader = require('./SlashCommandLoader');
const EventLoader = require('./EventLoader');

module.exports = class Client {
    /**
     * 
     * @param {String} source 
     * @param {String} token 
     * @param {String} applicationId 
     * @param {String} guildId 
     * @param {Array} intents 
     */
    constructor(source, token, applicationId, guildId, intents){
        this._source = source
        this._token = token
        this._applicationId = applicationId
        this._guildId = guildId

        this._client = new discord.Client({
            intents: intents,
            rest: { version: '10' }
        });

        this._client.slashCommands = new discord.Collection();
        this._client.events = new discord.Collection();
    }

    async start(){
        this._client.login(this._token);

        EventLoader(this, false)
        SlashCommnadLoader(this, false)
    }
}