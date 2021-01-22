const Discord = require ("discord.js")

module.exports = {
   name:'ticket',
    execute(bot, message, args){
    message.channel.bulkDelete(1)
    const Emoji_1 = ('✅');
    const Emoji_2 = ('❎');
    const Emoji_3 = ('🔒');
    const Emoji_4 = ('📩');
    const user = message.author.id;
    const channels = "ticket-" + user;
    const reason = message.content.split(" ").slice(1).join(" ");






if (!args[1]) return message.channel.send(`Vous devez spécifier un Problème, /ticket problème`);
let e = new Discord.MessageEmbed()
.setAuthor(message.guild.name,message.guild.iconURL)
.setColor("BLUE")
.setDescription(`**${args[1]}📩**`)
.setFooter(message.author.username,message.author.avatarURL)
channels.send(e).then(o =>{
o.react("📩").then(() => o.react('✅').then(() => o.react('❎')).then(() => o.react('🔒')));
const c = (reaction, user) =>{
    return [Emoji_1, Emoji_2, Emoji_3, Emoji_4].includes(reaction.emoji.name) && user.id !== message.author.id;
   };
   message.awaitReactions(c, { max: 1000, time: 60000, errors: ['time'] })
   
    
message.guild.channels.create(channels).then(c => {
let role = message.guild.roles.find("name", "BIG BOSS");
let role2 = message.guild.roles.find("name", "@everyone");
let role3 = message.guild.roles.find("name", "ADMINISTRATOR");
c.updateOverwrite(role, {
SEND_MESSAGES: true,
READ_MESSAGES: true
});
c.updateOverwrite(role2, {
SEND_MESSAGES: false,
READ_MESSAGES: false
});
c.updateOverwrite(role3, {
    SEND_MESSAGES: true,
    READ_MESSAGES: true
});
c.updateOverwrite(message.author, {
SEND_MESSAGES: true,
READ_MESSAGES: true
});
c.overwriteUpdate(bot.user, { 
    SEND_MESSAGES: true, READ_MESSAGES: true 
})
c.send(`${message.author.username}, ton ticket vient d'être crée, <#${c.id}>.`);
channels.send(`Raison du ticket : `, `${reason}`+'/n'
      `armure | Support `, ` Bonjour ${message.author.username} – ceci est une réponse automatique :
      S'il vous plaît, veuillez nous communiquer de la manière la plus précise et complète possible votre plainte, problème ou question.

      **COMMENT FORMULER UN TICKET PRÉCIS ?**
      **•** indiquer le serveur concerné.
      **•** expliquer la nature du problème.
      **•** attacher un screen et/ou record si nécessaire.

      Merci de patienter le temps qu'un membre de l'équipe soit en mesure de vous aider.

      Si vous n'avez pas d'autres questions et/ou demandes, nous vous invitons à clôturer votre ticket en cours en cliquant sur la réaction 🔒.`)

})
})
    }
}
