"use strict";

const patisserie = {
    bananaCaramel: {
        stock: 11,
        price: 9.99,
    },
    contessa: {
        stock: 6,
        price: 7.99,
    },
    concorde: {
        stock: 11,
        price: 22.99,
    },
    mouseCake: {
        stock: 8,
        price: 16.99,
    },
    confettiSuprise: {
        stock: 9,
        price: 14.99,
    },
};

const cakeType = document.getElementById('cakeSelect');
const orderAmount = document.getElementById('cakeAmount');
const orderBtn = document.getElementById('submit_btn');


const checkOrder = order => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (patisserie[order[0]].stock >= order[1]) {
                let total = patisserie[order[0]].price * order[1];
                console.log(`All of the items are in stock.`);
                resolve([order, total]);
            } else {
                reject("The order could not be completed because some items are sold out.");
            };
        }, 1000);
    });
};


const payment = orderAndTotalCost => {
    console.log(`The total cost of the order is ${orderAndTotalCost[1]}. Press '1' if it is ok?`);
    return new Promise((resolve, reject) => {
        const handleKeyPress = (e) => {
            if (e.key === "1") {
                setTimeout(() => {
                    patisserie[orderAndTotalCost[0][0]].stock -= orderAndTotalCost[0][1];
                    console.log(`Payment process completed. You paid ${orderAndTotalCost[1]} $`);
                    resolve(orderAndTotalCost[0]);
                }, 1000);
            } else {
                reject("You canceled the order.");
            };
            document.removeEventListener("keypress", handleKeyPress);
        };
        document.addEventListener("keypress", handleKeyPress);
    });
};


const stockControl = order => {
    console.log("To Cashier: Wait for checking stock...");
    return new Promise((resolve, reject) => {
        const orderText = cakeType.querySelector(`option[value = "${order[0]}"]`).innerText;
        setTimeout(() => {
            if (patisserie[order[0]].stock <= 2) {
                reject(`${orderText} stock is ${patisserie[order[0]].stock} and it is critical.`);
            } else {
                resolve(`${orderText} stock is enough.`);
            };
        }, 1000);
    });
};


orderBtn.onclick = () => {
    // let order = ['contessa', 2];   // sample order template
    let orderAmountValue = Number(orderAmount.value);
    let cakeTypeText = cakeType.querySelector(`option[value = "${cakeType.value}"]`).innerText;
    if (orderAmountValue > 0) {
        console.log(`You ordered ${orderAmountValue} ${cakeTypeText}`);

        checkOrder([cakeType.value, orderAmountValue])
            .then(resolvedValue => {
                return payment(resolvedValue);
            })
            .then(resolvedValue => {
                return stockControl(resolvedValue);
            })
            .then(successMessage => {
                console.log(successMessage);
            })
            .catch(rejectValue => {
                console.log(rejectValue);
            });
    };
    orderAmount.value = "";
};