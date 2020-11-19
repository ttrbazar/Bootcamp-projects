# TEXT TRANSFORM (Clause Mix)

## Purpose: To practice modules in javascript

Clause Mix is a service that allows you to perform an action on input text and display the output of that behavior to the console. For example, with the current functions defined in Clause Mix, you can:
- count the characters in a clause
- capitalize the first character of clauses
- reverse a clause’s words in place
- reversing characters in place
- replace the first occurrence of a string
- replace all occurrences of a string
- encode text by swapping certain characters for other characters

At present, Clause Mix runs as a program in a single file. This single file includes functions that define behavior as well as the output. 

Clause Mix knows that by extracting the functions into a module, logic can be reused in different parts of our application.

Let’s help Clause Mixer turn the program into a module!

## 1.
You have a file clauseMix.js. Run this file in terminal (node clauseMix.js) to see the output of the program.

## 2.
Each of the six functions within clauseMix.js manipulates a string of text in some way, and the displayClause() function outputs a manipulated clause.

The text-transformation behavior should be kept within the module clauseMix.js, and the output of behavior should exist within clause.js.

Copy the displayClause() function and the displayClause() function call and paste it in clause.js. Then delete the displayClause() function from clauseMix.js.

Notice that if you run clause.js, you will get a ReferenceError.

## 3.
You can now turn the behavior of clauseMix.js into a module. In this file, create a variable ClauseMix and set it equal to an empty object to represent the module as an object.

## 4.
You’ve defined a ClauseMix object, but in order for you to attach behavior to it. You’ll need to make sure that each function is accessible as a property of it.

One by one, for each function in clauseMix.js, modify the function so that it should be a property on the object.
```
ClauseMix.functionNAME = function() {/*your function logic*/};
```

## 5.
In addition to setting each function as a property on the ClauseMix object, notice that several functions depend on another function to be called. This functions also need to be prepended by the module name. (For Example : ClauseMix.replaceAllOccurrences()).

## 6.
Your ClauseMix object now has properties. Export it using module.exports syntax.

## 7.
Import the module in clause.js using the require() statement. You can use the variable ClauseMix again to represent the module.

When you run clause.js, you will still get a ReferenceError.

## 8.
In order for clause.js to display the output from the module, you’ll need to call each of the functions in the displayClause() function as properties of the imported ClauseMix object.

When you run the file, you should see the output of the functions.

## 9.
Continue by adding a few additional functions to the ClauseMix module.

In clauseMix.js, create a function on the ClauseMix object called palindrome() that takes a String str as a parameter.

The body of the function should use string concatenation or interpolation to return the string, a space, and the reverse of the string. You can use the reverseString() function. Dont forget to call reverseString() as a method of ClauseMix.

## 10.
Again, in clauseMix.js, create another function pigLatin() on the ClauseMix object that takes a sentence and a character as parameters.

The body of the function should return the sentence split at each of the spaces, and joined back together using the character argument concatenated with a ' '.

## 11.
In clauseMix.js, modify the way you export ClauseMix to export default instead of. module.exports.

## 12.
In clause.js, use the import keyclause to import the ClauseMix module. The file path will be './clauseMix.js'.

In your Project folder correct the name of package.json file.

## 13.
In clause.js, use console.log() to display the output of palindrome() and pigLatin() functions within the displayClause() function. You will need to pass the functions a string.

You should see the output of the manipulated clause.

## 14.
Now, test one final behavior for your program; export each of the functions as a variable. 

Modify clauseMix.js so that each function is exported as a variable name.

Note that as you do this, you should also remove the ClauseMix object in front of each function.

## 15.
Using the export statement at the bottom of the file, export each of the function by their variable named between two {}

## 16.
In clause.js, modify the program to import each of the variables also.

## 17.
As a last and final step, modify each of the functions within each of the displayClause() function so that they use only the variable name in the function call.

When you run the file, you should see the output of the functions.
