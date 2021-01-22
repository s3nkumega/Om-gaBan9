const { constants } = require("buffer");
const Discord = require("discord.js")
const fs = require('fs');
const { type } = require("os");
const { config, connected, send } = require("process");
const { prefix, token } = require('./config.json');
const dbl = new Discord.Client('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc4NDkzMDYwNDg1MjE4MzA5MSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjExMzQ4NjE3fQ.28PFKWCyxuawgdiHYVSmWO1AS27A-u8KRbBvyBbM3L0');
const bot = new Discord.Client({
    disableMentions: "everyone",
    partials: ["GUILD_MEMBER", "MESSAGE", "USER", "REACTION"],
    restRequestTimeout: 25000,
  });

  






  dbl.on('posted', () => {
    console.log('Server count posted!');
  })
  
  dbl.on('error', e => {
   console.log(`Oops! ${e}`);
  })
 

   
bot.on('ready', function(){
    console.log("je suis prêt!!!")
    setInterval(function() {
 
        let Statuses = [
      
          "Objectif 513  users !",
          `160 Users | "o!"help`,
          "invite le | o!bot 👌",
        ]
        bot.user.setActivity('o!help | How to become the best bot in discord 🈶 ', { type: 'WATCHING'}).catch(console.error);
         
        let status = Statuses[Math.floor(Math.random() * Statuses.length)];
        bot.user.setActivity( status , { type : "WATCHING"})}, 30000)
       
      return
        
     
    })
    bot.on('guildMemberAdd', member => {
        member.guild.channels.cache.get(bienvenue).send(`${member}`, new Discord.MessageEmbed()
            .setDescription(`${member} a rejoint le serveur. Nous sommes désormais ${member.guild.memberCount} ! 🎉`)
            .setColor('#00ff00'))
        member.roles.add('Member')
    })
     
    bot.on('guildMemberRemove', member => {
        member.guild.channels.cache.get(config.greeting.channel).send(new Discord.MessageEmbed())
            var embed = new Discord.MessageEmbed()
            .setDescription(`${member.user.tag} a quitté le serveur... 😢`)
            .setColor('#ff0000')
   message.channel.send(embed)
    })
    bot.on('guildMemberAdd', member => {
        member.createDM().then(channel => {
          return channel.send('Bienvenue sur mon serveur ' + member.displayName)
        }).catch(console.error)
        // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
    })
 

