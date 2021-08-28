const getPuzzle = async(wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const json = await response.json()
        const puzzle = json.puzzle
        return puzzle
    } else {
        throw new Error('Unable to fetch puzzle')
    }
}



const getLocation = async() => {
    return fetch(`https://ipinfo.io/json?token=aa0d898309e7d4`, {}).then(
        (response) => {
            if (response.status === 200) {
                return response.json()
            } else {
                throw new Error('Unable to fetch data')
            }
        }
    )
}



const getCountry = async(countryCode) => {
    const response = await fetch(`https://restcountries.eu/rest/v2/all`, {})
    if (response.status === 200) {
        const data = await response.json()
        const country = data.find((country) => (country.alpha2Code === countryCode))
        return country
    } else {
        throw new Error('Unable to fetch data')
    }
}

const getCurrentCountry = async() => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country
}


const getCenterData = () => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', (e) => {

        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            resolve(data)

        } else if (e.target.readyState === 4) {
            reject('Error occured while fetching data')
        }

    })
    request.open('GET', `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=140&date=13-5-2021`)
    request.send()
})


//Old

// const getPuzzleOld = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch puzzle')
//         }
//     }).then((data) => (data.puzzle))
// }




// const getLocationOld = () => {
//     return fetch(`https://ipinfo.io/json?token=aa0d898309e7d4`, {}).then(
//         (response) => {
//             if (response.status === 200) {
//                 return response.json()
//             } else {
//                 throw new Error('Unable to fetch data')
//             }
//         }
//     )
// }

// const getCountryOld = (countryCode) => {
//     return fetch(`https://restcountries.eu/rest/v2/all`, {}).then(
//         (response) => {
//             if (response.status === 200) {
//                 return response.json()
//             } else {
//                 throw new Error('Unable to fetch response')
//             }
//         }
//     ).then((data) => (data.find((country) => (country.alpha2Code === countryCode))))
// }