# React CSS Rules

In this Project we are going to use css in our react app.

In your working React folder, empty your “src” folder (or you may just change name).

Keep instructions below.

## 1.
Create a folder components inside src folder. And create an App.js file. 

## 2.
In App.js; create a function component named App and return a parent div (class name “parent).

## 3.
Inside div; create, 
```
one h1 element (class name “title”): “Hello World”, 
one h2 element (class name “child”): “How are you?”,
one p element: “im fine!”. 
```
Run the app (npm start) and see elements content in your DOM.

## 4.
Now, create an App.css file inside components folder. Import this file from App.js. Inside css file; give each element different font colors, give parent element a background color also. See the result.

## 5.
Create a style.css file outside components folder and import it from index.js.

## 6.
In style.css give parent element a different font color (different to childs). Nothing changed? 😊

## 7.
Try giving each element different colors. Did you see, all the colors changed according to the style.css. This is priority between components.

## 8.
But remember css priorities between id, class and tag. Now, create an id named “parap” inside p element. Give that id different color inside App.css. See the result.

If more than one rule applies to an element and specifies the same property, then CSS gives priority to the rule that has the more specific selector. An ID selector is more specific than a class selector, which in turn is more specific than a tag selector.

