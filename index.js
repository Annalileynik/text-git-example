const { Telegraf } = require('telegraf');

const {sum, mult, div, name, age, city, dataBase} = require('./handlers')


require('dotenv').config()
console.log(process.env)

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize (process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host:process.env.DB_HOST,
  dialect: 'mysql'
})
sequelize.authenticate().then(()=> {
  console.log('Connection has been established successfully.');
}).catch (err =>{
  console.error('Unable to connect to the database:', err);
})

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply('Welcome Anna!'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));

bot.command('porofile', (ctx)=>{
  const chatId = ctx.chat.id;
  const profile = dataBase[chatId]
  if(!profile){
    ctx.reply ('You do not have profile')
  return
  }
ctx.reply(`Your name is ${name}, you are ${age} years old and you live in ${city}`)
})

bot.on('text', (ctx)=>{
  if(ctx.message.text.srartsWith('sum')) sum(ctx)
  if(ctx.message.text.srartsWith('mult')) mult(ctx)
  if(ctx.message.text.srartsWith('div')) div(ctx)
  if(ctx.message.text.srartsWith('/name')) name(ctx)
  if(ctx.message.text.srartsWith('/age')) age(ctx)
  if(ctx.message.text.srartsWith('/city')) city(ctx)

  console.log(dataBase)
  ctx.reply('Hello!!!');
})

bot.launch().then(()=> console.log('Bot started'));

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
