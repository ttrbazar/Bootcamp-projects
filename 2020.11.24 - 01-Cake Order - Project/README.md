# CAKE ORDER

Build the Patisserie Cake Order page functionality. 
You have 3 steps; take order, calculate payment, check stock.

1. Create a function 'ckeckOrder' which receives order from DOM elements as an input (argument) array. 

This function returns a new promise which compare stock wih order, if it is ok calculate total payment and write a message on the console for user. 

2. Also, 'ckeckOrder' function resolves order and total payment together.

In case there is an error message, reject the promise.

3. Create a ’payment’ function which receives order and total payment send from 'ckeckOrder' function. And returns new Promise.

4. This function asks user for confirmation; If it is ok, it prints a “payment completed” string and resolves order itself. 

5. Create a function 'stockcontrol' returns new Promise. Controls the stock of the item ordered. İf it is critical, it prints a message for cashier.

6. Call 'ckeckOrder' function with the order and create .then and .catch methods. (call your other functions with .then)

7. Every function has a timeout function with the delay of 1 second then the above.

HINT:
Look at the sample screenshot at the other page.
