const myAge = 6
let message = myAge >= 18 ? `You may vote` : `You may not vote`
console.log(message)

myAge >= 21 ? console.log("YOu may drink") : console.log("You may not drink")

const showPage = () => 'You may stand for elections'
const showErrorPage = () => 'You will have to wait to stand for elections'
const messageElection = myAge > 25 ? showPage() : showErrorPage()
console.log(messageElection)

const team = ['Tyler', 'Porter']
const teamSize = team.length
team.length <= 4 ? console.log(`Team size: ${teamSize}`) : console.log(`Too many people on your team`)