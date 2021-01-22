const Discord = require ("discord.js")

module.exports = {
   name:'new',
    execute(bot, message, args){
    message.channel.bulkDelete(1)
 
    const reason = message.content.split(" ").slice(1).join(" ");
    const user = message.author.username;
    const TicketChannels = "ticket-" + user;
    if (!args[1]) return message.channel.send(`Vous devez spécifier un Problème, /ticket problème`);
    message.guild.channels.create(TicketChannels, {
        type: 'text',
    }).then(TicketChannel => {
        TicketChannel.updateOverwrite(everyone, { SEND_MESSAGES: false, READ_MESSAGES: false })
        TicketChannel.updateOverwrite(staff, { SEND_MESSAGES: true, READ_MESSAGES: true })
        TicketChannel.updateOverwrite(message.author, { SEND_MESSAGES: true, READ_MESSAGES: true })
        TicketChannel.updateOverwrite(bot.user, { SEND_MESSAGES: true, READ_MESSAGES: true })

    
    


    

    message.channel.send('Available Departments", `${Emoji_1} \n${Emoji_2}\n${Emoji_3} \n ${Emoji_4} '+'/n'
    `Raison du ticket : `, `${reason}`+'/n'
          `armure | Support `, ` Bonjour ${message.author.username} – ceci est une réponse automatique :
          S'il vous plaît, veuillez nous communiquer de la manière la plus précise et complète possible votre plainte, problème ou question.
  
          **COMMENT FORMULER UN TICKET PRÉCIS ?**
          **•** indiquer le serveur concerné.
          **•** expliquer la nature du problème.
          **•** attacher un screen et/ou record si nécessaire.
  
          Merci de patienter le temps qu'un membre de l'équipe soit en mesure de vous aider.
  
          Si vous n'avez pas d'autres questions et/ou demandes, nous vous invitons à clôturer votre ticket en cours en cliquant sur la réaction 🔒.`)
   
    })
}
        
       
        
    }
    




    


    