let scoreJohn1 = 89;
let scoreJohn2 = 120;
let scoreJohn3 = 103;
let scoreMike1 = 116;
let scoreMike2 = 94;
let scoreMike3 = 123;
let scoreMary1 = 97;
let scoreMary2 = 134;
let scoreMary3 = 105;

let averageScoreJohn = Math.round((scoreJohn1 + scoreJohn2 + scoreJohn3) / 3);
let averageScoreMike = Math.round((scoreMike1 + scoreMike2 + scoreMike3) / 3);
let averageScoreMary = Math.round((scoreMary1 + scoreMary2 + scoreMary3) / 3);

let maxAverageScore = Math.max(averageScoreJohn, averageScoreMike, averageScoreMary);

console.log(`John's team's scores are: ${scoreJohn1}, ${scoreJohn2}, ${scoreJohn3}.`);
console.log(`Mike's team's scores are: ${scoreMike1}, ${scoreMike2}, ${scoreMike3}.`);
console.log(`Mary's team's scores are: ${scoreMary1}, ${scoreMary2}, ${scoreMary3}.`);

console.log(`Average score of John's team is ${averageScoreJohn}.`);
console.log(`Average score of Mike's team is ${averageScoreMike}.`);
console.log(`Average score of Mary's team is ${averageScoreMary}.`);

console.log(`Max average score is ${maxAverageScore}.`);

console.log("------------------------------------");
console.log("First compare John's and Mike's teams...")
console.log(`${averageScoreJohn > averageScoreMike ? "John" : "Mike"}'s team wins with ${averageScoreJohn > averageScoreMike ? averageScoreJohn : averageScoreMike}.`);
console.log("------------------------------------");

console.log("Comparing all three teams...")

if (averageScoreJohn === averageScoreMike && averageScoreMike === averageScoreMary) {
    console.log(`It's a draw between them all. The max average score is ${maxAverageScore}`);
} else if (averageScoreJohn === averageScoreMike && averageScoreMike === maxAverageScore) {
    console.log(`Team John and Team Mike both win with a draw. The max average score is ${maxAverageScore}`);
} else if (averageScoreJohn === averageScoreMary && averageScoreMary === maxAverageScore) {
    console.log(`Team John and Team Mary both win with a draw. The max average score is ${maxAverageScore}`);
} else if (averageScoreMary === averageScoreMike && averageScoreMike === maxAverageScore) {
    console.log(`Team Mary and Team Mike both win with a draw. The max average score is ${maxAverageScore}`);
} else if (maxAverageScore === averageScoreJohn) {
    console.log(`John's team wins with ${averageScoreJohn}.`);
} else if (maxAverageScore === averageScoreMike) {
    console.log(`Mike's team wins with ${averageScoreMike}.`);
} else if (maxAverageScore === averageScoreMary) {
    console.log(`Mary's team wins with ${averageScoreMary}.`);
}

console.log("------------------------------------");
console.log("------------------------------------");
console.log("------------------------------------");
console.log("Now using random numbers...");
console.log("------------------------------------");

scoreMike1 = Math.round(100 * Math.random());
scoreMike2 = Math.round(100 * Math.random());
scoreMike3 = Math.round(100 * Math.random());
scoreJohn1 = Math.round(100 * Math.random());
scoreJohn2 = Math.round(100 * Math.random());
scoreJohn3 = Math.round(100 * Math.random());
scoreMary1 = Math.round(100 * Math.random());
scoreMary2 = Math.round(100 * Math.random());
scoreMary3 = Math.round(100 * Math.random());

averageScoreJohn = Math.round((scoreJohn1 + scoreJohn2 + scoreJohn3) / 3);
averageScoreMike = Math.round((scoreMike1 + scoreMike2 + scoreMike3) / 3);
averageScoreMary = Math.round((scoreMary1 + scoreMary2 + scoreMary3) / 3);

maxAverageScore = Math.max(averageScoreJohn, averageScoreMike, averageScoreMary);

console.log(`John's team's scores are: ${scoreJohn1}, ${scoreJohn2}, ${scoreJohn3}.`);
console.log(`Mike's team's scores are: ${scoreMike1}, ${scoreMike2}, ${scoreMike3}.`);
console.log(`Mary's team's scores are: ${scoreMary1}, ${scoreMary2}, ${scoreMary3}.`);

console.log(`Average score of John's team is ${averageScoreJohn}.`);
console.log(`Average score of Mike's team is ${averageScoreMike}.`);
console.log(`Average score of Mary's team is ${averageScoreMary}.`);

console.log(`Max average score is ${maxAverageScore}.`);

if (averageScoreJohn === averageScoreMike && averageScoreMike === averageScoreMary) {
    console.log(`It's a draw between them all. The max average score is ${maxAverageScore}`);
} else if (averageScoreJohn === averageScoreMike && averageScoreMike === maxAverageScore) {
    console.log(`Team John and Team Mike both win with a draw. The max average score is ${maxAverageScore}`);
} else if (averageScoreJohn === averageScoreMary && averageScoreMary === maxAverageScore) {
    console.log(`Team John and Team Mary both win with a draw. The max average score is ${maxAverageScore}`);
} else if (averageScoreMary === averageScoreMike && averageScoreMike === maxAverageScore) {
    console.log(`Team Mary and Team Mike both win with a draw. The max average score is ${maxAverageScore}`);
} else if (maxAverageScore === averageScoreJohn) {
    console.log(`John's team wins with ${averageScoreJohn}.`);
} else if (maxAverageScore === averageScoreMike) {
    console.log(`Mike's team wins with ${averageScoreMike}.`);
} else if (maxAverageScore === averageScoreMary) {
    console.log(`Mary's team wins with ${averageScoreMary}.`);
}
