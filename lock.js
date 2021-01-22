const fs = require('fs')
 
module.exports = {
    name: 'lock',
    guildOnly: true,
    execute (message, args, bot) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        const channel = message.mentions.channels.first() || message.channel
        if (bot.db.lockedChannels.includes(channel.id)) return message.channel.send('Ce salon est déjà vérrouillé.')
        bot.db.lockedChannels.push(channel.id)
        fs.writeFileSync('./db.json', JSON.stringify(client.db))
        message.channel.send('Ce salon a été verrouillé !')
    },
    
}
 