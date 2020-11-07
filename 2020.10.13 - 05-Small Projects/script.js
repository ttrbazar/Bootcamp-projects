// Mass Compare Project

let massMark = 80;
let massJohn = 75;
let heightMark = 1.85;
let heightJohn = 1.90;

const calculateBMI = (mass, height) => mass / (height ** 2);
const getBMICheckMessage = (bmi, name) => {
    let bmiStatus = "";
    if (bmi < 18.5) {
        bmiStatus = "underweight";
    } else if (bmi < 25) {
        bmiStatus = "normal weight";
    } else if (bmi < 30) {
        bmiStatus = "overweight";
    } else if (bmi >= 30) {
        bmiStatus = "obese";
    } else {
        return "Something went wrong."
    }
    return `Based on BMI of ${bmi}, ${name} is ${bmiStatus}.`;
}

let BMIMark = calculateBMI(massMark, heightMark);
let BMIJohn = calculateBMI(massJohn, heightJohn);
let higherBMI = BMIMark > BMIJohn;


console.log(`Mark's BMI is ${BMIMark} and John's BMI is ${BMIJohn}.`)
console.log(`Is Mark's BMI is higher than John's? Answer is "${higherBMI}". Because Mark's BMI is ${BMIMark} and John's BMI is ${BMIJohn}`)

console.log(getBMICheckMessage(BMIMark, "Mark"));
console.log(getBMICheckMessage(BMIJohn, "John"));


console.log("--------------------------");
console.log("--------------------------");
console.log("--------------------------");
console.log("--------------------------");
console.log("--------------------------");
console.log("--------------------------");
console.log("--------------------------");



// Race Day Project


let runnerAge = Math.floor(80 * Math.random());
let runnerRegisteredEarly = Math.floor(2 * Math.random()) ? true : false;
let runnerRaceNumber = Math.floor(Math.random() * 1000) + ((runnerRegisteredEarly && runnerAge > 18) ? 1000 : 0);

console.log(`Runner age is ${runnerAge}.`);
console.log(`Runner registered ${runnerRegisteredEarly ? "early" : "late"}.`);
console.log(`Runner race number is ${runnerRaceNumber}`);
console.log("--------------------------");

const getRunnerInstructions = (raceNumber, age, isRegisteredEarly) => {
    let startTime = "";
    if (isRegisteredEarly && age > 18) {
        startTime = "9:30 AM";
    } else if ((!isRegisteredEarly) && age > 18) {
        startTime = "11:00 AM";
    } else if (age < 18) {
        startTime = "12:30 PM";
    } else {
        return "Please see the registration desk.";
    }
    return `Runner with race number ${raceNumber} will start at ${startTime}.`;
}

console.log(getRunnerInstructions(runnerRaceNumber, runnerAge, runnerRegisteredEarly));


console.log("--------------------------");
console.log("--------------------------");
console.log("--------------------------");
console.log("--------------------------");
console.log("--------------------------");
console.log("--------------------------");
console.log("--------------------------");



// Grade Students Project

let studentName = "John";
let score = Math.floor(101 * Math.random());

const getGradeFromScoreMessage = (name, score) => {
    let grade;
    if (score >= 0 && score <= 59) {
        grade = "F";
    } else if (score >= 60 && score <= 69) {
        grade = "D";
    } else if (score >=70 && score <= 79) {
        grade = "C";
    } else if (score >= 80 && score <= 89) {
        grade = "B";
    } else {
        grade = "A";
    }
    
    return `The student ${name} with the score ${score} gets a/an "${grade}"`;
}

console.log(getGradeFromScoreMessage(studentName, score));