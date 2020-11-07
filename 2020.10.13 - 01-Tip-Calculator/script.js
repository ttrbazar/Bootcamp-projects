// Tip Calculator

// John and his family went on a holiday and went to 4 different restaurants.
// The bills were $124, $48, $75 and $268.
// John paid the bills cash and he has $750 budget in his wallet.

// To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip;
// •	20% of the bill when the bill is less than $50,
// •	15% when the bill is between $50 and $200,
// •	10% if the bill is more than $200.

let bill1 = 124;
let bill2 = 48;
let bill3 = 75;
let bill4 = 268;
let budget = 750;

function calculateTips(bill) {
    return Number((bill * (bill < 50 ? 0.2 : bill < 200 ? 0.15 : 0.1)).toFixed(2));
}

function getTotalTips() {
    return calculateTips(bill1) + calculateTips(bill2) + calculateTips(bill3) + calculateTips(bill4);
}

function budgetDust() {
    return Number((budget - bill1 - bill2 - bill3 - bill4 - getTotalTips()).toFixed(2));
}

let totalTips = getTotalTips();
let remaining = budgetDust();
let spent = budget - remaining;

console.log(`Your budget is: ${budget}.`)
console.log(`Total bill is: ${bill1 + bill2 + bill3 + bill4}.`);
console.log(`Total tip is: ${totalTips}.`);
console.log("-------------------------------");
console.log(`Bill 1 is : ${bill1}.`);
console.log(`Bill 2 is : ${bill2}.`);
console.log(`Bill 3 is : ${bill3}.`);
console.log(`Bill 4 is : ${bill4}.`);
console.log("-------------------------------");
console.log(`Tip 1 is : ${calculateTips(bill1)}.`);
console.log(`Tip 2 is : ${calculateTips(bill2)}.`);
console.log(`Tip 3 is : ${calculateTips(bill3)}.`);
console.log(`Tip 4 is : ${calculateTips(bill4)}.`);
console.log("-------------------------------");

let message;
if (spent > budget * 0.8) {
    message = `Too expensive! You spent ${spent}$. And you have ${remaining} remaining.`;
} else {
    message = `Have a nice day. You spent ${spent}$. And you have ${remaining} remaining.`;
}
console.log(message);
