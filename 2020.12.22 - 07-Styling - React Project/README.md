# React Inline Styling

In this Project we are going to use css rules as inline styling.

In your working React folder, empty your “src” folder (or you may just change name). Put your project’s src here.

Keep instructions below.

## 1.
Create a folder components inside src folder. And create an App.js file. 

## 2.
In App.js; create a function component named App and return a parent div.

## 3.
Inside div; create, 
```
one “h1” element : “Welcome To My Page”, 
one MyPoems component (that you will create later),
one “footer” element: “Thank You Visiting My Page!”. 
```
## 4.
Now, create a MyPoem component inside components folder. It should return a h1 element fort title and paragraph consist of a poem (You can find sample poem under the page). Import this file from App.js.

Run the app (npm start) and see content in your DOM.

## 5.
In App.js file import styleSheet object from styles.js.

## 6.
Create a “divStyle” object with one property “background”. Assign this property to the background value of styleSheet object.

## 7.
Now use “divStyle” object with the attribute “style” inside your parent div element. See the result; Could you see your welcome message or poem? 😊.

## 8.
Add some inline styling to the h1 element, may be color.

## 9.
Also, add style attribute to the footer and use styleSheet’s color and styleSheet’s font size for styling. See the result.

## 10.
And finally dont forget to style MyPoem component with the styleSheet object properties. (as you did in App component)

```
SNOW IN THE MORNING
The couple is traveling up the mountain.
They have been traveling a long time to get to the mountain.
They left early with their son who strums
sweet songs with his fingers,
songs his mother sang when she was young,
singing sweetly like him for...
```