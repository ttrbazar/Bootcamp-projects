# Fibonacci Generator

The Fibonacci Sequence is the series of numbers:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

The next number is found by adding up the two numbers before it:
- the 2 is found by adding the two numbers before it (1+1),
- the 3 is found by adding the two numbers before it (1+2),
- the 5 is (2+3),
- and so on!

Example: the next number in the sequence above is 21+34 = 55

It is that simple!

Here is a longer list:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, ...

Can you figure out the next few numbers?


1. First, create a function accept one parameter; for how many Fibonacci numbers you will create for each time.

Example;

fibonacciGen(6) = [0, 1, 1, 2, 3, 5]

2. The next number is found by adding up the two numbers before it. So, for start condition, inside function create an array has two elements. 

3. But what if the user gives “1” for argument.

Create a if statement for this situtation and give output manually.

4. For other any arguments; you need to use a “for loop” to create array according to the given argument. 

Congratulations!

Additional Step:

The Golden Ratio "φ" (symbol is the Greek letter "phi" shown at left) is a special number approximately equal to 1,618.

And here is a surprise. When we take any two successive (one after the other) Fibonacci Numbers, their ratio is very close to the Golden Ratio. The formula gives correct result after 6th number.

1. Create a function that gives the Fibonacci Number you want. Use the formula:
 
Example:

X7 = ((1,618034...)(7-1) − (1−1,618034...)(7-1) )/√5

When I used a calculator on this (only entering the Golden Ratio to 7 decimal places) I got the answer 8,00000033 , a more accurate calculation would be closer to 8

Function output : FibonacciFinder(7)=8

Good luck!
