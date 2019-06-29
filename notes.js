const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => note.title === title)

  if (!duplicateNote) {
    notes.push({
      title,
      body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse(`'${title}' note added!`))
  } else {
      console.log(chalk.red.inverse(`A '${title}' note already exists!`))
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

const listNotes = () => {
  const notes = loadNotes()

  console.log(chalk.blue('Your notes:'))
  notes.forEach((note) => {
    console.log(`[ ] ${note.title}`)
  })
}

const readNote = (title) => {
  const notes = loadNotes()

  const noteFound = notes.find((note) => note.title === title)
  if (noteFound) {
    console.log(chalk.blue.inverse(noteFound.title))
    console.log(noteFound.body)
  } else {
    console.log(chalk.red.inverse(`'${title}' note not found`))
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
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}