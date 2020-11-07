const convertToUSD = pound => Number((1.4 * pound).toFixed(2));
const convertToBRL = pound => Number((1.01 * 5.7 * pound).toFixed(2));
const convertCurrency = (currency, amount) => currency === "USD" ? convertToUSD(amount) : currency === "BRL" ? convertToBRL(amount) : undefined;
const convertTest = (currency, amount, expected) => convertCurrency(currency, amount) === expected;
console.log(convertTest("BRL", 33, 189.98));
console.log(convertCurrency("BRL", 33));
console.log(convertToBRL(33));