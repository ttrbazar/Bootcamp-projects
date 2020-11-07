
const arrCase1 = [false, 100, [24, 33], "💩", 55, "🥵", null, 45, "Sanyia", 66, "James", 23];
const arrCase2 = ["28", 100, 60, "Elamin", 55, "75", "🍕"];


function sortArray(arr, sortfun) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if ((typeof arr[i] === "number") && isFinite(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr.sort(sortfun);
}

console.log(sortArray(arrCase1, (a,b)=>a-b));
console.log(sortArray(arrCase2, (a,b)=>b-a));


/* ======= TESTS ===== */

function testArrays(a, b) {

}


