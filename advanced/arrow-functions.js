const square = (num) => num * num


const squareLong = (num) => {
    return num * num
}


console.log(square(3))


people = [{
        name: 'Andrew',
        age: 27
    },
    {
        name: 'Vikram',
        age: 22
    },
    {
        name: 'Rishabh',
        age: 32
    }
]

const aged22 = people.find((person) => (person.age === 22)).name
console.log(aged22)