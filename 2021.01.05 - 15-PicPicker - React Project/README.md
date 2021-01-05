# React Picture Picker

Separating container components from presentational components is a popular React programming pattern.

Here's the basic idea behind it: if a component has to have state, make calculations based on props, or manage any other complex logic, then that component shouldn't also have to render HTML-like JSX.

Instead of rendering HTML-like JSX, the component should render another component. It should be that component's job to render HTML-like JSX.

In this Project you will use your component knowledge to create a Picture picker.

Let’s get started!

If you have a working React path already (or you just created a new one):

Change your original “src” folder with the Project’s “src” and run your application: npm start

Your goals are;
- When you click start button, Picture changes by order with a time period.
- When you click stop button, it stops.

STEPS:

## 1.
App.js contains a lot of logic! You can't even see the render function unless you scroll down. Program runs with the componentDidMount().

Let's divide App in a presentational component and a container component.

Create a new file named ChoosePicture.js and ChoosePicture component. Put your presentational elements in to the ChoosePicture component (cut from App).

## 2.
Call this component from App. And dont forget to send the source of image as a property.

## 3.
Now create a start and stop button inside ChoosePicture.

## 4.
Then, rewrite your program according to the buttons, instead of componentdidMount