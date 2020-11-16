const randomNumberGenerator1to25 = () => Math.floor(Math.random() * 25) + 1;
let randomNumber1to25 = randomNumberGenerator1to25();
let highScore = 0;

const btnCheck = document.querySelector("#btn-check");
const btnAgain = document.querySelector(".again");
const inputFieldGuess = document.querySelector("#input-guess-field");
const message = document.querySelector(".message");
const secretNumber = document.querySelector(".number");
const scorePoint = document.querySelector(".score");
const highScoreObj = document.querySelector(".highscore");

let point = 10;

function guessNumber() {
    const guessValue = Number(inputFieldGuess.value);
    if (point > 0 && message.innerHTML !== "You guessed") {
        if (guessValue > 0 && guessValue < 26) {
            point--;
            document.body.style.backgroundColor = "#222";
            if (guessValue > randomNumber1to25) {
                message.innerHTML = "Too High";
            } else if (guessValue < randomNumber1to25) {
                message.innerHTML = "Too Low";
            } else if (guessValue === randomNumber1to25) {
                message.innerHTML = "You guessed";
                secretNumber.innerHTML = randomNumber1to25;
                document.body.style.backgroundColor = "green";
                highScore = Math.max(highScore, point);
                highScoreObj.innerHTML = highScore;
            }
            console.log(guessValue);
        } else {
            message.innerHTML = "Please enter a valid number, [1-25]";
            document.body.style.backgroundColor = "red";
        }
        scorePoint.innerHTML = point;
        if (point === 0 && guessValue !== randomNumber1to25) {
            message.innerHTML = "You Loose!!!";
            document.body.style.backgroundColor = "red";
        }
    }
    inputFieldGuess.value = "";
}

function playAgain() {
    point = 10;
    document.body.style.backgroundColor = "#222";
    randomNumber1to25 = randomNumberGenerator1to25();
    scorePoint.innerHTML = point;
    secretNumber.innerHTML = "?";
    inputFieldGuess.value = "";
    message.innerHTML = "Start guessing..."
    console.log("the number is " + randomNumber1to25);
}

btnCheck.addEventListener("click", guessNumber);
btnAgain.addEventListener("click", playAgain);

console.log("the number is " + randomNumber1to25);