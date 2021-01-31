# React-Context Custom Salad

In this Project we're going to manage our state with React context.

## Let’s get started!

If you have a working React path already (or you just created a new one):

Change your original “src” folder with the Project’s “src” and run your application: npm start

## STEPS:
## 1.
Since you are building a small app with multiple components, install JSS to make sure there won’t be any class name conflicts and so that you can add styles in the same file as a component.

Run the following command:  npm install react-jss

## 2.
In SaladMaker.js file import SaladBuilder and SaladSummary components and render them under \<h1> element.

## 3.
In this step, you’ll use context to store the customer information at the root of the component. You’ll create a custom context, then use a special wrapping component called a Provider that will store the information at the root of the project. You’ll then use the useContext Hook to connect with the provider in nested components so you can display the static information.

Now create a cotext folder and UserContext.js file. Inside this file create a context and export it.
## 4.
In App.js file, add this user constant;
```
const user = {
  name: 'Your Name',
  favorites: ['avocado', 'carrot' ]
}
```

## 5.
In App.js file, send this user as a value property within the context Provider. So wrap your components with Provider.

## 6.
In Navigation.js file, implement context API , to write a message inside div; ”Welcome, YOUR NAME”.
## 7.
In SaladItem.js file, implement context API , favorite variable is now “true”. Now, decide favorite “true” or “false” according to the user favorite items.

HINT: use an array method.

## 8.
One of the big differences between context and other state management solutions such as Redux is that context is not intended to be a central store. You can use it multiple times throughout an application and initiate it at the root level or deep in a component tree. In other words, you can spread your contexts throughout the application, creating focused data collections without worrying about conflicts.

To keep context focused, create Providers that wrap the nearest shared parent when possible. In this case, that means, rather than adding another context in App, you will add the context in the SaladMaker component

So create a context SaladContext indise SaladMaker.js file.

## 9.
In SaladMaker.js file, Create a reducer function that adds a new item to a state array;
```
function reducer(state, item) {
  return [...state, item]
}
```
To update data, you’ll need to use other state management tools such as Hooks. If you were collecting data for the same component, you’d use either the useState or useReducer Hooks. The useReducer Hook is a good fit since you’ll need to update the most recent state on every action.

## 10.
then use the useReducer Hook to create a salad array and a setSalad function; const [salad, setSalad] = useReducer(reducer, []);

Now you have a component that contains the salad data you want to share, a function called setSalad to update the data, and the SaladContext to share the data in the same component.

## 11.
Create a Provider and wrap your jsx. Provider takes a single value as a prop. Since you can’t pass salad and setSalad individually, you’ll need to combine them into an object and pass the object as the value. 

## 12.
Next, go into the SaladItem component and pull the setSalad function out of the context. 
Add a click event to the button that will call the setSalad function with name parameter.

## 13.
Import the SaladContext component, then pull out the salad data. Replace the hard-coded list items with a map over salad to \<li> elements.

When you do, you will be able to click on items and it will update the summary. Notice how the context gave you the ability to share and update data in different components. The context didn’t update the items itself, but it gave you a way to use the useReducer Hook across multiple components.

## Conclusion:
Context is a powerful and flexible tool that gives you the ability to store and use data across an application. It gives you the ability to handle distributed data with built-in tools that do not require any additional third party installation or configuration

You can store many types of information in contexts including themes, form data, alert messages, and more. Context gives you the freedom to build components that can access data without worrying about how to pass data through intermediary components or how to store data in a centralized store without making the store too large.
