const { Routes } = require('discord.js');
const fs = require('fs');

const  { fetchFiles } = require('./Utils');

module.exports = async (client, reload) => {
    await fs.readdirSync(`./${client._source}/commands/`).forEach((category) => {
        const commands = fetchFiles(`./${client._source}/commands/${category}`, '.js');

        commands.forEach((_command) => {
            if(reload)
                delete require.cache[require.resolve(`../${client._source}/commands/${category}/${_command}`)]

            const __command = require(`../${client._source}/commands/${category}/${_command}`);
            const command = new __command();

            client._client.slashCommands.set(command.name, command);
            console.log(`[${client._source}] Loaded /${command.name}`);
        });
    });


    const rawSlashCommands = client._client.slashCommands.map((command) => {
        return command.getRaw();
    });

    await client._client.rest.put(Routes.applicationGuildCommands(client._applicationId, client._guildId), {
        body: rawSlashCommands 
    });

    const registeredSlashCommands = await client._client.rest.get(
        Routes.applicationGuildCommands(client._applicationId, client._guildId)
    );

    client._client.rawLoadedSlashCommands = registeredSlashCommands;
};