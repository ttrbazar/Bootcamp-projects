# Caesar Cipher

The Caesar cipher is one of the earliest and simplest ciphers that were invented. It works like this:

First, choose some text that you want to encrypt. Let's choose the text "eat".

Next, pick a number. It can be positive or negative. Let's choose "-3" for this example. This will be our "key" that will allow us to encrypt and decrypt the message.

For each letter of your text, move it along the alphabet by a number of places defined by our key. So in our example, the letter E would get moved backwards (remember we chose a negative number) three spaces. So E would get encrypted into B.

Likewise, the next letter, A, gets moved backward by 3 letters. Since it's at the start of the alphabet, we rotate back around to the end: A>Z>Y>X, so we end up with the letter X as the encrypted version of A.

Finally, we move T three spots back and get: T>S>R>Q.

So if we use Caesar encryption on the word "EAT" with -3 as our key, we end up with "BXQ".

1.

Create a variable consisting of alphabet. 

Also create your word to be encrypted. (or take it by prompt)

2.

Create a function that takes two parameter; word and number (key).

> HINT:

> Create nested for loops.

> Expected result example : “Hello World” should return “mjqqt btwqi”

## EXTRA:
Make a decription function for encrypted words.