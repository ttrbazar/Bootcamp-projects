//Transform a string into an array and fix it!

let quote = "Some body can write code that a very well designed code machines can understand. Good programmers write code that humans can understand.” – Martin Fowler. Agile Software Design";

let favoriteQuote = quote.split(" ");

console.log(favoriteQuote);
console.log(favoriteQuote.length);

favoriteQuote.pop();

console.log(favoriteQuote);
console.log(favoriteQuote.length);

favoriteQuote.push("Development,", "ThoughtWorks ", "Inc.");

console.log(favoriteQuote);
console.log(favoriteQuote.length);

favoriteQuote.splice(favoriteQuote.indexOf("body"), 1, "fool");

console.log(favoriteQuote);
console.log(favoriteQuote.length);

favoriteQuote.shift();

console.log(favoriteQuote);
console.log(favoriteQuote.length);

favoriteQuote.unshift("Any");

console.log(favoriteQuote);
console.log(favoriteQuote.length);

favoriteQuote.splice(favoriteQuote.indexOf("very"), 5, "computer");

console.log(favoriteQuote);
console.log(favoriteQuote.length);

console.log(favoriteQuote.join(" "));