//Convert any text to whale language! 

const speakWhales = input => {
    const vowels = "aeiou";
    let result = "";
    for (let i of input) {
        if (vowels.includes(i.toLowerCase())) {
            result += i;
            if (i.toLowerCase() === "u" || i.toLowerCase() === "e") {
                result += i;
            }
        }
    }
    return result.toUpperCase();
}

console.log(speakWhales("Hi, Human"));
console.log(speakWhales("turpentine and turtles"));
console.log(speakWhales("a whale of a deal!"));

console.log("------------------------------------------------------");


// Solution 2

const speakWhales2 = input => {
    const vowels = "aeiou";
    return input.
        split("").
        filter(item => vowels.includes(item.toLowerCase())).
        map(item => item.toLowerCase() === "u" || item.toLowerCase() === "e" ? item + item : item).
        join("").
        toUpperCase();
}


console.log(speakWhales2("Hi, Human"));
console.log(speakWhales2("turpentine and turtles"));
console.log(speakWhales2("a whale of a deal!"));
