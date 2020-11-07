// Part 1

/* 
  You are given an array of names.
*/

let names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

const firstWhichStartsWithA = arr => arr.filter(item => item.startsWith("A") && item.length > 7)[0];

console.log(firstWhichStartsWithA(names));
console.log("----------------------------------------------");

/* EXPECTED OUTPUT */
// "Alexandra"


// Part 2

const startsWithoutA = arr => arr.filter(item => !item.startsWith("A"));

console.log(startsWithoutA(names));