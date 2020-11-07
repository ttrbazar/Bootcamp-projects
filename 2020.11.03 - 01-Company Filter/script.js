const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

// Step 1
//- First of all print out all company objects on the console. Use “for loop”.

console.log("Step 1");

companies.forEach(item => console.log(item));

console.log("----------------------------------------------");

// Step 2
//- Now, print out all company names on the console. Use “forEach” array method.
//- Add a new company as tenth, give any value you wish.

console.log("Step 2");

companies.forEach(item => console.log(item.name));

companies.push({name: "Company Ten", category: "Retail", start: 1987, end: 2013});

console.log("----------------------------------------------");

// Step 3
// Use “filter” method.
// - Print out all “Retail” companies according to their category field.
// - Print out all 80s companies according to their start and end fields.
// - Get companies that lasted 10 years or more.

console.log("Step 3");

companies.filter(item => item.category === "Retail").forEach(item => console.log(item));
console.log("----------------------------------------------");
companies.filter(item => item.start >= 1980 && item.end < 1990).forEach(item => console.log(item));
console.log("----------------------------------------------");
companies.filter(item => (item.end - item.start) >= 10).forEach(item => console.log(item));
console.log("----------------------------------------------");

// Step 4
// Use “map” method.
// - Create a new array that contains only company names as an item.
// - Create a new array that contains company names, start and end dates as an item.

console.log("Step 4");

companies.map(item => item.name).forEach(item => console.log(item));
console.log("----------------------------------------------");
companies.map(item => ({name: item.name, start: item.start, end: item.end})).forEach(item => console.log(item));
console.log("----------------------------------------------");

// Step 5
// Use “sort” method.
// - Sort companies in the array by their start years.

console.log("Step 5");

companies.sort((a, b) => a.start - b.start).forEach(item => console.log(item));
console.log("----------------------------------------------");

// Step 6
// Use “reduce” method.
// - Get total working years of all companies (sum of all companies).
console.log("Step 6");

console.log(companies.reduce((acc, curr) => acc + curr.end - curr.start, 0));
console.log("----------------------------------------------");