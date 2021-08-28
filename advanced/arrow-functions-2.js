const add = function(a, b) {
    return (arguments[0] + arguments[1])
}

console.log(add(1, 2, 3, 4))

const car = {
    color: 'Red',
    getSummary() {
        return `The car is ${this.color}`
    }
}

console.log(car.getSummary())