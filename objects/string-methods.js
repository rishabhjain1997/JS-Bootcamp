let name = 'Andrew Mead   '
console.log('Length: '+name.length)
console.log('Name in uppercase: '+name.toUpperCase())
console.log('Name in lowercase: '+name.toLowerCase())

let password = 'abcpassword123'
console.log('String "password" included: '+password.includes('password'))


let isValidPassword = function(password)
{
    return password.length >= 8 && !password.includes('password')
    
}

console.log(isValidPassword('1234567'))
console.log(isValidPassword('1234password567'))
console.log(isValidPassword('1fsdfsdfsdfsdfsd23423'))
