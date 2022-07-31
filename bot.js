const { TOKEN} = process.env['Token']
const { Client, Collection, GatewayIntentBits } = require('discord.js')
const fs = require('fs')

const client = Client({ intents: GatewayIntentBits.Guilds });
client.commands = new Collection();
client.commandArray = [];

const functionsFolders = fs.readdirSync('./funtions');
for (const folder of functionsFolders) {
  const functionFiles = fs
    .readdirSync(`./funtions/${folder}`)
    .filter(file => file.endsWith('.js'));
    for (const file of functionFiles) require(`./funtions/${folder}/${file}`)(client);
}
