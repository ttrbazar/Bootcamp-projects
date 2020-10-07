let massMark = 80;
let massJohn = 75;
let heightMark = 1.85;
let heightJohn = 1.90;

let BMIMark = massMark / (heightMark**2);
let BMIJohn = massJohn / (heightJohn**2);

BMIMark = BMIMark.toFixed(2);
BMIJohn = BMIJohn.toFixed(2);

console.log(`BMI of Mark is ${BMIMark}.`)
console.log(`BMI of John is ${BMIJohn}.`)

let higherBMI = BMIMark > BMIJohn;

console.log(`Is Mark's BMI is higher than John's? Answer is "${higherBMI}". Because Mark's BMI is ${BMIMark} and John's BMI is ${BMIJohn}`)

massMark = prompt("Enter Mark's mass:");
massJohn = prompt("Enter John's mass:");
heightMark = prompt("Enter Mark's height:");
heightJohn = prompt("Enter John's height:");

BMIMark = massMark / (heightMark**2);
BMIJohn = massJohn / (heightJohn**2);

BMIMark = BMIMark.toFixed(2);
BMIJohn = BMIJohn.toFixed(2);

console.log(`BMI of Mark is ${BMIMark}.`)
console.log(`BMI of John is ${BMIJohn}.`)

higherBMI = BMIMark > BMIJohn;

console.log(`Is Mark's BMI is higher than John's? Answer is "${higherBMI}". Because Mark's BMI is ${BMIMark} and John's BMI is ${BMIJohn}`)
alert(`Is Mark's BMI is higher than John's? Answer is "${higherBMI}". Because Mark's BMI is ${BMIMark} and John's BMI is ${BMIJohn}`)
