// Exercise: 1 

// 1.Declare an empty array;
console.log("1 ---------------------");
let array1 = [];
console.log(array1);

// 2.Declare an array with more than 5 number of elements
console.log("2 ---------------------");
let array2 = [1, 2, 3, 4, 5, 6, 1];
console.log(array2);

// 3.Find the length of your array
console.log("3 ---------------------");
console.log(`Length of the array2 is ${array2.length}. And the array is ${array2}.`);

// 4.Get the first item, the middle item and the last item of the array
console.log("4 ---------------------");
console.log(`First item: ${array2[0]}. The middle item: ${array2[Math.floor(array2.length / 2)]}. The last item: ${array2[array2.length - 1]}.`)

// 5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
console.log("5 ---------------------");
let mixedDataTypes = [2, 2, 2, 2, 2, "3", "3", "3", "3", "ss", "ss", "ss", "ss", "ss", "ss"];
console.log(`Length of the mixedDataTypes array is ${mixedDataTypes.length}. And the array is ${mixedDataTypes}.`);

// 6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
console.log("6 ---------------------");
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// 7.Print the array using console.log()
console.log("7 ---------------------");
console.log(itCompanies);

// 8.Print the number of companies in the array
console.log("8 ---------------------");
console.log(itCompanies.length);

// 9.Print the first company, middle and last company
console.log("9 ---------------------");
console.log(`First item: ${itCompanies[0]}. The middle item: ${itCompanies[Math.floor(itCompanies.length / 2)]}. The last item: ${itCompanies[itCompanies.length - 1]}.`)

// 10.Print out each company
console.log("10 ---------------------");
itCompanies.forEach(item => console.log(item));

// 11.Change each company name to uppercase one by one and print them out
console.log("11 ---------------------");
itCompanies.forEach(item => console.log(item.toUpperCase()));

// 12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log("12 ---------------------");
console.log(`${itCompanies.slice(0, itCompanies.length - 1).join(", ")} and ${itCompanies[itCompanies.length - 1]} are big IT companies.`);

// 13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
console.log("13 ---------------------");
const checkIfCompanyExists = (listCompany, company) => listCompany.includes(company) ? company : "The company is not found.";
console.log(checkIfCompanyExists(itCompanies, "facebook"));

// 14.Filter out companies which have more than one 'o' without the filter method
console.log("14 ---------------------");
const companiesWithMultipleOsInTheName = listCompany => {
    let output = [];
    for (item of listCompany) {
        if (item.split("o").length > 2) {
            output.push(item);
        }
    }
    return output;
}
console.log("Companies with names that contain more than one of 'o'");
console.log(companiesWithMultipleOsInTheName(itCompanies));

// 15.Sort the array using sort() method
console.log("15 ---------------------");
itCompanies.sort();
console.log(itCompanies);

// 16.Reverse the array using reverse() method
console.log("16 ---------------------");
itCompanies.reverse();
console.log(itCompanies);

// 17.Slice out the first 3 companies from the array
console.log("17 ---------------------");
console.log(itCompanies.slice(0, 3));

// 18.Slice out the last 3 companies from the array
console.log("18 ---------------------");
console.log(itCompanies.slice(-3,));

// 19.Slice out the middle IT company or companies from the array
console.log("19 ---------------------");
console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2) + 1))

// 20.Remove the first IT company from the array
console.log("20 ---------------------");
console.log(itCompanies.shift());
console.log(itCompanies);

// 21.Remove the middle IT company or companies from the array
console.log("21 ---------------------");
console.log(itCompanies.length % 2 === 0 ? itCompanies.splice(Math.floor(itCompanies.length / 2) - 1, 2) : itCompanies.splice(Math.floor(itCompanies.length / 2), 1));
console.log(itCompanies);

// 22.Remove the last IT company from the array
console.log("22 ---------------------");
console.log(itCompanies.pop());
console.log(itCompanies);

// 23.Remove all IT companies
console.log("23 ---------------------");
itCompanies = [];
console.log(itCompanies);


// Exercise: 2

// 1.Create a countries array and webTechs array.
console.log("1 ---------------------");

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

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

console.log(countries);
console.log(webTechs);


// 2.First remove all the punctuations and change the string to array and count the number of words in the array
console.log("2 ---------------------");

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
console.log(text);
let words = text.replace(/[^\w\s]|_/g, "").split(" ");
console.log(words);
console.log(words.length);


// 3.In the following shopping cart add, remove, edit items

console.log("3 ---------------------");

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);


// •add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.includes("Meat") ? shoppingCart : shoppingCart.unshift("Meat");
console.log(shoppingCart);


// •add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.includes("Sugar") ? shoppingCart : shoppingCart.push("Sugar");
console.log(shoppingCart);


// •remove 'Honey' if you are allergic to honey
shoppingCart.includes("Honey") ? shoppingCart.splice(shoppingCart.indexOf("Honey"), 1) : shoppingCart;
console.log(shoppingCart);


// •modify Tea to 'Green Tea'
shoppingCart.includes("Green Tea") ? shoppingCart : shoppingCart.includes("Tea") ? shoppingCart.splice(shoppingCart.indexOf("Tea"), 1, "Green Tea") : shoppingCart;
console.log(shoppingCart);


// 4.In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
// If it does not exist add to the countries list.

console.log("4 ---------------------");

console.log(countries);
countries.includes("Ethiopia") ? console.log("ETHIOPIA") : countries.push("Ethiopia");
console.log(countries);


// 5.In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'.
// If it does not exist add Sass to the array and print the array.

console.log("5 ---------------------");

console.log(webTechs);
webTechs.includes("Sass") ? console.log("Sass is a CSS preprocess") : webTechs.push("Sass");
console.log(webTechs);


// 6.Concatenate the following two variables and store it in a fullStack variable.

console.log("6 ---------------------");

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);