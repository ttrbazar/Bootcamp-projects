// const ClauseMix = require("./clauseMix.js");
import * as ClauseMix from "./clauseMix.js";

function displayClause() {
    console.log(ClauseMix.countCharacter("What is the color of the sky?", "t"));
    console.log(ClauseMix.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
    console.log(ClauseMix.reverseString("What is the color of the sky?"));
    console.log(ClauseMix.reverseAllWords("What is the color of the sky?"));
    console.log(ClauseMix.replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
    console.log(ClauseMix.encode("What is the color of the sky?"));
    console.log(ClauseMix.palindrome("What is the color of the sky?"));
    console.log(ClauseMix.pigLatin("What     is the color of the sky?", "a"));
}

displayClause();