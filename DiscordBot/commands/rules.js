module.exports = {
    name: 'rules',
    description: "sends an embed of rules!",
    execute(message, args, Discord){
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#304281')
       .setTitle('Server Rules')
       .setDescription('Read each server rule carefully!')
       .addFields(
           {name: 'Rule 1', value: 'Null'},
           {name: 'Rule 2', value: 'Null'},
           {name: 'Rule 3', value: 'Null'}
       )
       .setFooter('Stay tuned and check the rules channel, as server rules may be updated.');

       message.channel.send(newEmbed);
    }
}