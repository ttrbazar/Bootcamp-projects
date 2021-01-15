# React Router Example

In this Project you will use routers to display a one page application.

Let’s get started!

If you have a working React path already (or you just created a new one):

Install react-router-dom with the command : npm install --save react-router-dom

Change your original “src” folder with the Project’s “src” and run your application: npm start

Your goals are;
- When you click any navigation item (Home, About, Messages) this page should open.
- In Messages page, when you click a message, this message will shown.

## STEPS:

## 1.
In your App.js file; after finishing header create a \<div> classnamed “menu”. Inside div, create list items and use \<Link> element to making links; Home to “/”, About to “/about”, Messages to “/messages”.

Look at your browser tab, when you click an item you should see items link like: “http://localhost:3000/messages”

## 2.
Inside components folder, create 3 components with the names of “Home”, “About” and “Messages”.

## 3.
“Home” component should return a sentence like “This is my Home page!” 

## 4.
“About” component should return a sentence like “This is my About page!” 


## 5.
“Messages” component should return a sentence like “This is my Messages page!” 

## 6.
Now; after “menu” Create another div classnamed “App-intro”. Inside this div, call this components with the \<Route/> elements.

Look at your page it should work properly

## 7.
If, user writes address directly to the browser tab or writes wrong link for example: http://localhost:3000/mess ; It shows blank page.

Add a \<Redirect/> element to “/” under your Routes. Try to write wrong links and see the result.

## 8.
This time, create a Notfound component inside components folder, that returns “Error 404! Page Not Found” and “a \<Link> element to the “/”, for home page.

## 9.
Call this NotFound component within a Route element, in your App under the other Routes. HINT: Without no path

You see that everytime you see NotFound in the DOM.

## 10.
To fix this problem; wrap your Route elements with a \<Switch> element. As you saw Notfound has gone, your page Works good. 

But, how can we Show Notfound if a user writes strange extensions like: “http://localhost:3000/darlaenvksmflhafa”

It always goes to the home page because of Redirect element.

## 11.
To fix this, wee need create more specific path for Redirect element. Add a for attribute to your Redirect element with the value of “/home”

It means that when user uses mistakenly “/home” path, Redirect element returns page to the “/” path.

Now you can see NotFound when user writes wrong address.

## Nested Routes:
## 12.
We will create another route inside one component.

Create list items for different messages with key attributes, give different values for keys.

HINT:
```
    <li key="1">Message Number - 1 </li>
    <li key="2">Message Number - 2 </li>
    <li key="3">Message Number - 3 </li>
```
Wrap each list item in a Link element to “/messages/KEY VALUE”.

## 13.
We can create different components for different messages like we did below steps. But, we can handle with one component also, by using the key value.

Create your one Route element with Switch element. Use path to ”/messages/:id” and component to Message (we will create next step)

## 14.
Now, create a message.js file and create a class component.

Return a string within a \<h3> element “This message is coming from message ID {this.props.match.params.id}“

What is match params

>Match Params:
>This is easy to do using react-router-dom . The library passes in a prop called match into every route that is rendered. Inside this match object is another object >called params . This holds all matching params where the key is the name we specified when creating the route and the value is the actual value in the URL

If you want to see match object, write a console for “this.props.match” before \<h3> element and inspect.

## 15.
Now, clicking each message link, it appears different message with an id.

Congragulations! Keep on next step.

## 16.
Now, think about it, our messages component is also in a Route element. So it should have a match object.

Inside messages.js console.log match object. Do you think could we use match.url inside our code?

Try to figure out.

WELL DONE!