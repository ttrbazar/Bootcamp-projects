// 1st Problem

let numberOfBottles = 99

const bottlesOnTheWall = bottles => {
    while (bottles > 0) {
        console.log(`${bottles} bottles of milk on the Wall. Take one down, pass it around.`);
        bottles--;
    }
    console.log(`0 bottles of milk on the Wall.`);
}

bottlesOnTheWall(numberOfBottles);

console.log("--------------------------------------------");
console.log("--------------------------------------------");
console.log("--------------------------------------------");
console.log("--------------------------------------------");


// 2dn Problem

const bottlesOnTheWallTakeDownByStep = bottles => {
    let step;
    
    do {
        step = prompt("Enter valid step (integer): ");
    } while (!Number.isInteger(Number(step)) || Number(step) === 0);
    
    while (bottles > 0) {
        console.log(`${bottles} bottles of milk on the Wall. Take ${step} down, pass it around.`);
        bottles -= step;
    }
    
    console.log(`0 bottles of milk on the Wall.`);
}

bottlesOnTheWallTakeDownByStep(numberOfBottles);

console.log("--------------------------------------------");
console.log("--------------------------------------------");
console.log("--------------------------------------------");
console.log("--------------------------------------------");

// 3rd Problem

const bottlesOnTheWallTakeDownByPromt = bottles => {
    let step;
    
    while (bottles > 0) {
        console.log(`${bottles} bottles of milk on the Wall. Pass it around.`);
        do {
            step = prompt("Enter valid step (integer): ");
        } while (!Number.isInteger(Number(step)) || Number(step) === 0);
        bottles -= step;
    }
    
    console.log(`0 bottles of milk on the Wall.`);
}

bottlesOnTheWallTakeDownByPromt(numberOfBottles);