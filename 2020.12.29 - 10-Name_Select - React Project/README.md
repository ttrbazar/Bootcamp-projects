# React Name Picker

In this project, you’ll choose a name from name picker. You will use state and props.

Let’s get started!

First put this “src” folder to a working react path and run your application.

Your goals are;
- When you select a name, your chosen name appear on the page,

## 1.
In your App.js file; create a construtor method and create a state named name. Give this name a string. example: “Cornelius”.

## 2.
Send your name to the Name component.

## 3.
Use name in your Name.js file instead of dots.

## 4.
In your App.js file; create a changeName() method with one parameter. That sets the state of name according to given parameter.

## 5.
Send this method to the Select component.

## 6.
In your Select.js file create a constructor method (for binding) and create a handleChange() method.

## 7.
This method should take the selected option value and use it as an argument to call the changeName();

## 8.
Inside \<select> element Create an onChange attribute and call this handleChange() method in it. 

Congragulations!


Additional steps:

- Make the selector take names from names.js file. (You can use lots of names)
- After you select a name display a quote from wishes.js file in to the DOM.