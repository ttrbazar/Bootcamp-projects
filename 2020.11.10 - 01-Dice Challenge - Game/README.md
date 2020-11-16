# DICE CHALLENGE

## Purpose: To practice DOM

We willl create a dice game using our DOM knowledge. When you press the button, dice rolls randomly and generate a winner (or draw).

## 1. 

First create a random number generator function. It genereate 1-6 each time randomly. 

## 2.

Create a variable startButton to select button by using id. 

Create two variables dice1 and dice2  to select dice img elements by using their id. 

## 3.

Assign startButton clicking expression to an empty arrow function.

This function will run whenever the button is clicked.

Hint: use .onclick .

## 4.

Inside this function ;

Create variables randomNum1 and randomNum2 for each dice. And call random number function.

## 5.

Change dice image element source by using .src expression. Use randomNum variables to assign img sources.

## 6.

Refresh your page and see your dices are changing when you are clicking the button.

## 7.

Now your game is ready to play but there is no result, who is winner. Make an if else statement for randomNum variables compare.

## 8.

If randomNum1 greater than randomNum2 ; change h1 element to” Play 1 Wins!!!”

There is only one h1 element in our index.html. So, select h1 element by “querySelector” and use .innerHTML to assign new value.

## 9.

Make same thing for other option (if randomNum2 greater than randomNum1). 

Also don’t forget draw option.

## 10.

Refresh your page and see your dices and h1 element is changing when you are clicking the button.


## 11. CHALLENGE

Make winner Player Name (under the dice) bold and red. 

You can add a class by using DOM methods to the winner <p> element. Each term don’t forget to remove this class if other user is winner.
