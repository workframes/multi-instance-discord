module.exports = {
    name: 'interactionCreate',
    run: async(client, interaction) => {
        const { commandName } = interaction;
        const command = client.slashCommands.get(commandName);

        if(!command)
            return;
        
        const member = interaction.member;

        if(command.restricted)
            return
    
        try{
            await command.run(client, interaction);
        } catch(error) {
            console.error(error);
            return await interaction.reply("Failed to run command, please try again later.");
        }
    }
}