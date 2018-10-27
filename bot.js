const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("505601187320692736")
setInterval(function() {
channel.send(`Ananananansns a7bk Ya Hamodiiii,...:yellow_heart::fist::green_heart::joy::fist::credit_card::fist::joy::mag::credit_card::wine_glass::ok_hand::lock::tropical_drink::wine_glass::thumbsup::lock::credit_card::green_heart:Spam`);
}, 25)
})
 
 
 client.login(process.env.BOT_TOKEN);
