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


// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function(note) {
//             return note.title.toLowerCase() === noteTitle.toLowerCase()
//         })
//     return notes[index]
// }

console.log(findNote(notes, 'My next trip'))