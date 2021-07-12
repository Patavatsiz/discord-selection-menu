const { MessageEmbed, Client } = require('discord.js');
const client = new Client({ fetchAllMembers: true });
const buttons = require('discord-buttons')
buttons(client);
const { MessageMenu, MessageMenuOption } = require('discord-buttons');

client.settings = {
  menu_role_1: "",
  menu_role_2: "",
  menu_role_3: "",
  menu_role_4: "",

  token: "",
  prefix: ""
};

client.on("message", async(message) => {
  let args = message.content.trim().split(" ")
  if(args[0] !== client.settings.prefix + "start" /* setup message */) { return false } else {

    let option_1 = new MessageMenuOption()
    .setLabel("Your label")
    .setValue("1")
    .setDescription("Your description")
    .setDefault()
    .setEmoji("") //  you can add emoji next to the label

    let option_2 = new MessageMenuOption()
      .setLabel("Your label")
      .setValue("2")
      .setDescription("Your description")
      .setDefault()
      .setEmoji("") //  you can add emoji next to the label

    let option_3 = new MessageMenuOption()
      .setLabel("Your label")
      .setValue("3")
      .setDescription("Your description")
      .setDefault()
      .setEmoji("") //  you can add emoji next to the label

    let option_4 = new MessageMenuOption()
      .setLabel("Your label")
      .setValue("4")
      .setDescription("Your description")
      .setDefault()
      .setEmoji("") //  you can add emoji next to the label

    let selection = new MessageMenu()
    .setID("selector")
    //.setMaxValue()
    //.setMinValue() 
    .setPlaceholder("Select")
    .addOption(option_1)
    .addOption(option_2)
    .addOption(option_3)
    .addOption(option_4)

    
    /* var embed = new MessageEmbed()
    .setColor("RANDOM")
    //.setTitle("xd")
    //.setDescipriton("xd")
    let msg = await message.channel.send(embed, selection)
    */

    let msg = await message.channel.send("Select a something", selection); 
    

    client.on("clickMenu", async (menu) => {
      if(menu.message.id === msg.id) {
        menuselect(menu)
      }
    })
  };

async function menuselect(menu) {
  switch(menu.values[0]) {
      case "1":
          menu.reply.send("Your selection message", true)
         await menu.clicker.member.roles.add(client.settings.menu_role_1)
        break;
          
      case "2":
          menu.reply.send("Your selection message", true)
        await menu.clicker.member.roles.add(client.settings.menu_role_2)
        break;
      case "3":
          menu.reply.send("Your selection message", true)
        await menu.clicker.member.roles.add(client.settings.menu_role_3)
        break;
      case "4":
          menu.reply.send("Your selection message", true)
        await menu.clicker.member.roles.add(client.settings.menu_role_4)
        break;
      default:
          
        break;
  }
}

});


client.login(client.settings.token)
  .then(() => console.log("\x1b[34m%s\x1b[1m", "[ Bot ] Discord API verified bot's token!"))
  .catch(err => console.error("\x1b[31m%s\x1b[0m", "[ Bot ] Discord API can't verified bot's token!"))
