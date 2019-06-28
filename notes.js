const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.filter((note) => note.title === title)
  
  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body
    })
    saveNotes(notes)
    console.log(`'${title}' note added!`)
  } else {
      console.log(`A '${title}' note already exists!`)
    }
}

const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => note.title !== title)

  if (notesToKeep.length < notes.length) {
    saveNotes(notesToKeep)
    console.log(chalk.green.inverse(`'${title}' note was removed.`))
  } else {
      console.log(chalk.red.inverse(`There isn't a '${title}' note. Try again.`))
    }
}

const saveNotes = (notes) => {
  const notesJSONFormat = JSON.stringify(notes)
  fs.writeFileSync('./notes.json', notesJSONFormat)
}

const loadNotes = () => {
  try {
    const notesJSONFormat = fs.readFileSync('./notes.json', 'utf8')
    return JSON.parse(notesJSONFormat)
  } catch (error) {
      return []
    }
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote
}