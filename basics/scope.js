// Global scope (name, getName)
// Local scope (age)
// Local scope (location)
// Local scope (height)
let name1 = 'Global'

let getName = function () {
console.log(name1)
let age = 26
if (2 > 0) {
console.log(name1)
console.log(age)
let location = 'Philadelphia'
}
}
getName()
console.log(age)
if (1 < 2) {
console.log(name1)
let height = 72
getName()
}