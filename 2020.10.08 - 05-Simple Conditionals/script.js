// Project - Grade Students.

console.log("Project - Grade Students");
let grade;
let message;
let score = prompt("Enter the score the student got (integers between 0 - 100):");
if (!(+score >= 0 && +score <= 100) || score === null) {
    message = "You didn't enter a valid number.";
} else {
    score = +score;
    grade = (score >= 0 && score <= 59) ? "F" : (score >= 60 && score <= 69) ? "D" : (score >=70 && score <= 79) ? "C" : (score >= 80 && score <= 89) ? "B" : "A";
    message = `The student with the score ${score} gets a/an "${grade}"`;
}
console.log(message);
alert(message);

// Project - Check Season

console.log("----------------------------");
console.log("----------------------------");
console.log("----------------------------");
console.log("----------------------------");
console.log("Project - Check Season");
console.log("----------------------------");
let season;
let month = prompt("Enter a month name:");
switch (month) {
    case "December":
    case "January":
    case "February":
        season = "Winter";
        break;
    case "March":
    case "April":
    case "May":
        season = "Spring";
        break;
    case "June":
    case "July":
    case "August":
        season = "Summer";
        break;
    case "September":
    case "October":
    case "November":
        season = "Autumn";
}
message = season ? `The month ${month} belongs to season ${season}.` : "Enter a valid month name with valid case, sentence case that is";
console.log(message);
alert(message);


// Project - Month Day

console.log("----------------------------");
console.log("----------------------------");
console.log("----------------------------");
console.log("----------------------------");
console.log("Project - Month Day");
console.log("----------------------------");
let daysInMonth;
month = prompt("Enter a month name:");
switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
        daysInMonth = 31;
        break;
    case "April":
    case "June":
    case "September":
    case "November":
        daysInMonth = 30;
        break;
    case "February":
        daysInMonth = 28;
}
message = daysInMonth ? `The month ${month} has ${daysInMonth} days.` : "Enter a valid month name with valid case, sentence case that is";
console.log(message);
alert(message);
