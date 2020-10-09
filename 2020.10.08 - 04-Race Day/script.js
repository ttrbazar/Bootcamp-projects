// Create and log runner age and registration time.

let runnerAge = Math.floor(80 * Math.random());
let runnerRegisteredEarly = Math.floor(2 * Math.random()) ? true : false;
console.log(`Runner age is ${runnerAge}.`);
console.log(`Runner registered ${runnerRegisteredEarly ? "early" : "late"}.`);
console.log("--------------------------");


// Assign a race number to the runner and log it.

let runnerRaceNumber = Math.floor(Math.random() * 1000) + ((runnerRegisteredEarly && runnerAge > 18) ? 1000 : 0);
console.log(`Runner race number is ${runnerRaceNumber}`);
console.log("--------------------------");


// Determine start time for the runner and log it.

if (runnerRegisteredEarly && runnerAge > 18) {
    console.log(`Runner with race number ${runnerRaceNumber} will start at 9:30 AM`);
} else if ((!runnerRegisteredEarly) && runnerAge > 18) {
    console.log(`Runner with race number ${runnerRaceNumber} will start at 11:00 AM`);
} else if (runnerAge < 18) {
    console.log(`Runner with race number ${runnerRaceNumber} will start at 12:30 PM`);
} else {
    console.log("Please see the registration desk.")
}
