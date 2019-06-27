const yargs = require('yargs')
const chalk = require('chalk')
const getNotes = require('./notes')

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: () => console.log('Adding a new note')
})

yargs.command({
  command: 'remove',
  describe: 'Remove a new note',
  handler: () => console.log('Removing a new note')
})

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: () => console.log('Reading a note')
})

yargs.command({
  command: 'list',
  describe: 'List all note',
  handler: () => console.log('Listing all note')
})

yargs.argv