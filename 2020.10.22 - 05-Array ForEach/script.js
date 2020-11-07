/* 
  Using .forEach() print the numbers 1 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 1-15 has been provided.
*/

var arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


const checkFizzBuzz = item => {
  if (item % 15 === 0) {
    return "FizzBuzz";
  } else if (item % 3 === 0) {
    return "Fizz";
  } else if (item % 5 === 0) {
    return "Buzz";
  } else {
    return item;
  }
}

const printFizzBuzz = arr => arr.forEach(item => console.log(checkFizzBuzz(item)));

// const printFizzBuzz = arr => arr.forEach(element => console.log((element % 3 === 0 && element % 5 === 0) ? "FizzBuzz" : element % 3 === 0 ? "Fizz" : element % 5 === 0 ? "Buzz" : element));

printFizzBuzz(arrNumber);




/* EXPECTED OUTPUT */

/*
1
2
'Fizz'
4
'Buzz'
'Fizz'
7
8
'Fizz'
'Buzz'
11
'Fizz'
13
14
'FizzBuzz'
*/
