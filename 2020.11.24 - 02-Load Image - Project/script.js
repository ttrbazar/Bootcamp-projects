const imgContainer = document.querySelector(".images");

const createImage = (newImgPath, oldImg) => {
    return new Promise((resolve, reject) => {
        const newImg = document.createElement("img");
        newImg.src = newImgPath;
        newImg.onload = function () {
            if (oldImg) oldImg.style.display = "none";
            imgContainer.appendChild(newImg);
            console.log("image loaded.");
            resolve(newImg);
        };
        newImg.onerror = function () {
            reject("Could not load the image.");
        }
    });
}



// create a wait function

const waitFor = (second, passThroughElement) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`${second} seconds passed.`);
            resolve(passThroughElement);
        }, second * 1000)
    });
};



//call createImage with then and catch

createImage("./images/img-1.jpg")
    .then(resolvedValue => waitFor(2, resolvedValue))
    .then(resolvedValue => createImage("./images/img-2.jpg", resolvedValue))
    .then(resolvedValue => waitFor(2, resolvedValue))
    .then(resolvedValue => createImage("./images/img-3.jpg", resolvedValue))
    .then(resolvedValue => waitFor(2, resolvedValue))
    .then(resolvedValue => createImage("https://iso.500px.com/wp-content/uploads/2014/06/W4A2827-1.jpg", resolvedValue))
    .then(resolvedValue => waitFor(2, resolvedValue))
    .then(resolvedValue => createImage("https://photographylife.com/wp-content/uploads/2016/06/Mass.jpg", resolvedValue))
    .then(resolvedValue => waitFor(2, resolvedValue))
    .then(resolvedValue => createImage("https://www.nationalgeographic.com/content/dam/photography/PROOF/2017/April/epic-landscapes/30-8919831_uploadsmember136628yourshot-136628-8919831jpg_qftcyvx4ghhkejyf6yrbtvtgllp3eflutfvvbpyjwjhzlmh4iziq_1800x1260.jpg", resolvedValue))
    .catch(rejectValue => console.error(rejectValue));
