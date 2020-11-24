const getFibonacciNth = num => {

    if (num === 0) return 0;
    if (num === 1) return 1;

    fib = [0, 1];

    for (let i = 2; i <= num; i++) {
        fib.push(fib[i-1] + fib[i-2]);
    };

    return fib[num];
};

const getFibonacciNthV2 = num => {

    if (num === 0) return 0;
    if (num === 1) return 1;

    let prev1 = 1;
    let prev2 = 0;

    for (let i=2; i <= num; i++) {
        [prev1, prev2] = [prev1 + prev2, prev1];
    };

    return prev1;
};

console.log(getFibonacciNth(12));
console.log(getFibonacciNthV2(12));