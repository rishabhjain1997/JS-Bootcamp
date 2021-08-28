'use strict'
// Save notes to localStorage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}


// Read existing notes from localStorage

const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    try { return (notesJSON !== null ? JSON.parse(notesJSON) : []) } catch (e) {
        return []
    }
}

// Remove note by id
const removeNote = (noteId) => {
    const index = notes.findIndex((note) => note.id === noteId)

    if (index > -1) {
        notes.splice(index, 1)
    }
}

// Generate DOM structure for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('div')
    const button = document.createElement('button')
    const textEl = document.createElement('a')

    // Setup the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click', () => {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    // Setup the text content of the note
    if (note.title) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = "Unnamed note"
    }
    textEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.appendChild(textEl)
    return noteEl
}



// Sort your notes by one of three ways
const sortNotes = (notes, sortBy) => {
        if (sortBy === 'byEdited') {
            return notes.sort((a, b) => {
                if (a.updatedAt > b.updatedAt) {
                    return -1
                } else if (b.updatedAt > a.updatedAt) {
                    return 1
                } else {
                    return 0
                }

            })
        } else if (sortBy === 'byCreated') {
            return notes.sort((a, b) => {
                if (a.createdAt > b.createdAt) {
                    return -1
                } else if (b.createdAt > a.createdAt) {
                    return 1
                } else {
                    return 0
                }

            })
        } else if (sortBy === 'alphabetical') {
            return notes.sort((a, b) => {
                if (a.title.toLowerCase() > b.title.toLowerCase()) {
                    return -1
                } else if (b.title.toLowerCase() > a.title.toLowerCase()) {
                    return 1
                } else {
                    return 0
                }

            })
        }
    }
    //Render application notes
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    document.querySelector('#notes').innerHTML = ''
    const filteredNotes = notes.filter((note) => (note.title.toLowerCase().includes(filters.searchText.toLowerCase())))
    filteredNotes.forEach((note) => {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}



// Generate the last updated message
const generateLastEdited = ((timestamp) => (`Last updated: ${moment(timestamp).fromNow()}`))