/*
  The space travellers have safely landed and are foraging for food in the natural wildlife.

  There are bushes with many different colour berries.
  The pink berries are the ONLY safe ones to eat.
  If any other berries are present, it's best not to eat from the bush at all!

  Create a function which checks if the bush has ALL PINK berries and is safe for the astronauts to eat from the bush.

*/

let bushBerryColours1 = ["pink", "pink", "pink", "neon", "pink", "transparent"];
let bushBerryColours2 = ["pink", "pink", "pink", "pink"];

const safeBerries = arr => arr.filter(item => item.toLowerCase() !== "pink").length === 0;

console.log(safeBerries(bushBerryColours1));
console.log(safeBerries(bushBerryColours2));