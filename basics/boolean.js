let age = 24
let isChild = age <= 7
let isSenior = age >= 65

console.log(isChild)
console.log(isSenior)


console.log('If statement')


if (isChild)
{
    console.log('You get a free entry. Welcome!')
}
else if (isSenior)
{
    console.log('You get 20% off')
}

else 
{
    console.log('No discount for you. Welcome!')
}


let temp = 43
if (temp<31)
{
    console.log("It's freezing")
}
else if (temp>125)
{
    console.log("It is hot")
}
else {
    console.log("It's pleasant")  
}