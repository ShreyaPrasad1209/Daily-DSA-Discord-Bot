//include discord.js
import { Client, Intents } from 'discord.js';

//include dotenv
import dotenv from 'dotenv';
dotenv.config();


//include client
const client = new Client({intents: [Intents.FLAGS.GUILDS]});

//use ready event to connect to discord
client.on('ready', () => {
    console.log(`Connected to Discord as ${client.user.tag}`);
})

//use message event to listen for messages
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
  
    if (interaction.commandName === '!dsa') {
      await interaction.reply('Hey folks, this is Daily DSA Bot!');
    }
  });

//log in to server 
client.login(process.env.DISCORD_TOKEN);