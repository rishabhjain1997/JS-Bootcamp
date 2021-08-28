let add = function(x, y, z) {
    return x+y+z
}

const addValue = add(1,2,3)
console.log(addValue)

let multiply = function(x=3,y,z) {
    console.log(x)
    console.log(z)
    return x*y*z
}

console.log(multiply(1,2))


// Challenge area

let calculateTip = function(total=0,tip=0.2)
{
    console.log('Bill amount: '+total + ' Inclusive of Tip: ' + total * (1+tip))
    return total * (1+tip)
}

calculateTip(100,0.5)
calculateTip(100,0.1)
calculateTip(100)
calculateTip(undefined,0.1)