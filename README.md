## Creating New Bot
* The Directory 
    ```bash
    ExampleBot
    ├───commands
    │   └───General
    └───events
    ```
* The Code
    ```js
    const ExampleBot = new Client(
        'ExampleBot', // Directory Name; Should be and string
        process.env.EXAMPLE_BOT, // Bot Toke, stored in the env file or ever; Should be and string
        '1061043349605335102', // Bot Application Id; Should be and string
        '1061043220534018221', // Bot Guild Id; Should be and string
        currentIntents // Bot Intents; Should be and arry
    );
    ```
* Still need more help?
    Take a look at how i have setup the example bots.