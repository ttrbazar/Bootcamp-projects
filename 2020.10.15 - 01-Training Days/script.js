const getRandEvent = () => {
    // choose 'Marathon' or 'Triathlon' or 'Pentathlon' randomly;
    return ["Marathon", "Triathlon", "Pentathlon"][Math.floor(3 * Math.random())];
};

const getTrainingDays = event => {
    let days;
    switch (event) {
        case "Marathon":
            days = 100;
            break;
        case "Triathlon":
            days = 200;
            break;
        case "Pentathlon":
            days = 300;
            break;
        default:
            days = undefined;
    }
    return days;
};

const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
};

// first competitor.
const event = getRandEvent();
const days = getTrainingDays(event);
const name = 'Nala';

logEvent(name, event);
logTime(name, days);


// second competitor.

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
logEvent(name2, event2);
logTime(name2, days2);
