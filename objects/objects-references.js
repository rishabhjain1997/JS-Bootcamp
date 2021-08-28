let myAccount = {
    name: 'Rishabh',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses += amount
}


let addIncome = function (account, amount) {
    account.income += amount
}


let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
}


let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    console.log(`Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`)
}

addIncome(myAccount, 2.50)
resetAccount(myAccount)
getAccountSummary(myAccount)
addExpense(myAccount, 2.50)
addIncome(myAccount, 7.50)
addExpense(myAccount, 2.50)
getAccountSummary(myAccount)