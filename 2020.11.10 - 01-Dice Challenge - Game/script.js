function randomGenerator(num) {
    return Math.floor(Math.random() * num) + 1;
}

start.onclick = () => {
    let randomNum1 = randomGenerator(6);
    let randomNum2 = randomGenerator(6);

    dice_A.src = `./images/dice${randomNum1}.png`
    dice_B.src = `./images/dice${randomNum2}.png`

    if (randomNum1 > randomNum2) {
        document.querySelector("h1").innerHTML = "Play 1 Wins!!!";
        player_1.className = "player-win";
        player_2.className = "";
    } else if (randomNum1 < randomNum2) {
        document.querySelector("h1").innerHTML = "Play 2 Wins!!!";
        player_2.className = "player-win";
        player_1.className = "";
    } else {
        document.querySelector("h1").innerHTML = "Draw!!!";
        player_1.className = "player-win";
        player_2.className = "player-win";
    }
}