bot.on('message', message => {
  if (message.content === prefix + "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);    
	} else if (message.content === prefix + "beep") {
		message.channel.send('Boop.');
	} else if (message.content === prefix + "GuildS") {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	} else if (message.content === prefix + "user-info") {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	} else if (message.content === prefix + "react") {
		message.react('😄');
        message.react('👍');  
    } else if (message.content === prefix + "coucou") {  
        var embed = new Discord.MessageEmbed() 
        .setColor ('BLACK')
        .setTitle ('SALUT') 
        message.channel.send (embed); 
         
    } else if (message.content === prefix + "CMD") {  
        var embed = new Discord.MessageEmbed() 
        .setColor ('BLUE')
        .setTitle ('Donnez moi des suggestions de commandes SVP') 
        message.channel.send (embed);
        message.react('😄');
        message.react('👍');

    } else if (message.content === prefix + "Ticket") {  
        var embed = new Discord.MessageEmbed() 
        .setTitle(`:mailbox_with_mail: ${bot.user.username} Ticket`)
        .setColor('ORANGE')
        .setDescription(`Hello! I'm ${bot.user.username}, the Discord bot for super cool support ticket stuff and more! Here are my commands:`)
        .addField(`Tickets`, `[${prefix}new]() > Opens up a new ticket and tags the Support Team\n[${prefix}close]() > Closes a ticket that has been resolved or been opened by accident`)
        .addField(`Other`, `[${prefix}help]() > Shows you this help menu your reading\n[${prefix}ping]() > Pings the bot to see how long it takes to react\n[${prefix}about]() > Tells you all about ${bot.user.username}`)
        message.channel.send(embed);
    
    } else if (message.content === prefix + `GOT`) {
        message.channel.send(`Hoold on!`).then(m => {
        message.edit.send(`:ping_pong: Wew, made it over the ~waves~ ! **Pong!**\nMessage edit time is ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Discord API heartbeat is ` + Math.round(bot.ping) + `ms.`);
        
        })

        } else if (message.content === prefix + 'about') {
            var embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Année 2021')
            .setURL('https://pixabay.com/fr/illustrations/chatbot-bot-assistant-soutien-4071274/')
            .setAuthor('Some name', 'https://media.gettyimages.com/vectors/artificial-intelligence-pixel-perfect-icons-vector-id953146526?k=6&m=953146526&s=612x612&w=0&h=lbg2E4ZO0QjX-caAFS13DFpGFnpn1C8m9H5GrxKFdnc=','https://media.gettyimages.com/vectors/artificial-intelligence-pixel-perfect-icons-vector-id953146526?k=6&m=953146526&s=612x612&w=0&h=lbg2E4ZO0QjX-caAFS13DFpGFnpn1C8m9H5GrxKFdnc=')
            .setDescription('Salut tout le monde, je vous souhaite une bonne année 2021 en ce temps de pandémie !')
            .setThumbnail('https://i.imgur.com/wSTFkRM.png')
            .setImage('https://pixabay.com/fr/illustrations/chatbot-bot-assistant-soutien-4071274/')
            .setTimestamp()
            .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
             message.channel.send(embed);
             console.log("commandes envoyés !!!!");
             message.delete();
             
        } else if (message.content === prefix + 'avatar') {
            if (!message.mentions.users.size) {
                return message.channel.send(`Your avatar: ${message.author.displayAvatarURL}`);
            }
            const avatar = message.mentions.users.map(user => {
                return (`${user.username}'s avatar: ${user.displayAvatarURL}`);
            });
            message.channel.send(avatar);

        } else if (message.content === prefix + 'Vote'){


            var embed = new Discord.MessageEmbed()
                       .setTitle("Vote System")
                       .setDescription("votez pour la performance du bot!")
                       .setFooter("Vote System")
                       .setColor("00ff00")
                       .setColor("BLUE")
                     message.channel.send(embed)
    } else if (message.content === prefix +'stats') {
        var memberCount = bot.users.size;
    var servercount = bot.guilds.size;
        let m = " ";
        m += 'je suis en compagnie de '+ memberCount +' membres';
        m += 'je suis présent dans '+ servercount+' serveurs \n';
        message.author.send('je suis en compagnie de' + memberCount +' membres\n je suis présent dans '+ servercount+ 'serveurs \n');
    }else if (message.content === prefix + 'close'){ 
        if(!message.channel.name.includes("ticket-")) return message.channel.send("You cannot use that here!")
        message.channel.delete();
  
    }else if (message.content === prefix + 'topsecret'){
            message.channel.send(responseObject[message.content === prefix + 'topsecret'])
        
    }  else if(message.content === prefix + "serverlist") {
    var serverlist_embed = new Discord.MessageEmbed()
    .setColor("#FF0066")
    .setTitle("Menu serverlist reçue !")
    .addField("Serveur", `${message.guild.name} serveur`)
    .addField("Membre", `${message.author.username} membre`)
    .setFooter("© OmegaBan9🈶™ 2021")
    message.channel.send(serverlist_embed)
    console.log(`Menu d'invitation envoyé à ${message.author.username}`)
    }else if (message.content === prefix + 'channel'){
            const name = message.channel.name;
            const type = message.channel.type;
            const id = message.channel.id;
            const topic = message.channel.topic;
            const temps = message.channel.createdTimestamp;
            const Number = message.channel.typingCount;
              
                message.reply("\n" + "```javascript"+ "\n" + "Nom du channel: " + name + "\n" + "Type de channel: " + type + "\n" +
                "Channel id: " + id + "\n" + "Topic: " + topic + "\n" + "Créer le: " + temps + "\n"+ "Total de message:"+ Number +"```");
               
            
        }else if (message.content === prefix +"info") {
            var memberavatar = message.author.avatarURL
            var membername = message.author.username
               var mentionned = message.mentions.members.first();
              var getvalueof;
              if(mentionned){
                  var getvalueof = mentionned;
              } else {
                  var getvalueof = message.author;
              }
         
              if(getvalueof.bot == true){
                  var checkbot = "L'utilisateur est un bot";
              } else {
                  var checkbot = "N'est pas un bot";
              }
              if(getvalueof.presence.status == 'online'){
                var status = "En ligne";
              }else{
                var status = "Hors ligne";
              }
         
         
            message.channel.send({
                embed: {
                  type: 'rich',
                  description: '',
                  fields: [{
                    name: 'Pseudo',
                    value: getvalueof.username,
                    inline: true
                  }, {
                    name: 'User id',
                    value: getvalueof.id,
                    inline: true
                  },{
                    name: 'Discriminateur',
                    value: getvalueof.discriminator,
                    inline: true
        },{
                    name: 'Status',
                    value: status,
                    inline: true
        },{
                    name: 'Bot',
                    value: checkbot,
                    inline: true
        }],
                image: {
              url: getvalueof.avatarURL
                },
                  color: 0xE46525,
                  footer: {
                    text: 'by スアン | (•̪●)',
                    proxy_icon_url: ' '
                  },
         
                  author: {
                    name: membername,
                    icon_url: memberavatar,
                    proxy_icon_url: ' '
                  }
                } 
            
               
      
})




bot.on('message', message => {
    if(message.content === prefix + "bot"){
    message.reply("ton invitation https://discord.com/api/oauth2/authorize?client_id=788472793431539745&permissions=8&scope=bot")
    console.log("invitation du bot demmander!!!");
    }
    if(message.content === prefix + "créateur"){
        message.channel.sendMessage("Le créateur est s3nkumega#7957 !!!")
        console.log("commande créateur réussi !!!")
        message.delete();
    }
    if(message.content === prefix + "serveur"){
        message.author.sendMessage("Tien le serveur du créateur est school serveur ")
        message.channel.sendMessage("regarde tes message privés")
        console.log("commande serveur créateur réussi !!!")
        message.delete();
    }
    if (message.content === prefix + "help"){
        var help_embed = new Discord.MessageEmbed()
        .setColor('#00ff1b')
        .setThumbnail("https://pixabay.com/fr/illustrations/chatbot-bot-assistant-soutien-4071274/")
        .setTitle("Voici les commandes pour admin : ")
        .setDescription("Vous pouvez utilisez mes commandes avec le préfixe ``o!``")
        .addField("**ADMIN**", "_______________")
        .addField("``ban``, ``kick``, ``mute``, ``clear [chiffre entre 1 et 100]``, ``unmute``, ``warn``, ``unwarn``, ``infraction [mentionner un utilisateur]``, '' ticket''  ,''close''", "____________________")
        .addField("**FUN**", "__________________")
        .addField("``8ball [ta question que tu veut] ping beep react foo``", "___________________")
        .addField("**INFO**", "_________________ ")
        .addField("``bot`` GuildS créateur user-info", "pour avoir le bot" )
        .addField("serveur", "Te donne le serveur du créateur")
        .setTimestamp() 
        .setFooter("signaler un bug? faite o! créateur")
        message.author.send(help_embed)
        message.channel.send(":white_check_mark:| Les commandes vous ont été envoyés en messages privés");
        console.log("commandes envoyés !!!!");
        message.delete();
 
}
});
 
/*Kick*/
bot.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'kick'){
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.id === message.guild.ownerID) return message.channel.send('Vous ne pouvez pas exclure le propriétaire du serveur.')
       if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas kick ce membre :x:")
       if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur :sunglass:")
       const reason = args.slice(1).join(' ') || 'Aucune raison fournie'
        member.kick(reason)
       message.channel.send( "@${member.user.tag} a été exclu + ':white_check_mark: !")
    }
});
 
 
/*Ban*/
bot.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban'){
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
        if (member.id === message.guild.ownerID) return message.channel.send('Vous ne pouvez pas exclure le propriétaire du serveur.')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas ban ce membre :x:")
        if (!member.bannable) return message.channel.send("Je ne peux pas bannir cet utilisateur :sunglass:")
        const reason = args.slice(1).join(' ') || 'Aucune raison fournie'
        member.ban(member, {days: 7})
        message.channel.send("**"+member.user.username + '** a été banni :white_check_mark:')
    }
    });
 
 
