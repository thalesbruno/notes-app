const fs = require('fs')

const addNote = (title, body) => {
  const notes = loadNotes()
  
  notes.push({
    title,
    body
  })

  saveNotes(notes)
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
}