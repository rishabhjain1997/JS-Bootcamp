const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise.'
}, {
    title: 'Office modification',
    body: 'Get a new chair'
}]

const findNote = function(notes, noteTitle) {
    return notes.find(function(note) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })

}



const findNotes = function(notes, query) {
    return notes.filter(function(note) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isBodyMatch || isTitleMatch
    })
}

const sortNotes = function(notes) {
    return notes.sort(function(a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

console.log(sortNotes(notes))
console.log(notes)