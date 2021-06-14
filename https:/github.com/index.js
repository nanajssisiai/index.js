console.log("index.js has been executed");

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("bot has logged into the account");
});

client.on("message", (message) => {
  if (message.author.bot) return;
  //bot commands here
});

client.login(ODM0OTg2NzAxODE0MjM1MjEy.YII39w.7mg5KEGpdI9I1D7JF1NGnwK-QcA);
