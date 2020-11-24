// toStringWithUniqueChars() is a function that gets a string and
// outputs a new string which has only unique characters.
// Sequence of appearance does not change.
// Given is the condition that all characters are lower case english characters.
// Also, output will not include any spaces.

const toStringWithUniqueChars = str => {
    const charMap = {};
    let result = "";

    for (let char of str) {
        if (!charMap[char] && char !== " ") {
            charMap[char] = true;
            result += char;
        }
    };

    return result;
};
