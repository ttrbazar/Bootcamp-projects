# React-Redux Counter Application
## 1.
In this Project you will create a counter with the knowledge of redux.

So create components folder with a Counter.js file;

Create a reducers folder with a index.js file;

And create a store folder with a index.js file.

## 2.
In your reducer file create a function that update state with action types (INCREMENT, DECREMENT) .Give initial state of counter “0”.
## 3.
In your store file create your store and export it. 
## 4.
Wrap our application (App) around the Provider in our src folder index.js.
## 5.
Let’s finally go into our App.js and connect to your store. (mapStateToProps, mapDispatchToProps)
## 6.
Now we need to run our counter. 

In your App component call \<Counter /> component and send this component methods and state with properties.
## 7.
In your \< Counter /> component, create a div class name “container”, inside this div create button for increasing and decreasing the counter.
## 8.
Give event handlers to the buttons to call the increment and decrement methods that send by App.js.
## 9.
Write your actual counter value to the DOM by using \<p> element.
## 10. Challange
- Create another three buttons.
- One of them increases the counter if the value is odd.
- Other button increases the value with a time delay.
- Last button start counter like a second timer; when you click the button counter starts counting and stops when u click again.
Congragulations…