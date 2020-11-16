//Choose a random color

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");

function getRandomHexColor() {
    const hexNumbersText = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hexNumbersText[Math.floor(Math.random() * hexNumbersText.length)];
    }
    return color;
}

function changeColorLimited(e) {
    const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
    let colorIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[colorIndex];
    button1.innerHTML = colors[colorIndex];
    button2.innerHTML = "Click Me!";
    console.log(e.target.id);
}

function changeColor(e) {
    const randomHexColor = getRandomHexColor()
    document.body.style.backgroundColor = randomHexColor;
    button1.innerHTML = "Click Me!"
    button2.innerHTML = randomHexColor;
    console.log(e.target.id);
}

button1.addEventListener("click", changeColorLimited);
button2.addEventListener("click", changeColor);