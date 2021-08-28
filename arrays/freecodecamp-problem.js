function checkCashRegister(price, cash, cid) {
    let cashBalance = []
    cid.forEach(function(balance) {
        const currencyName = balance[0]
        const amount = balance[1]
        const cashValues = [
            { value: 0.01, currency: 'PENNY' },
            { value: 0.05, currency: 'NICKEL' },
            { value: 0.1, currency: 'DIME' },
            { value: 0.25, currency: 'QUARTER' },
            { value: 1, currency: 'ONE' },
            { value: 5, currency: 'FIVE' },
            { value: 10, currency: 'TEN' },
            { value: 20, currency: 'TWENTY' },
            { value: 100, currency: 'ONE HUNDRED' }
        ]
        const unitValue = cashValues.find(function(unit) {
            return unit.currency === currencyName
        })
        cashBalance.push({ amount: amount, units: Math.round(amount / unitValue.value), currency: currencyName, value: unitValue.value })



    })
    let changeAmount = cash - price

    let changeDenomination = {}
    cashBalance.reverse()

    function roundToTwo(num) {
        return +(Math.round(num + "e+2") + "e-2");
    }

    const calculateChange = function(unit, index) {
        while (unit.value <= changeAmount && unit.units >= 1) {

            unit.amount = roundToTwo(unit.amount - unit.value)
            unit.units = roundToTwo(unit.amount / unit.value)

            if (changeDenomination[unit.currency]) {
                changeDenomination[unit.currency] += (unit.value)
                changeDenomination[unit.currency] = roundToTwo(changeDenomination[unit.currency])
            } else {
                changeDenomination[unit.currency] = roundToTwo(unit.value)
            }
            changeAmount = roundToTwo(changeAmount - unit.value)



        }
    }
    cashBalance.forEach(calculateChange)


    const availableDenominations = cashBalance.filter(function(unit) { return unit.units > 0; })
    let status

    if (cashBalance && changeAmount) {
        return { status: "INSUFFICIENT_FUNDS", change: [] }
    } else if (availableDenominations.length) {
        status = "OPEN"
    } else {
        status = "CLOSED"
        let denominations = cashBalance.reverse().map(x => x.currency)

        denominations.forEach(function(unit) {
            if (!changeDenomination[unit]) {
                changeDenomination[unit] = 0
            }
        })



    }

    const changeFormatted = Object.keys(changeDenomination).map(function(key) {

        return [key, changeDenomination[key]]
    })
    return { status: status, change: changeFormatted }

}
console.log("Open: ")
console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]))

console.log(checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]))


console.log('Insufficient:')


console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]))
console.log("Closed: ")

console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]))