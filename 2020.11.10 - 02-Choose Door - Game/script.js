const doorImage1 = document.querySelector("#door_a");
const doorImage2 = document.querySelector("#door_b");
const doorImage3 = document.querySelector("#door_c");
const startButton = document.querySelector("#start");

const flyDoorPath = "findfly.png";
const oceanDoorPath = "ocean.png";
const forestDoorPath = "forest.png";
const closedDoorPath = "door_closed.png"

let numClosedDoors = 3;
let currentlyPlaying = true;

let openDoor1;
let openDoor2;
let openDoor3;

function isFly(door) {
    return door.src.includes(flyDoorPath);
}

function isClicked(door) {
    return !door.src.includes(closedDoorPath);
}

function playDoor(door) {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver("win");
    } else if (isFly(door)) {
        gameOver();
    }
}

const randomFindDoorGenerator = () => {
    let findDoor = Math.floor(Math.random() * numClosedDoors);
    if (findDoor === 0) {
        openDoor1 = flyDoorPath;
        openDoor2 = oceanDoorPath;
        openDoor3 = forestDoorPath;
    } else if (findDoor === 1) {
        openDoor2 = flyDoorPath;
        openDoor1 = oceanDoorPath;
        openDoor3 = forestDoorPath;
    } else {
        openDoor3 = flyDoorPath;
        openDoor1 = oceanDoorPath;
        openDoor2 = forestDoorPath;
    }
}

doorImage1.onclick = () => {
    if (!isClicked(doorImage1) && currentlyPlaying) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
}

doorImage2.onclick = () => {
    if (!isClicked(doorImage2) && currentlyPlaying) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
}

doorImage3.onclick = () => {
    if (!isClicked(doorImage3) && currentlyPlaying) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
}

startButton.onclick = () => {
    if (!currentlyPlaying) {
        startRound();
    }
}

function startRound() {
    numClosedDoors = 3;
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    startButton.innerHTML = "Good Luck!";
    currentlyPlaying = true;
    randomFindDoorGenerator();
}

function gameOver(status) {
    if (status === "win") {
        startButton.innerHTML = "You win! Play again?";
    } else {
        startButton.innerHTML = "Game over! Play again?";
    }
    currentlyPlaying = false;
}

startRound();