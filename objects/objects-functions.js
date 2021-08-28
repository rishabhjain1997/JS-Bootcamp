let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 722
}

let getSummary = function (book) {
    return {
        summary:`${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
    
}

let myBookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(myBookSummary.pageCountSummary)



///TEMP CONVERTOR

let farenheit = 50
let celcius = (farenheit - 32) * (5/9)
let kelvin = celcius + 273.15
console.log(celcius)
console.log(kelvin)


let temperatureConvertor = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celcius: (fahrenheit - 32) * (5/9),
        kelvin: ((fahrenheit - 32) * (5/9)) + 273.15

    }
}

console.log(temperatureConvertor(32))
