# React-Redux Wikipedia Search

In this Project you will use wikipedia api with your knowledge of Redux.

Let’s get started!

If you have a working React-Redux path already (or you just created a new one):

Change your original “src” folder with the Project’s “src” and run your application: npm start

## Your goals are;
- When you enter something and hit the button, at least 10 results should come from wikipedia.
- Use redux for storing states and fetch action.
- Use Redux Thunk middleware to make Async call. 

## STEPS:
Without middleware, Redux store only supports synchronous data flow. Thus, install thunk middleware with; npm install redux-thunk
## 1.
>`https://en.wikipedia.org/w/api.php?action=opensearch&search=SEARCH-WORD&format=json&origin=*&limit=10`
Take “SEARCH-WORD” as parameter.

In your action file create handleData() helper function, use this url to fetch data from wikipedia.

This function should dispatch response data to another function sendResults(). 

If there is no expected result from fetch, it should dispatch clearResults() function.

## 2.
```
sendResults() function should returns type and data.
clearResults() function should returns just type.
```
## 3.
In your reducer file give initial state to empty array. According to action types (SEND, CLEAR); return data or initial state. So when user makes empty search, current results are cleared.

## 4.
In your store file create your store and export it. Do not forget to apply middleware (thunk) as a parameter of your createstore method.

## 5.
Wrap our application (App) around the Provider in our src folder index.js.

## 6.
Let’s finally go into our App.js and connect to your store. (mapStateToProps, mapDispatchToProps)

## 7.
Take “SEARCH-WORD” from your form component from “form.js” file.

## 8.
In your App.js file, according to the returning data; list wikipedia results to the DOM.


Congragulations!