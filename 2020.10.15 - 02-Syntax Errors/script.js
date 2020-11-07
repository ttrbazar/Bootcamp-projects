// There are syntax errors in this code - can you fix it to pass the tests?

function addNumbers(a, b, c) {
  return a + b + c;
}

function introduceMe(name, age) {
  return "Hello, my name is " + name + " and I am " + age + " years old";
}

function getTotal(a, b) {
  total = a + b;
  return `The total is ${total}`;
}


/* ======= TESTS - DO NOT MODIFY =====
There are some Tests in this file that will help you work out if your code is working.
*/
test("fixed addNumbers function - case 1", addNumbers(3, 4, 6), 13);
test("fixed introduceMe function", introduceMe("Sonjide", 27), "Hello, my name is Sonjide and I am 27 years old");
test("fixed getTotal function", getTotal(23, 5), "The total is 28");


// The syntax for this function is valid but it has an error, find it and fix it.

function trimWord(word) {
  return word.trim();
}

function getWordLength(word) {
  return word.length;
}

function multiply(a, b, c) {
  return a * b * c;
}


/* ======= TESTS - DO NOT MODIFY =====
There are some Tests in this file that will help you work out if your code is working.
*/
test("fixed trimWord function", trimWord("  CodeYourFuture "), "CodeYourFuture");
test("fixed wordLength function", getWordLength("A wild sentence appeared!"), 25);
test("fixed multiply function", multiply(2, 3, 6), 36);


// The below functions are syntactically correct but not outputting the right results.
// Look at the tests and see how you can fix them.

function mood(isHappy) {
  if (isHappy) {
    return "I am happy";
  } else {
    return "I am not happy";
  }
}

function greaterThan10(num) {
  let isBigEnough = num > 10;

  if (isBigEnough) {
    return "num is greater than 10";
  } else {
    return "num is not big enough";
  }
}


/* ======= TESTS - DO NOT MODIFY ===== */

test("mood function works for true", mood(true), "I am happy");
test("mood function works for false", mood(false), "I am not happy");
test(
  "greaterThanTen function works for 11",
  greaterThan10(11), "num is greater than 10"
);
test(
  "greaterThanTen function works for 10",
  greaterThan10(10), "num is not big enough"
);
test(
  "greaterThanTen function works for 9",
  greaterThan10(9), "num is not big enough"
);


/* ======= TEST FUNCTION - DO NOT MODIFY ===== */

function test(test_name, actual, expected) {
  let status;
  if (actual === expected) {
      status = "PASSED";
  } else {
      status = `FAILED: expected: ${expected} but your function returned: ${actual}`;
  }

  console.log(`${test_name}: ${status}`);
}