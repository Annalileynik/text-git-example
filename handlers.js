function sum(ctx) {


  const message = ctx.message.text.split(' ')
  const firstNumber = Number(message[1])
  const secondNumber = Number(message[2])
  const result = firstNumber + secondNumber;
  ctx.reply(`Your sum is ${result}`)
}
function mult(ctx) {
  const message = ctx.message.text.split(' ')
  const firstNumber = Number(message[1])
  const secondNumber = Number(message[2])
  const result = firstNumber * secondNumber;
  ctx.reply(`Your multiplication is ${result}`)
}
function div(ctx) {
  const message = ctx.message.text.split(' ')
  const firstNumber = Number(message[1])
  const secondNumber = Number(message[2])
  const result = firstNumber / secondNumber;
  ctx.reply(`Your division is ${result}`)
}
const dataBase= {};

function name(ctx) {
  const message = ctx.message.text.split(' ')
  const name = message[1]
  if(!dataBase[ctx.chat.id]) dataBase[ctx.chat.id]={}
  dataBase[ctx.chat.id].name = name
  ctx.reply(`Your name is ${name}`)

}
function age(ctx) {
  const message = ctx.message.text.split(' ')
  const age = message[1]
  if(!dataBase[ctx.chat.id]) dataBase[ctx.chat.id]={}
  dataBase[ctx.chat.id].age = age
  ctx.reply(`Your age is ${age}`)

}
function city(ctx) {
  const message = ctx.message.text.split(' ')
  const city = message[1]
  if(!dataBase[ctx.chat.id]) dataBase[ctx.chat.id]={}
  dataBase[ctx.chat.id].city = city
  ctx.reply(`Your city is ${city}`)
}
module.exports = {sum, mult, div, name, age, city, dataBase}
