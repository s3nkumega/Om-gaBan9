const Discord = require("discord.js");
const fs = require('fs');
 
module.exports = class mute {
    constructor(){
        this.name = 'tempmute',
        this.alias = ['tempmute'],
        this.usage = 'tempmute';
    }
 
    execute(bot, message, args){
        let member = message.mentions.members.first();
 
        var command = args[0];
        var mentioned = args[1];
 
        var days = parseInt(args[3]);
        var hours = parseInt(args[4]);
        var seconds = parseInt(args[5]);
 
        if (message.member.hasPermission('MANAGE_ROLES')) {
 
        let muterole = message.guild.roles.find(role => role.name === "Muted");
 
        if (!message.guild) {
        if (message.guild.id === '796483784156512296') {
            let memberrole = message.guild.roles.find("name", "Member");
            member.removeRole(memberrole);
 
        }}
 
        let usermsg = new Discord.MessageEmbed();
 
        usermsg.setTitle('You have been Muted.');
        usermsg.setColor('76b3fc');
        usermsg.setFooter('Please do not attempt to bypass');
        usermsg.addField('Muted by:',
        `<@${message.author.id}>`);
        
        let mutedmsg = new Discord.MessageEmbed();
    
        mutedmsg.setTitle('User has been Muted Successfully');
        mutedmsg.setColor('76b3fc');
        mutedmsg.setDescription(`User muted: ${mentioned}\nMuted by: <@${message.author.id}>\nReason: ${input}`);
        mutedmsg.setFooter('This mute has been logged.');
 
        if (message.content === `${command}`) {
            return message.channel.send('You did not provide a member to mute.');
        }
        
        if (message.content === `${command} ${mentioned}`) {
        return message.channel.send('Please input a reason for the mute.');
        }
 
        if (message.guild.roles.find(role => role.name)) {
 
        message.member.addRole(muterole);
 
            if (message.content.includes (`${days}d`)) {
                message.channel.send(mutedmsg);
            setTimeout(() => {
                member.removeRole(muterole);
                usermsg.addField('Punishment Time:',
                 `${hours} Seconds`);
            }, `${args[2]} * 86400`);
        }
 
            if (message.content.includes (`${hours}h`)) {
                message.channel.send(mutedmsg);
            setTimeout(() => {
                member.removeRole(muterole);
                usermsg.addField('Punishment Time:',
                 `${hours} Seconds`);
            }, `${args[3]} * 3600`);
        }
 
            if (message.content.includes (`${seconds}s`)) {
                message.channel.send(mutedmsg);
            setTimeout(() => {
                member.removeRole(muterole);
                usermsg.addField('Punishment Time:',
                 `${seconds} Seconds`);
            }, `${args[4]} * 1000`);
        }
 
        if (message.content === `${command} ${mentioned} ${input}`) {
            message.member.addRole(muterole);
            usermsg.addField('Muted for',
            `${input}`);
            usermsg.addField('Punishment Time:',
            'Permenant');
            message.channel.send(mutedmsg);
        }
 
        if (message.member.id === `${message.author.id}`) {
            return;
        }
        if (message.author.id === `${mentioned}`) {
            return message.member.send(usermsg);
        }
    
        message.channel.send(mutedmsg);
        console.log('===========================');
        console.log(`Member Muted: ${mentioned}`);
        console.log(`Muted by: ${message.author.tag}`);
        console.log(`Reason: ${input}`);
        console.log('===========================');
    } else {
 
        message.channel.send('You do not have a `Muted` Role, This command won\'t work.');
    }
 
    } else {
 
        message.reply('You do not have permission to do this.');
 
    }
}
}
