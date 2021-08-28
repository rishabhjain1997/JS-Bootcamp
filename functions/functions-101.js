let fahrenheitToCelcius = function (fahrenheit) {
    const celcius = (fahrenheit -32) * (5/9)
    return celcius
}

let temp90 = fahrenheitToCelcius(90)
let temp70 = fahrenheitToCelcius(70)
let temp32 = fahrenheitToCelcius(32)

console.log('Temperatures are: '+temp90+' '+temp70+' '+temp32)
