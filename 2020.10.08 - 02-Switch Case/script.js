let ageJohn = Math.round(100 * Math.random());

console.log("Using if else statements.");
console.log(`John's age is ${ageJohn}`);

if (ageJohn >= 18) {
    console.log("John can drink beer.");
} else {
    console.log("John can drink juice.");
}

console.log("-----------------------------");
console.log("Now using switch case statements.");
console.log(`John's age is ${ageJohn}`);

switch (true) {
    case ageJohn >= 18:
        console.log("John can drink beer.");
        break;
    default:
        console.log("John can drink juice.");
}

console.log("-----------------------------");
console.log("Now using ternary operators.");
console.log(`John's age is ${ageJohn}`);

(ageJohn >= 18) ? console.log("John can drink beer.") : console.log("John can drink juice.");

console.log("-----------------------------");
console.log("Now print status of John");
console.log(`John's age is ${ageJohn}`);

switch (true) {
    case ageJohn < 13:
        console.log("John is a baby.");
        break;
    case ageJohn >= 13 && ageJohn < 20:
        console.log("John is a teenager.");
        break;
    case ageJohn >= 20 && ageJohn < 30:
        console.log("John is a young man.");
        break;
    default:
        console.log("John is a man.");
}

console.log("-----------------------------");
console.log("Now print John's job.");

let selectionJobJohn = parseInt(prompt("Enter a number between 1 and 4.\n1 for instructor, 2 for driver, 3 for designer and 4 for teacher."));
let jobJohn;
let falseInput = false;

console.log(`You entered ${selectionJobJohn}.`);

switch (selectionJobJohn) {
    case 1:
        jobJohn = "instructor";
        break;
    case 2:
        jobJohn = "driver";
        break;
    case 3:
        jobJohn = "designer";
        break;
    case 4:
        jobJohn = "teacher";
        break;
    default:
        falseInput = true;
}

falseInput ? console.log("You did not enter a valid number.") : console.log("John works as a " + jobJohn);