bot.on("message", message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'clear') {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let count = args[1]
        if (!count) return message.channel.send("Veuillez indiquer un nombre de messages à supprimer")
        if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide")
        if (count < 1 || count > 1000000) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100000")
        message.channel.bulkDelete(parseInt(count) + 1)
    }
});
bot.on("message", message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

if (args[0].toLowerCase() === prefix + "mute") {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
    let member = message.mentions.members.first()
    if (!member) return message.channel.send("Membre introuvable")
    if (member.highestRole.comparePositionTo(message.member.highestRole) < 1 && message.author.id !== message.guild.ID) return message.channel.send("Vous ne pouvez pas mute ce membre")
        message.channel.send(member + ' a été mute :white_check_mark:')
            
    }
});

bot.on("message", message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

if (args[0].toLowerCase() === prefix + "infractions"){
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
    let member = message.mentions.members.first()
    if (!member) return message.channel.send("Veuillez mentionner un membre")
    let embed = new Discord.MessageEmbed()
        .setAuthor(member.user.username, member.user.displayAvatarURL)
        .addField('10 derniers warns', ((warns[member.id] && warns[member.id].length) ? warns[member.id].slice(0, 10).map(e => e.reason) : "Ce membre n'a aucun warns"))
        .setTimestamp()
    message.channel.send(embed)
} 

});
bot.on("message", message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

if(args[0].toLowerCase() === prefix + "unmute"){
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande.")
    let member = message.mentions.members.first()
    if(!member) return message.channel.send("Membre introuvable")
    if(member.highestRole.comparePositionTo(message.member.highestRole) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas unmute ce membre.")
    
    let muterole = message.guild.roles.find(role => role.name === 'Muted')
    if(muterole && member.roles.has(muterole.id)) member.removeRole(muterole)
    message.channel.send(member + ' a été unmute :white_check_mark:')
}
});
bot.on("message", message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

if(args[0].toLowerCase() === prefix + "unwarn"){
    let member = message.mentions.members.first()
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande.")
    if(!member) return message.channel.send("Membre introuvable")
    if(member.highestRole.comparePositionTo(message.member.highestRole) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas unwarn ce membre.")
    if(!warns[member.id]|| !warns[member.id].length) return message.channel.send("Ce membre n'a actuellement aucun warns.")
    warns[member.id].shift()
    fs.writeFileSync('./warns.json',JSON.stringify(warns))
    message.channel.send("Le dernier warn de " +member+ " a été retiré :white_check_mark:")
     }
    });  
 
     bot.on("message", message => {
        if (!message.guild) return
        let args = message.content.trim().split(/ +/g)

if (args[0].toLowerCase() === prefix + "warn") {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
    let member = message.mentions.members.first()
    if (!member) return message.channel.send("Veuillez mentionner un membre")
    if (member.highestRole.comparePositionTo(message.member.highestRole) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas warn ce membre")
    let reason = args.slice(2).join(' ')
    if (!reason) return message.channel.send("Veuillez indiquer une raison")
    if (!warns[member.id]) {
        warns[member.id] = []
    }
    warns[member.id].unshift({
        reason: reason,
        date: Date.now(),
        mod: message.author.id
    })
    fs.writeFileSync('./warn.js', JS.stringify(warn))
    message.channel.send(member + " a été warn pour " + reason + " :white_check_mark:")
}
     });
//8ball
bot.on('message',message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    
    if (args[0].toLocaleLowerCase() === prefix + '8ball'){
        if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
        let rep = ["Non :x:", "J'ai envie de dormir :zzz:", "OMG :face_palm:", "Peut être... :thinking:", "Absolument :interrobang:"];
        let reptaille = Math.floor((Math.random() * rep.length));
        let question = args.slice(0).join(" ");
        
        let embed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag)
            .setColor("#00ff1b")
            .addField("Question:", question)
            .addField("Réponse:", rep[reptaille]);
        message.channel.send(embed)
    }
});
bot.on('message',message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

if (args[0].toLocaleLowerCase() === prefix + 'rps'){
    if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
    let rep = ["rock", "paper", "scissor"];
    let reptaille = Math.floor((Math.random() * rep.length));
    let question = args.slice(0).join(" ");
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag)
    .setColor("#00ff1b")
    .addField("user:", question)
    .addField("bot:", rep[reptaille]);
message.channel.send(embed)
    const choice = args[0];
    if (!choice) return message.channel.send(`How to play: \`${prefix}rps <rock|paper|scissors>\``);
    switch (choice) {
        case 'rock': {
            if (result === 'paper') return message.reply('I won!');
            else return message.reply('You won!');
        }
        case 'paper': {
            if (result === 'scissors') return message.reply('I won!');
            else return message.reply('You won!');        
        }
        case 'scissors': {
            if (result === 'rock') return message.reply('I won!');
            else return message.reply('You won!');
        }
     
    }
}
})

