module.exports = {
    name: 'youtube',
    description: "sends a youtube link!",
    execute(message, args){
        message.channel.send('https://youtube.com/technothepig');
    }
}