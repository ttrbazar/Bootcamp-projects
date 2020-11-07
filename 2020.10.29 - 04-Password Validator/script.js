/* 
Password Validation

Write a program that should check if each password in an array 
contains a valid password (see below for password criteria) and return a
new array with true or false booleans for whether that password was valid or not.

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Passwords must not be any previous password. 

Expected Result:
PasswordValidationResult=  [false, false, true, false, false]
*/


const passwords1 = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"];
const passwords2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"];
let previousPasswords = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyy!5", "qwbfj76%", "tytT3729.", "384#HsHf", "Jai33"];

function includesUppercaseLetter(str) {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").some(item => str.includes(item));
}

function includesLowercaseLetter(str) {
    return "abcdefghijklmnopqrstuvwxyz".split("").some(item => str.includes(item));
}

function includes0to9(str) {
    return "0123456789".split("").some(item => str.includes(item));
}

function includesNonAlpha(str) {
    return "!#$%.*&".split("").some(item => str.includes(item));
}



const validatePassword = password =>
    password.length >= 5 &&
    includesUppercaseLetter(password) &&
    includesLowercaseLetter(password) &&
    includes0to9(password) &&
    includesNonAlpha(password);


const validatePasswords = arr => arr.map(validatePassword);


console.log(validatePasswords(passwords1));
console.log(validatePasswords(passwords2));
console.log(validatePasswords(previousPasswords));






/* ======= TESTS - DO NOT MODIFY THIS PART===== */
function test(test_name, actual, expected) {
    let status;
    for (i = 0; i < actual.length; i++) {
        if (actual[i] === expected[i]) {
            status = "PASSED";
        } else {
            status = `FAILED: expected: ${expected} but your function returned: ${actual}`;
        }
    }
    console.log(`${test_name}: ${status}`);
}

test("validatePasswords function works - case 1",
    validatePasswords(passwords1), [false, false, true, false, false]);

test("validatePasswords function works - case 2",
    validatePasswords(passwords2), [true, true, false, false, true]);
/* ======= TESTS - DO NOT MODIFY THIS PART===== */