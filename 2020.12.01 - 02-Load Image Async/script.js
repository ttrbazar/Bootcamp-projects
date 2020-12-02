const imgContainer = document.querySelector(".images");

const imgPaths = [
    "./images/img-1.jpg",
    "./images/img-2.jpg",
    "./images/img-3.jpg",
    "https://iso.500px.com/wp-content/uploads/2014/06/W4A2827-1.jpg",
    "https://photographylife.com/wp-content/uploads/2016/06/Mass.jpg",
    "https://www.nationalgeographic.com/content/dam/photography/PROOF/2017/April/epic-landscapes/30-8919831_uploadsmember136628yourshot-136628-8919831jpg_qftcyvx4ghhkejyf6yrbtvtgllp3eflutfvvbpyjwjhzlmh4iziq_1800x1260.jpg"
];


const createImage = (newImgPath, oldImg) => {
    return new Promise((resolve, reject) => {
        const newImg = document.createElement("img");
        newImg.src = newImgPath;
        newImg.addEventListener("load", () => {
            if (oldImg && oldImg.parentNode === imgContainer) imgContainer.removeChild(oldImg);
            console.log(`image loaded. ${newImgPath}`);
            resolve(newImg);
        });
        newImg.addEventListener("error", () => {
            reject(`Could not load the image. ${newImgPath}`);
        });
    });
};


const waitFor = second => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`${second} seconds passed.`);
        }, second * 1000)
    });
};


const loadNPause = async () => {
    try {
        let resolveFromCreateImage;
        for (let imgPath of imgPaths) {
            const resolveFromWaitFor = await waitFor(2);
            console.log(resolveFromWaitFor);
            resolveFromCreateImage = await createImage(imgPath, resolveFromCreateImage);
            imgContainer.appendChild(resolveFromCreateImage);
        }
    } catch (e) {
        console.error(e);
    };
};


const loadAllProm = async () => {
    try {
        const resolvedArr = await Promise.all(imgPaths.map(item => createImage(item)));
        resolvedArr.forEach(item => imgContainer.appendChild(item));
    } catch (e) {
        console.error(e);
    };
};



loadNPause();

// loadAllProm();
