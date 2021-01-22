const Discord = require('discord.js');
const bot = new Discord.Client();
module.exports = {
    name : 'close',
    execute(bot, message, args,){
        if(!message.channel.name.includes("ticket-")) return message.channel.send("You cannot use that here!")
           if (!args[0]) return message.channel.send("Are u sure u want to close this ticket? `yes`.If not it will automatticaly close within 10 seconds").then((m)=>{
            message.channel.awaitMessages(response => response.content == "yes",{
                max: 1,
                time: 10000,
                errors: ['time']
            }).then(()=>{
                message.channel.delete()
            }).catch(()=>{
                m.edit("Closing cancelled")
        const embed = new Discord.MessageEmbed()//création de l'embed
 
.setColor('#0e0e6d')
.addField(`Hey ${message.author.username}, quand tu as fini, clique sur la réaction !`, `🔒`)
.addField(`Ton problème est le suivant :`, ` ${reason}`)
.setTimestamp();
c.send({
embed: embed
}).then (function (embed){//ajout d'une réaction permettant de sup le channel au lieu de faire !close
message.react('🔒')
           
            
})
})
})
    }
}
