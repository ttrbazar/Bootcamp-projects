# TEAM SELECTOR

As a NBA fan, you love playing games on internet with your own team.

In this project, you’ll use JavaScript to randomly create a team based on given players. We’ll keep running it until we’re satisfied with the created team!

---
1.
Start by creating an empty team object.

---
2.
Add a _positions property to your team object and set its value to an empty object. This property will ultimately contain a mapping between each position and the players available to get in that position.

---
3.
Create at least three properties inside the _positions object called centers, forwards, and guards. Each one of these should initialize to an empty array.

---
4.
Create getter and setter methods for the centers, forwards, and guards properties.

---
5.
Inside your team object, create an empty getter method for the _positions property.

---
6.
Inside the positions getter method, return an object that contains key/value pairs for centers, forwards, and guards.

Hint

Return an object with properties for centers, forwards, and guards. 

---
7.
Inside the team object, we are going to create a method called .addPlayerToPosition() which will be used to add a new player to the specified position on the team.

The method should take in three parameters: the positionName, the playerName, and the playerPoint.

---
8.
The .addPlayerToPosition() method should create an object called player which has a name and point which it gets from the parameters.

The method should then push this player object into the appropriate array in your team‘s _positions object based on what positionName was passed in.

---
9.
Now, we’re going to need another function which will allow us to get a random player from a position on the team, which will be necessary for generating a random team.

Create a method inside the team object called .getRandomPlayerFromPosition(). It will take in one parameter which is the positionName.

---
10.
There are a few steps in getting the .getRandomPlayerFromPosition() to work.
1. Retrieve the array of the given position’s players from the team‘s _positions object and store in a variable called players.
2. Generate a random index by multiplying Math.random() by the length of the players array (This will guarantee that the random number will be between 0 and the length of the array)
3. Round that generated number to a whole number by using Math.floor() on the result.
4. Return the player located at that index in players.

---
11.
Now that we have a way to get a random player from a position, we can create a .generateRandomTeam() function which will automatically generate a three-position team for us. The function doesn’t need to take any parameters.

1. The function should create a center variable which should be the result of calling the .getRandomPlayerFromPosition() method when we pass in a center string to it.
2. Create a forward variable and guard variable the same way you created the center variable, but make sure to pass in the right position type.
3. Calculates the average point and returns a string that contains the name of each of the players and the average point of the team, formatted as you like.

---
12.
Now that we’ve finished our team, object, let’s use it to create a team by adding some centers, forwards, and guards with the .addPlayerToPosition() function. Add at least 5 players to each position (or more if you like!).

Hint
```
team.addPlayerToPosition('center', Bam Adebayo', 6.25);
```

---
13.
Once your team has items inside it, generate a team by using the .generateRandomTeam() function on your team, and save it to a variable called team. Lastly, print out your team variable to see what team was generated for you.

Hint
```
let selectedTeam = team.generateRandomTeam();
console.log(selectedTeam);
```