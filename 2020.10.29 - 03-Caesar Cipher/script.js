const criptoWord = "Hello World";
const criptoKey = -35;

const criptoMessage = (data, num) => {
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    let index;
    for (let i = 0; i < data.length; i++) {
        index = (alpha.indexOf(data[i].toLowerCase()) + num) % alpha.length;
        index = index < 0 ? index + alpha.length : index;
        result += data[i] === " " ? " " : alpha[index];
    }
    return result;
}

const deCripto = (data, num) => criptoMessage(data, -1 * num);

console.log(criptoMessage(criptoWord, criptoKey));
console.log(deCripto(criptoMessage(criptoWord,criptoKey), criptoKey));