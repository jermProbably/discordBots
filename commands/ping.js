module.exports = {
  name: 'ping',
  description: 'Ping!',

  execute(msg, args) {
    const userName = msg.author.username + '#' + msg.author.discriminator
    // msg.reply('Pong!')
    console.log(args)
    if (args[0] === '1') {
      return msg.channel.send('That\'s a number lol!')
    }
    msg.channel.send('Pong!')
  }
}