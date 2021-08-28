const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * 1.25
    } else {
        throw Error('Argument must be a number')
    }
}

try {
    const result = getTip('10')
    console.log(result)
} catch {
    console.log('catch block is running')
}