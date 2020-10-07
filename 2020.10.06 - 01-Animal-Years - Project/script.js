let myAge = prompt("Enter your age:"); // My age.
let myName = "Rowshen".toLowerCase(); // My name in lower case.

let earlyYears = 2; // Early years.
earlyYears *=10.5
let laterYears = myAge - 2;
laterYears *= 4; // Later years in dog years.
let myAgeInDogYears = earlyYears + laterYears; // My age in dog years.

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`); // Print my statement.
alert(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);




let dogAge = prompt("Now enter dog age to find it in human years:");
let dogAgeInHumanYears = (dogAge - 2 * 10.5) / 4 + 2;

console.log(`Dog is ${dogAge} years old in dog years which is ${dogAgeInHumanYears} years old in human years.`); // Print my statement.
alert(`Dog is ${dogAge} years old in dog years which is ${dogAgeInHumanYears} years old in human years.`); // Print my statement.


let tortoiseAge = prompt("Now enter tortoise age to find it in human years:");
let firstYearOfHumanYearsFromTortoise = 12;
let laterYearsOfHumanYearsFromTortoise = (tortoiseAge - 1) * 10;
let tortoiseAgeInHumanYears = firstYearOfHumanYearsFromTortoise + laterYearsOfHumanYearsFromTortoise;

console.log(`Tortoise is ${tortoiseAge} years old in tortoise years which is ${tortoiseAgeInHumanYears} years old in human years.`); // Print my statement.
alert(`Tortoise is ${tortoiseAge} years old in tortoise years which is ${tortoiseAgeInHumanYears} years old in human years.`); // Alert my statement.
