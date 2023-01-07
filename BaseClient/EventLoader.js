const  { fetchFiles } = require('./Utils');

module.exports = async (client, reload) => {
    const events = fetchFiles(`./${client._source}/events/`, '.js');

    events.forEach((_event, _) => {
        if(reload)
            delete require.cache[require.resolve(`../${client._source}/events/${_event}`)];
        
        const event = require(`../${client._source}/events/${_event}`);
        client._client.on(event.name, event.run.bind(null, client._client))
        console.log(`[${client._source}] Loaded Event: ${event.name}`);
    })
}