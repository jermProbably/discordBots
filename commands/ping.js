module.exports = {
  name: 'ping',
  description: 'Ping!',
  execute(msg, args) {
    msg.reply('Farts!')
    // msg.channel.send('pong')
  },
}