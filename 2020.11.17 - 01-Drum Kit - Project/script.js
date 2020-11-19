const playSound = (e) => {
    let pressedKey;
    let pressedDrum;
    let sound;

    if (e.type === "click") {
        pressedKey = e.currentTarget.innerText;
    } else {
        pressedKey = e.key;
    }

    if ("wasdjkl".includes(pressedKey)) {
        pressedDrum = document.querySelector(`.${pressedKey}.drum`);
        pressedDrum.classList.add("pressed");
        setTimeout(() => {
            pressedDrum.classList.remove("pressed");
        }, 100);
        sound = new Audio(`./sounds/tom-${pressedKey}.mp3`);
        sound.play();
    }
}

document.querySelectorAll(".drum").forEach(element => element.addEventListener("click", playSound));
document.addEventListener("keydown", playSound);
