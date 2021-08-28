fullName= 'Rishabh'
age = 23

console.log(`Hi! My name is ${fullName}. I am ${age} years old`)



let calculateTip = function(total=0,tip=0.2)
{   
    const tipAmount = total * tip
    return `A ${tip * 100}% tip on $${total} would be $${tipAmount}`
}

console.log(calculateTip(100,0.5))
console.log(calculateTip(100,0.1))