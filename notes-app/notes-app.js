'use strict'

let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}


renderNotes(notes, filters)

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})


document.querySelector('#create-note').addEventListener('click', () => {
    const noteId = uuidv4()
    const nowTimestamp = moment().valueOf()
    notes.push({
        id: noteId,
        title: '',
        body: '',
        createdAt: nowTimestamp,
        updatedAt: nowTimestamp

    })
    saveNotes(notes)
    location.assign(`/edit.html#${noteId}`)

})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})


window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
    }
    renderNotes(notes, filters)
})