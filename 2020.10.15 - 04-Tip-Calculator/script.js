let billArr = [124, 48, 75, 268, 22, 44, 88, 100, 200];
let totalBudget = 2000;

// let firstBill = 124;
// let secondBill = 48;
// let thirdBill = 75;
// let fourthBill = 268;

function calculateTips(bill) {
    let percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return Math.floor(percentage * bill);
}

const getTotalTips = bills => bills.reduce((a,b) => a + calculateTips(b), 0);

function budgetDust(bills, budget) {
    let totalBill = bills.reduce((a,b) => a+b, 0);
    let totalTips = getTotalTips(bills);
    let lastBudget = budget - (totalBill + totalTips);

    console.log(`The budget is $${budget}.`)
    console.log(`The total bill is $${totalBill}.`);
    console.log(`The total tip is $${totalTips}`)

    if (lastBudget < (budget * 0.2)) {
        console.log("You'll be left with $ " + lastBudget + ". Be careful");
    } else {
        console.log("You'll be left with $ " + lastBudget + ". it is ok");
    }
}

budgetDust(billArr, totalBudget);