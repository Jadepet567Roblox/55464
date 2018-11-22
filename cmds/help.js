exports.run = async (client, message, args) => {
    var util = require("../fivem.js")
    message.delete();

var icon = "http://thatziv.ddns.net/assets/fivem.png"
    let embed = new Discord.RichEmbed()
    .setAuthor("FiveM Bot", icon)
    .setColor(color)
    .setDescription(`**__Bot Help__**`)
    .addField(`${config.prefix}set <serverIP:port>`, "Sets the current guild FiveM server")
    .addField(`${config.prefix}players`, "Gets the current player list of a server")
    .addField(`${config.prefix}server`, "Gets all information of a server")
    .addField(`${config.prefix}find <username>`, "Finds a user that is on the server via Username")
    .addField(`${config.prefix}id <id>`, "Finds a user that is on the server via Server ID")
    .addField(`${config.prefix}status`, "Checks if the server is online")
    .addField(`${config.prefix}stats`, "Checks bot statistics")
    .addField(`${config.prefix}premium`, "Check **__FiveM Bot Premium__**
    console.log(`FIVEM help cmd was used.. in ${message.guild.name}`)
    util.log(`FIVEM help`)
    message.channel.send({embed: embed})
};