bot.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`)
    bot.commands.set(command.name, command)
}

bot.on('message', async message => {
     if(!message.content.startsWith(prefix)) return;
   const args = message.content.substring(prefix.length).split(" ");
   const command = args.shift().toLowerCase();
   switch(command){
    case "avatar":
    bot.commands.get('avatar').execute(bot, message, args);
     break;
     case "unban":
     bot.commands.get('unban').execute(bot, message, args);
     break;
     case "ticket":
     bot.commands.get('ticket').execute(bot, message, args);
     break;
     case "google":
         bot.commands.get('google').execute(bot, message, args);
         break; 
         case "new":
         bot.commands.get('new').execute(bot, message, args);
         break; 
         case "tempban":
                 bot.commands.get('tempban').execute(bot, message, args);
                 break;
          case "role":
                 bot.commands.get('role').execute(bot, message, args);
                     break;       
                     case "close":
                 bot.commands.get('close').execute(bot, message, args);
                     break;       
                     case "lock":
                        bot.commands.get('lock').execute(bot, message, args);
                            break;  
                            case "unlockChannel":
                                bot.commands.get('unlockChannel').execute(bot, message, args);
                                    break;            
                        
             }
})


 


bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
   
    let prefix = config.prefix; // On définit le prefix, ou il se situe précisément.
    let messageArray = message.content.split("");
    let command = messageArray[0]; // Fait en sort que la commande soit seulement le premier mot du message. (ex: !info bottesteur, cmd ne va retenir que "!info").
    let args = messageArray.slice(1);

    if (message.content === `${prefix}Membre`) {
      let role = message.guild.roles.find("name", "Membre");
   
      if (message.member.roles.find("name", "Membre")) {
        message.reply("Vous avez déjà ce rôle");
      } else {
        message.member.addRole(role);
        message.reply(
          `Vous faîtes maintenant parti de ce discord en tant que Membre`
        );
        let channel = bot.channels.find("name", "rôle-ajoutés");
        channel.send("Est devenu membre : " + message.author);
      }
   
      console.log("Passe membre :" + message.author);
    }
   
    if (message.content === `Membre remove`) {
      let role = message.guild.roles.find("name", "Membre");
   
      if (message.member.roles.find("name", "Membre")) {
        message.member.removeRole(role);
        message.reply(`Le rôle Membre vous a été retiré`);
        let channel = bot.channels.find("name", "rôle-ajoutés");
        channel.send("Le rôle Membre a été retiré pour : " + message.author);
      } else {
        message.reply(`Vous n'avez pas ce rôle !`);
      }
    }
   
    //Créer un rôle seulement si il a le rôle Admin
    if (message.content.startsWith("creatR")) {
      if (message.member.roles.find("name", "Admin")) {
        const str = message.content.substring(uneCommande.length);
        message.member.guild.createRole({
          name: str
        });
        message.channel.send(`Le rôle ` + str + ` a bien été créé !`);
      } else {
        message.reply(` vous n'avez pas le rôle nécessaire pour cette action !`);
      }
    }
  });
  const responseObject = {
    "Quick Response 1": "Reply 1",
    "Quick Response 2": "Reply 2",
    "Quick Response 3": "Reply 3",
    "Quick Response 4": "Reply 4",
    "Quick Response 5": "Reply 5",
    "Quick Response 6": "Reply 6",
    "Quick Response 7": "Reply 7",
    "Quick Response 8": "Reply 8",
    "Quick Response 9": "Reply 9",
    "Quick Response 10":"Reply 10"
};

// Just saying what to do with the objects above
bot.on("message", (message) => {
    if (message.content === prefix + 'question')
    if (responseObject[message.content]) {
        message.channel.send(responseObject[message.content]);
    }
})  
}
        })
       
    bot.login(token);