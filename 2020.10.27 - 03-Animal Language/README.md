# Animal Language

Take a phrase and translate it into its whale equivalent.

There are a few simple rules for translating text to whale language:

1. There are no consonants. Only vowels excluding “y”.
2. The u‘s and e‘s are extra long, so we must double them in our program.

For example for “Hi, Human” output is : “IUUA”.

To accomplish this translation, we can use our knowledge of loops. Let’s get started!

1.
Create a variable named input that is equal to any phrase you’d like. This variable will contain the text you want to translate into animal language.

2.
Whales only speak in vowels so you need an array of vowels to be extracted from the input variable. Set the array equal to a variable named vowels that will not be updated.

Note: Whales don’t consider “y” a vowel.

3.
Create a variable named resultArray and set it equal to an empty array: []. This will serve as a place to store the vowels from the input string.

4.
Create a loop to iterate through each letter of the input variable text. In a later step, we will compare each letter with our vowels array.

5.
Create a nested for loop inside of the for loop you just wrote. Make the inner loop iterate through the vowels array each time the outer loop runs.

This will enable you to check each letter of input against all the vowels elements during each iteration.

Hint

Remember, the inner for loop and outer for loop should have different iterator variables. 

6.
Inside the second for loop, write a code block that compares the input letter to every letter in the vowels array.

Hint

Use a method to add matching letters the array that stores the results. 

7.
Whales double their e‘s and the u‘s in their language.
Write an if statement that checks if each letter in the input string is equal to 'e' or 'u'.

8.
At the bottom of the program, log resultArray to the console.

9.
Notice when we log the array, the output has commas between each letter. To produce proper whale language, we want to capitalize the array elements and put them together as one string.

10.
Run the program and sing the output out loud — you officially speak whale!
To confirm, if you change the value of input to ‘turpentine and turtles’, the whale version would read: 'UUEEIEEAUUEE'.
Try other tests like 'a whale of a deal!' (to get 'AAEEOAEEA').

