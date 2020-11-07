// Who is Washing

let names = ["Ben", "Jenny", "Michael", "Chloe", "Timmy"];

const whoIsWashing = nameArr => nameArr[Math.floor(Math.random() * nameArr.length)];
const printWhoIsWashing = nameArr => console.log(`${whoIsWashing(nameArr)} is going to wash dishes today!`);

printWhoIsWashing(names);
names.push("Max");
printWhoIsWashing(names);
printWhoIsWashing(["Patrick", "AnnMarie", "Alisol", "Walton"]);