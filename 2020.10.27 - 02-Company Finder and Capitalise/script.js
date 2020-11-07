// STEP-1
// Filter out companies which have more than one 'o' without the filter method

const firms = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon, Oppo"

const companyFinder = strFirms => {
    let arrFirms = strFirms.split(", ");
    let temp = [];
    let counter;

    for (let firm of arrFirms) {
        counter = 0;
        for (let i of firm) {
            if (i.toLowerCase() === "o") {
                counter++;
            }
        }
        if (counter > 1) {
            temp.push(firm);
        }
    }

    return temp;
}

console.log(firms);
console.log(companyFinder(firms));

console.log("-------------------------------------------------------");
console.log("-------------------------------------------------------");
console.log("-------------------------------------------------------");
console.log("-------------------------------------------------------");
console.log("-------------------------------------------------------");


//STEP-2

loremIpsum = "Contrary to popular belief, Lorem Ipsum is not simply random text. it has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.a.32 and 1.a.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. this book is a treatise on the theory of ethics, very popular during the Renaissance. the first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.a.32"

const toSentenceCase = inputText => {
    let sentences = inputText.split(". ");
    let result = "";
    for (let sentence of sentences) {
        result += sentence[0].toUpperCase();
        result += sentence.slice(1);
        result += ". ";
    }
    return result.trim();
}

console.log(toSentenceCase(loremIpsum));