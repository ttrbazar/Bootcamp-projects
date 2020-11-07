
let haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
let haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'nedle', 'something somebody lost a while ago'];
let haystack_3 = [1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2, 34, 234, 23, 4, 234, 324, 324, 'needle', 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54];


const findNeedle = arr => {
    let position = arr.indexOf("needle");
    let message;
    message = position === -1 ? "Could not find the needle, sorry" : `Found the needle at position ${position}`;
    return message;
}

const findAnyItem = (arr, item) => {
    let position = arr.indexOf(item);
    let message;
    message = position === -1 ? `Could not find the ${typeof item} ${item}, sorry` : `Found the ${typeof item} ${item} at position ${position}`;
    return message;
}

console.log(findNeedle(haystack_1));
console.log(findNeedle(haystack_2));
console.log(findNeedle(haystack_3));

console.log("------------------------------------");

console.log(findAnyItem(haystack_1, "world"));
console.log(findAnyItem(haystack_2, "world"));
console.log(findAnyItem(haystack_3, "world"));

console.log("------------------------------------");

console.log(findAnyItem(haystack_1, 2));
console.log(findAnyItem(haystack_2, 2));
console.log(findAnyItem(haystack_3, 2));

console.log("------------------------------------");

console.log(findAnyItem(haystack_1, "3"));
console.log(findAnyItem(haystack_2, "3"));
console.log(findAnyItem(haystack_3, "3"));

console.log("------------------------------------");

console.log(findAnyItem(haystack_1, true));
console.log(findAnyItem(haystack_2, true));
console.log(findAnyItem(haystack_3, true));
