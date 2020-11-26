# LOAD IMAGE

Build the image loading functionality. Pretend you're working on your own 😉

1. Create a function 'createImage' which receives imgPath as an input (argument). This function returns a new promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path (imgPath). 

2. Then, append it to the DOM element with the 'images' class, and resolve the promise. 

The fulfilled value should be “image loaded” to the console. Or you can just resolve whole “img” element itself.

In case there is an error loading the image ('error' event), reject the promise.

3. Your images is in the images folder, try for resolve and reject functionality.

4. Comsume the promise using .then and also add an error handler (catch). 

5. Create a function 'waitFor' which pauses execution for 2 seconds after the image has loaded. Use this function inside your chain.

HINT:
```
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
```
Reference : developer.mozilla.org

6. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image.

HINT: You can use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉;

7. After the second image has loaded, pause execution for 2 seconds again;

8. After the 2 seconds have passed, hide the current image again.
