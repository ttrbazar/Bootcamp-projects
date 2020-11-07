
// Filter out countries
// 1.	Extract all the countries contain the word 'land' from the countries array and print it as array
// 2.	Find the country containing the hightest number of characters in the countries array
// 3. Sort the countries by length of characters in the countries array
// 4.	Extract all the countries containing only four characters from the countries array and print it as array
// 5.	Extract all the countries containing two or more words from the countries array and print it as array
// 6.	Reverse the countries array and capitalize each country and stored it as an array.
// 7.	Extract all the countries don’t contain the word 'land' from the countries array, add “land” at the end of the country and print it as array.


const countries = ['Albania', 'bolivia', 'Canada', 'Bali', 'denmark', 'czech republic', 'ethiopia', 'Finland', 'Germany', 'hungary', 'Ireland', 'Japan', 'Kenya', 'United States', "okan"]



// step-1
const countryFind1 = arr => arr.filter(item => item.includes("land"));

console.log(countryFind1(countries));


// step-2
const longestCountry = arr => arr.reduce((acc, curr) => acc.length > curr.length ? acc : curr);

console.log(longestCountry(countries));


// step-3
const countrySort = arr => arr.sort((a, b) => a.length - b.length);

console.log(countrySort(countries));


// step-4

const countryFind4 = arr => arr.filter(item => item.length === 4);

console.log(countryFind4(countries));


// step-5

const countryFind5 = arr => arr.filter(item => item.trim().split(" ").length > 1);

console.log(countryFind5(countries));


//step-6

const countryFind6 = arr => arr.reverse()
    .map(item => item.split(" ")
        .map(x => x[0].toUpperCase() + x.slice(1))
        .join(" "));

console.log(countryFind6(countries));

console.log(countries);

// step-7

const countryFind7 = arr => arr.map(item => item.includes("land") ? item : item + "land");

console.log(countryFind7(countries));
