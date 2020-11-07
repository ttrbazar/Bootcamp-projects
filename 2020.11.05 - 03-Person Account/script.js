// # PERSON ACCOUNT

// 1. Create an object called personAccount.
//With the properties;
//“firstName” (string),
//“lastName” (string),
//“incomes” (array),
//“expenses” (array)

//and with the methods

//“totalIncome”,
//“totalExpense”,
//“addIncome”,
//“addExpenses” and
//“accountInfo”. 

// 2. “totalIncome” method calculating all “incomes”.
// 3. “totalExpense” method calculating all “expenses”.
// 4. “addIncome” method adds new incomes.
// 5. “addExpense” method adds new expenses.
// 6. “accountInfo” method returns a string that shows the total profit of the person.
// 7. Give some default income and expenses first.
// Add some incomes and expenses by using related methods:
// > “He has total income : 3150$”
// See your total incomes and expenses by using related methods.
// 8. Print this user accounts info in to the console.
// > Example output: “Bruce Brown has total 260$ profit today”

const personAccount = {
    firstName: "Rowshen",
    lastName: "Durdyyew",
    incomes: [],
    expenses: [],
    totalIncome() {return this.incomes.reduce((acc, curr) => acc + curr, 0)},
    totalExpense() {return this.expenses.reduce((acc, curr) => acc + curr, 0)},
    addIncome(income) {this.incomes.push(income)},
    addExpenses(expense) {this.expenses.push(expense)},
    accountInfo() {return `Your total profit is ${this.totalIncome() - this.totalExpense()}`}
}

personAccount.addIncome(2000);
personAccount.addIncome(5000);
personAccount.addExpenses(1000);
personAccount.addExpenses(2000);
console.log(personAccount.accountInfo());
console.log(personAccount);
