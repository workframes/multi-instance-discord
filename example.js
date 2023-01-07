const { GatewayIntentBits } = require('discord.js');
const { Client } = require('./BaseClient');

require('dotenv').config()

const currentIntents = [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
]

const ExampleBot = new Client(
    'ExampleBot',
    process.env.EXAMPLE_BOT,
    '1061043349605335102',
    '1061043220534018221', 
    currentIntents 
);

const ExampleBot2 = new Client(
    'ExampleBot2', 
    process.env.EXAMPLE_BOT2, 
    '1061068178949681326', 
    '1061043220534018221',
    currentIntents 
);


ExampleBot.start();
ExampleBot2.start();