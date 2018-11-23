//////////////////////////////////////////////////////////////////////////////////////////////////
const Discord1 = require('discord.js');
const Discord2 = require('discord.js');
const Discord3 = require('discord.js');
const Discord4 = require('discord.js');
const Discord5 = require('discord.js');
const Discord6 = require('discord.js');
const Discord7 = require('discord.js');
const Discord8 = require('discord.js');
const Discord9 = require('discord.js');
const Discord10 = require('discord.js');
//////////////////////////////////////////////////////////////////////////////////////////////////
const client1 = new Discord1.Client();
const client2 = new Discord2.Client();
const client3 = new Discord3.Client();
const client4 = new Discord4.Client();
const client5 = new Discord5.Client();
const client6 = new Discord6.Client();
const client7 = new Discord7.Client();
const client8 = new Discord8.Client();
const client9 = new Discord9.Client()
const client10 = new Discord10.Client()
//////////////////////////////////////////////////////////////////////////////////////////////////
var ServerID = "515501341905256450"; 
var ChannelID = "515543913038086165";
var prefix = "W";
console.log('Bots. Is. Online.');
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '1say') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client2.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '2say') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client3.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '3say') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client4.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '4say') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client5.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '5say') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client6.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '6say') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client7.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '7say') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client8.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '8say') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client9.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '9say') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client10.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '10say') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.login(process.env.BOT1_TOKEN);
client2.login(process.env.BOT2_TOKEN);
client3.login(process.env.BOT3_TOKEN);
client4.login(process.env.BOT4_TOKEN);
client5.login(process.env.BOT5_TOKEN);
client6.login(process.env.BOT6_TOKEN);
client7.login(process.env.BOT7_TOKEN);
client8.login(process.env.BOT8_TOKEN);
client9.login(process.env.BOT9_TOKEN);
client10.login(process.env.BOT10_TOKEN);
