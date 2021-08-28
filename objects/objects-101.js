let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title='Animal Farm'
console.log(`${myBook.title} by ${myBook.author}`)

//Challenge
person = {
    name: 'Rishabh',
    age: 26,
    location:'Delhi'
}

let personInfo = function(person)
{
    return `${person.name} is ${person.age} and lives in ${person.location}`
}


console.log(personInfo(person))
person.age +=1

console.log(personInfo(person))