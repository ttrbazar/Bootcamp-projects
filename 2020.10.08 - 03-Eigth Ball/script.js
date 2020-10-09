// Get user name from the user and log it

let userName = prompt("Would you mind entering your name:");
userName = userName ? userName.trim() : "";
console.log(userName === undefined || userName === null || userName === "" ? "Hello!" : `Hello ${userName}!`);
alert(userName === undefined || userName === null || userName === "" ? "Hello!" : `Hello ${userName}!`);


// Get question from the user and log it.

let userQuestion = prompt("Please, ask your question here:");
userQuestion = userQuestion ? userQuestion.trim() : "";
console.log(userQuestion === undefined || userQuestion === null || userQuestion === "" ? "Hmmmmmmmmmmmmmmm" : `So ${userName}...... You ask ${userQuestion}.`);
alert(userQuestion === undefined || userQuestion === null || userQuestion === "" ? "Hmmmmmmmmmmmmmmm" : `So ${userName}...... You ask ${userQuestion}.`);


// Create a random number.
let randomNumber = Math.floor(8 * Math.random());


// Calculate the prophecy using switch cases.

let eightBall = "";
switch (randomNumber) {
    case 0:
        eightBall = "It is certain";
        break;
    case 1:
        eightBall = "It is decidedly so";
        break;
    case 2:
        eightBall = "Reply hazy try again";
        break;
    case 3:
        eightBall = "Cannot predict now";
        break;
    case 4:
        eightBall = "Do not count on it";
        break;
    case 5:
        eightBall = "My sources say no";
        break;
    case 6:
        eightBall = "Outlook not so good";
        break;
    default:
        eightBall = "Signs point to yes";
}


// Output the prophecy.

console.log(eightBall);
alert(eightBall);


// Repeat Calculate the prophecy using if statements.

eightBall = "";
if (randomNumber === 0) {
    eightBall = "It is certain";
} else if (randomNumber === 1) {
    eightBall = "It is decidedly so";
} else if (randomNumber === 2) {
    eightBall = "Reply hazy try again";
} else if (randomNumber === 3) {
    eightBall = "Cannot predict now";
} else if (randomNumber === 4) {
    eightBall = "Do not count on it";
} else if (randomNumber === 5) {
    eightBall = "My sources say no";
} else if (randomNumber === 6) {
    eightBall = "Outlook not so good";
} else if (randomNumber === 7) {
    eightBall = "Signs point to yes";
}


// Output the prophecy.

console.log(eightBall);
alert(eightBall);
