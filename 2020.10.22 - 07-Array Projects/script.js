const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const countriesExtended = arr => arr.map(item => [item, item.slice(0,3).toUpperCase(), item.length]);

console.log(countriesExtended(countries));

console.log("----------------------------------------------------");

// Add "-" after every even number

const numbers = "315469781318158";
const separateEvens = nums =>
  nums.split("").
  map(item => item % 2 === 0 ? item + "-" : item).
  join("");

  console.log(separateEvens(numbers));

console.log("----------------------------------------------------");

// Find odd numbers

let arr = [5, 24, 122, 625, 3125, 15625];

const getOdds = nums => nums.filter(item => item % 2 === 1);

console.log(getOdds(arr));