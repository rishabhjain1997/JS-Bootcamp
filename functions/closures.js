const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.increment()

console.log(counter.get())


// Adder

const createAdder = (a) => {
    return (b) => (a + b)
}

const add10 = createAdder(10)
console.log(add10(5))


// Tipper

const createTipper = (baseTip) => {
    return (billAmount) => (billAmount * baseTip)
}

const tip15 = createTipper(.15)
console.log(tip15(200))