let num = 103.941

console.log('Fixed to 2 places: '+ num.toFixed(2))
console.log('Round: '+ Math.round(num))
console.log('Floor: '+ Math.floor(num))
console.log('Ceil: '+ Math.ceil(num))


let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

console.log('Random number between 10 and 20: ' + randomNum)

let makeGuess = function(guess)
{
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    console.log('Playing the guessing game: '+ randomNum)
    return randomNum === guess
}

console.log(makeGuess(2))