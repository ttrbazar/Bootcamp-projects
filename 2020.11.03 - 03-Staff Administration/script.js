// Step 1
//First of all print out all staff objects seperately on the console.

console.log("Step 1");

staff.forEach(item => console.log(item));
console.log("------------------------------------------");

// Step 2
//Now, create a “fullName” function inside the objects. and make fullname with the concatenation of firstname and lastname.
console.log("Step 2");

staff.forEach(item => item["fullName"] = function() {return this.firstName + " " + this.lastName});
staff.forEach(item => console.log(item.fullName()));

console.log("------------------------------------------");

// Step 3
//Find all older than 21 age staff, print them out.
console.log("Step 3");

staff.filter(item => item.age > 21).forEach(item => console.log(item));
console.log("------------------------------------------");

// Step 4
//Sort staff according to their experience. From low to high.
console.log("Step 4");

staff.sort((a, b) => a.experience - b.experience).forEach(item => console.log(item));
console.log("------------------------------------------");

// Step 5
//Calculate the average age of the staff.
console.log("Step 5");

console.log("The average age is " + staff.reduce((acc, curr) => acc + curr.age, 0) / staff.length);
console.log("------------------------------------------");

// Step 6
// You are trying to find a staff exact properties:

// - Staff should be Turkish languange spoken,
// - Staff should be under age 40,
// - Staff active status should be true,

// Filter out all matching objects and write them another array.

// - Sort this filtered items by older to younger age.

// Note: Use all these methods combined.

console.log("Step 6");

staff.filter(item => item.language === "Turkish" && item.age < 40 && item.isActive === true)
    .sort((a, b) => b.age - a.age)
    .forEach(item => console.log(item));

console.log("------------------------------------------");
