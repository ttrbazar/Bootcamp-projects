# React Authorization

In this project, you’ll accomplish authorization form by using a React component to set up a simple authorization layer.

Your goals are;
- If you entered correct password, input and submit button dissappear, user profile displays on the page.
- If you entered wrong password 3 times, input and submit button goes disabled with 30 seconds, after 30 seconds they become active aqain. Give alert messages to the user also.

Let’s get started!

Start your app and you will see a login page but it doesnt work.

If you enter correct password; app shows you personal card, but it should be hidden until you enter a correct password! The contact info is in your App.js file.

Look in the code editor. You can see a Login component class. It returns login code block. If password comes true, it should change return elements.

## 1.
Now create a contact variable (JSX expression) and assign it to a code block. Start with a div class named “card” and add other knowledge (Just like we did in third Project : Contacts Project. HINT: use same class names).

## 2.
Create a constructor() method. Inside method create a state “authorize” with the default value of “false”. You will check whether a user has entered the right password by running the expression this.state.authorized.

## 3.
According to authorized state (true or false); return “Enter The Password” or “Contact Profile” in the h1 element. Use a ternary operator.

## 4.
Now, do the same for JSX expressions; login or contact code block under your h1 element.

If you achieve to see different combinations, your code is working, so set authorize “false” for next step. 

## 5.
We need to change this state with the correct password.

So create a method named authorize(). This should check whether a submitted password is entered. If it is, then this.state.authorized will become true.

## 6.
You need authorize to get called whenever a user clicks “Submit!”

Give the <form> an onSubmit attribute. Set the attribute’s value equal to the authorize method.

## 7.
Try entering an incorrect password and hitting ‘Submit.’ Nothing should happen.

Now try entering correct password, your screen should change!

## 8.
Inside constructor() method create a state “counter” with the default value of “3”. You will check whether a user has permitted entering password.

## 9.
Inside constructor() method create a state “isEditing” with the default value of “true”. You will make disable input and button by using this value.

## 10.
If user enters wrong password make counter -1. If counter equals to “0” change isEditing to “false”.

## 11.
Use isEditing to disable input and button.

## 12.
Finally add an “enableInput” method, call this method after you made isEditing to false.

## 13.
Inside “enableInput” method, add an settimeout and after 30 seconds change isEditing to its default state.
