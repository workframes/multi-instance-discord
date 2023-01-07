**If you know what your doing just delete 2 ExampleBot**

## Creating New Bot
> It comes with a command & event handler.

* The Directory 
    ```bash
    ExampleBot
    ├───commands
    │   └───General
    └───events
    ```
* Creating a new bot
    ```js
    const ExampleBot = new Client(
        'ExampleBot', // Directory Name; Should be and string
        process.env.EXAMPLE_BOT, // Bot Toke, stored in the env file or ever; Should be and string
        '1061043349605335102', // Bot Application Id; Should be and string
        '1061043220534018221', // Bot Guild Id; Should be and string
        currentIntents // Bot Intents; Should be and arry
    );
    ```
* Example Event
    > Events are loaded automatically, just simply use the discord bot events.
    ```js
    module.exports = {
        name: 'ready',
        run: async (client) => {
            console.log(`${client.user.tag}, is running.`)
        }
    }
    ```
* Example Command
    > Uses the a custom `SlashCommand` class, and also loaded automatically like the events.
    ```js
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
    ```
* Still need more help?
    Take a look at how i have setup the example bots.

