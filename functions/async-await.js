const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be passed')
    }, 2000)
})

const processData = async() => {
    let data = await getDataPromise(2)
    data = await getDataPromise(data)
    return data
}

processData(2).then(
    (data) => { console.log(data) }).catch((err) => { console.log(err) })