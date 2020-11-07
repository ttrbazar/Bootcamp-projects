// Study Time and Point Calculator. 2 projects.

// When you're caught in a busy lifestyle, it’s easy to lose track of how much time you have to spare.
// Study Time Calculator is a simple tool that helps you calculate the hours you have available in a given week, 
// and how you can fit online study into your lifestyle.
// In this project we’ll calculate if you’re getting enough study time each week using a Study Time Calculator.
// The program will determine the actual and ideal hours of study time for each day of the last week.
// Finally, it will calculate, in hours, how far you are from your weekly study goal.



// Project-1: Study Time Calculator

const getStudyHours = day => {
    // Study hours are randomly selected, independently of the given day actually.
    const studyHours = parseInt(Math.floor(10 * Math.random() * 24)) / 10 + 1;
    switch (day) {
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
        case "saturday":
        case "sunday": return studyHours;
    }
    return "XXX wrong day XXX";
}

const getActualStudyHours = () => getStudyHours("monday") + getStudyHours("tuesday") + getStudyHours("wednesday") + getStudyHours("thursday") + getStudyHours("friday") + getStudyHours("saturday") + getStudyHours("sunday");

const getIdealStudyHours = () => {
    let hoursPerDay = prompt("Enter ideal hours per day.");
    if (isNaN(hoursPerDay) || hoursPerDay === null || hoursPerDay === "") {
        return getIdealStudyHours();
    } else if (Number(hoursPerDay) > 24) {
        alert("That's too long for a day. Please enter between 0-24");
        return getIdealStudyHours();
    } else {
        return 7 * Number(hoursPerDay);
    }
}

const calculateStudyDebt = () => {
    const actualStudyHours = Number(getActualStudyHours().toFixed(1));
    const idealStudyHours = Number(getIdealStudyHours().toFixed(1));
    const studyHourDebt = Number((Math.abs(actualStudyHours - idealStudyHours)).toFixed(1));
    let message = "";

    console.log(`Actual hours a week: ${actualStudyHours}.`);
    console.log(`Ideal hours a week: ${idealStudyHours}.`);

    if (actualStudyHours === idealStudyHours) {
        message = `You've studied the perfect amount of time! And that is ${actualStudyHours} hours.`;
    } else if (actualStudyHours > idealStudyHours) {
        message = `You've studied ${studyHourDebt} hours more than planned.`;
    } else if (actualStudyHours < idealStudyHours) {
        message = `You should create ${studyHourDebt} more empty hours to study.`;
    } else {
        message = "Something went wrong!!!";
    }

    console.log(message);
}





// Project-2: Study Point Calculator


const getWeekdayMorningStudyPoints = () => 2.5 * Math.floor(3 * Math.random());
const getWeekdayEveningStudyPoints = () => 1 * Math.floor(5 * Math.random());
const getWeekdayCommuteStudyPoints = () => 2 * Math.floor(1 * Math.random());
const getWeekdayLunchStudyPoints = () => 2 * Math.floor(1 * Math.random());
const getWeekendStudyPoints = () => 3 * Math.floor(19 * Math.random());

const getActualStudyPoints = () => {
    let day = "";
    let studyPoints = 0;
    for (day of ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]) {
        if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
            studyPoints += getWeekdayMorningStudyPoints();
            studyPoints += getWeekdayCommuteStudyPoints();
            studyPoints += getWeekdayLunchStudyPoints();
            studyPoints += getWeekdayEveningStudyPoints();
        } else {
            studyPoints += getWeekendStudyPoints();
        }
    }
    return studyPoints;
}

const getIdealStudyPoints = () => {
    let idealStudyPoints = prompt("Enter your daily study points goal.");
    if (isNaN(idealStudyPoints) || idealStudyPoints === null || idealStudyPoints === "") {
        return getIdealStudyPoints();
    } else if (Number(idealStudyPoints) > 60) {
        alert("That's too much for a day. Please enter between 0-60");
        return getIdealStudyPoints();
    } else {
        idealStudyPoints = Number(idealStudyPoints);
        if (idealStudyPoints < 25) {
            alert("That is quite low actually. But anyway.");
        } else if (idealStudyPoints < 35) {
            alert("Well that is barely enough. But anyway.");
        } else if (idealStudyPoints < 45) {
            alert("That is ok.");
        } else {
            alert("Wow, you are a superhero.");
        }
        return 7 * idealStudyPoints;
    }
}

const calculateStudyPointDebt = () => {
    const actualStudyPoints = Number(getActualStudyPoints().toFixed(1));
    const idealStudyPoints = Number(getIdealStudyPoints().toFixed(1));
    const studyPointDebt = Number((Math.abs(actualStudyPoints - idealStudyPoints)).toFixed(1));
    let message = "";

    console.log(`Your actual study points for the week: ${actualStudyPoints} points.`);
    console.log(`Your goal for the week: ${idealStudyPoints} points.`);

    if (actualStudyPoints === idealStudyPoints) {
        message = `Your study points match your goal! And that is ${actualStudyPoints} points.`;
    } else if (actualStudyPoints > idealStudyPoints) {
        message = `You've studied ${studyPointDebt} points more than planned.`;
    } else if (actualStudyPoints < idealStudyPoints) {
        message = `You should study ${studyPointDebt} points more to match your goal.`;
    } else {
        message = "Something went wrong!!!";
    }

    console.log(message);
}

const getCalculatorChoice = () => {
    let choice = prompt("Enter either 1 or 2 for calculator choice.\n1 for 'Study calculator'.\n2 for 'Study points calculator'.");
    if (choice === "1") {
        calculateStudyDebt();
    } else if (choice === "2") {
        calculateStudyPointDebt();
    } else {
        console.log("Wrong choice :(");
        alert("Wrong choice :(");
    }
}

getCalculatorChoice();