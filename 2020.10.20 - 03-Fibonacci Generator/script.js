function fibonacciGen(num) {
    let fibArr = [0, 1];

    if (num < 1) {
        fibArr = [];
    } else if (num === 1) {
        fibArr = [0];
    } else {
        for (let i = 2; i < num; i++) {
            fibArr.push(fibArr[i-2] + fibArr[i-1]);
        }
    }
    return fibArr;
}

function fibonacciFinder(num) {
    const golden = 1.618034;
    return (Math.pow(golden, num-1) - Math.pow(1-golden, num-1)) / Math.sqrt(5);
}

console.log(fibonacciGen(4));
console.log(fibonacciFinder(4));