// Get Drink
// You have a shopping robot and want to order some drinks from market.
// Write a function to programme your robot. Give your directions from home to the market on console.

const calBottles = (totalMoney, unitPrice) => {
    return Math.floor(totalMoney / unitPrice);
}

const calcChange = (totalMoney, unitPrice) => {
    return Number((totalMoney % unitPrice).toFixed(2));
}

const getDrink = (budget, unitPrice) => {
    console.log("leave house");
    console.log("turn left");
    console.log("go to the market");
    console.log("buy 3 bottles of drink");
    console.log("pay for drink");
    console.log("leave market");
    console.log("come back to the house");
    console.log("-------------------------------");
    console.log(`Hello master, here is your ${calcChange(budget, unitPrice)}$ change.`);
    console.log(`Here is your ${calBottles(budget, unitPrice)} bottles of drink.`);
    console.log(`You gave me ${budget}$.`);
    console.log(`The price for a bottle is ${unitPrice}.`);
}

getDrink(15.6, 6);