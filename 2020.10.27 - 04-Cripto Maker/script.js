//STEP-1

const idGenerator = size => {
    const numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    const alphaNumeric = alpha.split("").concat(numeric);
    let pass = "";
    for (let i = 0; i < size; i++) {
        pass += alphaNumeric[Math.floor(alphaNumeric.length * Math.random())];
    }
    return pass;
}

console.log(idGenerator(15));


//STEP 2

const idGenerator2 = size => {
    const numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    const special = "*$&%";
    const symbols = (alpha + special).split("").concat(numeric);
    let pass = "";
    for (let i = 0; i < size; i++) {
        pass += symbols[Math.floor(symbols.length * Math.random())];
    }
    return pass;
}

console.log(idGenerator2(15));


//STEP 3

const delimited = strPass => {
    let result = strPass
        .split("")
        .map(item =>
            Number.isInteger(Number(item)) ? item + "-" : item)
        .join("");
    return (result.slice(-1) === "-") ? result.slice(0, -1) : result;
}

console.log(delimited(idGenerator2(15)));
console.log(delimited("33s3s3s003"));


//STEP 4

let givenUnwanted = ["3" , "*" , "j" , "q" , "z"];

const stripUnwanted = (str, arr) => {
    let tempIndex;
    // erase all the unwanted strings in arr from str, plus all the subsequently made unwanted strings in str.
    // all elements of arr should be of type string.
    while (true) {
        if (!arr.reduce((acc, curr) => acc || str.includes(curr), false)) break;
        for (let i of arr) {
            tempIndex = str.indexOf(i);
            if (tempIndex !== -1) {
                str = str.slice(0, tempIndex) + str.slice(tempIndex + i.length);
            }
        }
    }
    return str;
}

console.log(stripUnwanted("32kj3hk2j3hk4j3k4", ["h", "k", "34"]));
console.log(stripUnwanted("33333k444445", ["h", "k", "34"]));
console.log(stripUnwanted("kjsdf323333***qzklsdzzjj", givenUnwanted));
console.log(stripUnwanted(delimited(idGenerator2(15)), givenUnwanted));