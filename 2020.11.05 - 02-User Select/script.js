// 1. Get all keys or properties of users object. Print them out.
console.log("-------------------------------------------------");
console.log("Step 1");

for (let i in users) {
    console.log(i + ": " + users[i]);
}

// 2. Get all the values of users object. Print them out.
console.log("-------------------------------------------------");
console.log("Step 2");

for (let i in users) {
    for (let j in users[i]) {
        console.log(i + ": " + j + ": " + users[i][j]);
    }
}

// 3. Get the length of this object.
console.log("-------------------------------------------------");
console.log("Step 3");

console.log(Object.keys(users).length);

// 4. Find the person who has many skills in the users object.
console.log("-------------------------------------------------");
console.log("Step 4");

let userWithMaxSkillsKey;
let skillsLength = 0;
let maxSkillsLength = 0;

for (let userKey in users) {
    skillsLength = users[userKey]["skills"].length;
    if (skillsLength > maxSkillsLength) {
        maxSkillsLength = skillsLength;
        userWithMaxSkillsKey = userKey;
    }
}

console.log(userWithMaxSkillsKey);

// 5. Count users having greater than or equal to 50 points from the following object.
console.log("-------------------------------------------------");
console.log("Step 5");

for (let i in users) {
    console.log(i + ": " + users[i].points);
}

console.log(Object.values(users).filter(item => item.points >= 50).length);

// 6. Find people who are MERN stack developer from the users object. Print out number of MERN users and their names.
console.log("-------------------------------------------------");
console.log("Step 6");

// Object.keys(users).filter(item =>
//     users[item].skills.includes("MongoDB") &&
//     users[item].skills.includes("Express") &&
//     users[item].skills.includes("React") &&
//     users[item].skills.includes("Node"))
//     .forEach(item => console.log(item));

Object.keys(users)
    .filter(item =>
        users[item].skills.includes("MongoDB" && "Express" && "React" && "Node")
    )
    .forEach(item => console.log(item));


// 7. Set your name in the users object without modifying the original users object.
console.log("-------------------------------------------------");
console.log("Step 7");

users.Rowshen = {};

console.log(users);

// 8. Add a method for all users to print a string like:
// > “Asab is 25 years old. He knows ‘HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor’.”
console.log("-------------------------------------------------");
console.log("Step 8");

Object.keys(users).forEach(item =>
    users[item].getInfo = function () {
        return `Hi, I am ${this.age} years old. I know ‘${this.skills.join(", ")}’.`;
    });

console.log(users.Asab.getInfo());
