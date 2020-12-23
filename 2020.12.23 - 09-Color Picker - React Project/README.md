# React Color Picker

In this project, you’ll change color by clicking the button. You will use life-cycle methods also.

Let’s get started!

First put this “src” folder to a working react path and run your application. You will see a color picker button but it doesnt work.

Your goals are;
- When you click button, page color changes randomly,
- Choosen color prints on the page in \<h1> element,
- According to color (if it is ligth or not), \<h1> element’s font color changes to black or white. Make this happen by changing the class.
- According to color (if it is ligth or not), \<button> element font color and background color changes to black or white. Make this happen by changing the class.

Do not change/update isLight() and formatColor() methods

## 1.
In your colorpicker.js file; create a construtor method and create a state named color. Give this color an array with the values of different numbers below “256”. Example: [42, 25, 146]

This will be your rgb color template.

## 2.
Print your current color to the DOM. Use formatColor() method and color state.

Hint: it should be like ; “Your Color is rgb(55, 42, 126)”.

## 3.
Change your \<h1> element class name, using the isLight() method, choose avaible class names from .css file.

Give different colors to the state by hand and see the result.

## 4.
You should apply your color to the body of the DOM. So create an applyColor() method and assign your rgb color format to the background style of body element.

How can you call this applyColor() method? Got to the next step.

## 5.
There may be different options;
- You can call this method inside render (before return).
- You can call this method by clicking the button, you can add an onClick attribute to a button,
- You can add this method inside your componentDidMount() method. This is the more common usage.

*Try these methods and see the difference. Finally keep the last option.

## 6.
When you add your applyColor() method inside componentDidMount() method; it applies color after rendering the page. Change your color by hand and see if it is working.

## 7.
Now we need to choose color randomly. Create a chooseColor() method. It should create random color array and changes the color state. 

Just for testing : call your function from componentDidMount() method and check your page (h1 element comntent) if your method is working properly.

If it is working; delete it inside componentDidMount() method.

## 8.
This time send your method as a property to the Button component.

## 9.
Inside your Button.js file, give button element an onClick attribute and call the chooseColor() method with the props.

Try your button changes the color 

## 10. 
You achieved to change your state by clicking the button. But You need to manipulate body background color. So your need to run applyColor by every click.

There may be different options;
- You can call applyColor() method inside chooseColor().
- You can call this method by clicking the button, you can add an onClick (or onFocus) attribute to a button,
- You can add this method inside your componentDidUpdate() method. This is the more common usage.

*Try these methods and see the difference. Finally keep the last option.

## 11.
When you add your applyColor() method inside componentDidUpdate() method; it applies color after every changes in the page. So it should work after every state changes.

## 12.
Finally change your button class with the suitable one in your .css file. According to the color is ligth or not?
