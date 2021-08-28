const account = {
    name: 'Rishabh',
    expenses: [],
    income: [],
    addExpense: function(description, amount) {
        this.expenses.push({ description: description, amount: amount })
    },

    addIncome: function(description, amount) {
        this.income.push({ description: description, amount: amount })
    },

    getAccountSummary: function() {
        let totalExpenses = 0
        this.expenses.forEach(function(expense) {
            totalExpenses += expense.amount
        })

        let totalIncome = 0
        this.income.forEach(function(income) {
            totalIncome += income.amount
        })
        return `${this.name} has a balance of $${ totalIncome - totalExpenses}. $${totalExpenses} in expenses and $${totalIncome} in income`
    }
}

account.addExpense('Rent', 950)
account.addIncome('Salary', 2000)
account.addExpense('Coffee', 2)
console.log(account.getAccountSummary())