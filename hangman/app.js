const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let firstPuzzle

window.addEventListener('keypress', function(e) {
    const guess = e.key
    firstPuzzle.makeGuess(guess)
    render()

})

const startGame = async() => {
    const puzzle = await getPuzzle('2')
    firstPuzzle = new Hangman(puzzle, 3)
    render()

}

const render = () => {
    puzzleEl.textContent = `Puzzle: ${firstPuzzle.puzzle}`
    guessesEl.textContent = firstPuzzle.statusMessage
}

startGame()

document.querySelector('#reset').addEventListener('click', startGame)

// const puzzlePromise = getPuzzle('2').then((puzzle) => { console.log(puzzle) }).catch((err) => { console.log(err) })

// getCountry('IN').then((data) => { console.log(data.name) }).catch((err) => { console.log(err) })
// getCenterData().then((data) => console.log(data))

// getLocation().then((data) => { console.log(`${data.region}, ${data.country}`) }).catch((err) => { console.log(err) })

// getLocation().then((location) => {
//     return getCountry(location.country)
// }).then(country => { console.log(country.name) }).catch((err) => { console.log(err) })

getCurrentCountry().then(
    (country) => console.log('Current country: ', country.name)
).catch((err) => { console.log(err) })