const getNotes = require('./notes')
const chalk = require('chalk')

const msg = getNotes()
console.log(msg)

console.log(chalk.red.bold.inverse('Error!'))