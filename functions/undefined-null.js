let name2 
console.log(name2) // Will print undefined


let double = function(x){
    if (x === undefined)
    {
        console.log('Please pass x')
    }
    else {
        console.log(x)
    }
}

double('Jen')

let name3='Andrew'
name3= null
if (name3 === null)
{
    console.log("Name is null")
}