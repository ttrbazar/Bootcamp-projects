/*
  You are given a program that logs pairings between two students group
  It fails because the array `pairsById` can contain different values that break the program
  It is decided that array items which are not pairs should be filtered out
*/
let pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, [3, 0], "whoops"];

let students = ["Islam", "Lesley", "Harun", "Rukmini"];
let mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

let pairsByIndexRawNew = pairsByIndexRaw.filter(item => Array.isArray(item) && item.length === 2);

const printPairs = (pairs, arr1, arr2) => {
  pairs.forEach(element => console.log(`${arr1[element[0]]} < --- > ${arr2[element[1]]}`));
}

console.log(pairsByIndexRawNew);

printPairs(pairsByIndexRawNew, students, mentors);