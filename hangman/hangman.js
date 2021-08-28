class Hangman {
    constructor(word, attempts) {
        this.word = word.toLowerCase().split("")
        this.remainingGuesses = attempts
        this.guessedLetters = []
        this.status = 'playing'
    }

    calculateStatus() {
        const correctGuesses = this.word.every((letter) => (this.guessedLetters.includes(letter) || letter === ' '))

        if (this.remainingGuesses >= 0 && correctGuesses) {
            this.status = 'finished'
        } else if (this.remainingGuesses <= 0) {
            this.status = 'failed'
        } else {
            this.status = 'playing'
        }


    }

    get puzzle() {
        let puzzle = ''
        this.word.forEach(letter => {
            if (letter === ' ' || this.guessedLetters.includes(letter)) {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
        return puzzle
    }

    get statusMessage() {
        if (this.status === 'playing') {
            return `Playing -> Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Failed -> Nice try! The word was ${this.word.join('')}`
        } else {
            return `Finished -> Great work! You guesses the word`
        }
    }

    makeGuess(guess) {
        if (this.status !== 'playing') {
            return 0
        }
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        if (isUnique) {
            this.guessedLetters.push(guess.toLowerCase())

        }
        if (isUnique && isBadGuess) {
            this.remainingGuesses -= 1
        }

        this.calculateStatus()
    }

}