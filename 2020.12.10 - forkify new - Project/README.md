# FORKIFY

Using your javascript knowledge you will build a recipe page.

Attention! You should start your index.html from local server. Try Visual Studio Code’s “Live Server” extention.  

Go to the page https://forkify-api.herokuapp.com/v2 and read explanations first.

## Add API Information
## 1.
Save the API Key you obtained from the website to const apiKey.

## 2.
Create a const called url, save the given url as value.

Get Data from Forkify 

## 3.
Create getRecipes() as an asynchronous function that will return a Promise.

## 4.
Inside of that function, add a const called recipeInput. Save the value from the user’s input field.

## 5.
Add a const called urlToFetch. This string will contain the combined text of the entire request. Look at the documentation of Forkify App.

## 6.
Add try/catch statements with empty code blocks. In the catch code block, log the error to the console.

## 7.
In the try code block, use fetch() to send a GET request to urlToFetch. await the response and save it to a variable called response using the const keyword.

## 8.
Create a conditional statement that checks if the ok property of the response object evaluates to a truthy value.

## 9.
Convert the response object to a JSON object. await the resolution of this method and save it to a variable called jsonResponse using the const keyword.

Log jsonResponse to the console.

## 10.
Create a click event handler to the search button, call the function. Enter a recipe in the browser and see what is logged! Explore the object!

## 11.
Send recipes array to the renderResults function.

## 12.
You can find renderResults function in the searchView.js file. It is empty. 

Repair function to see the search results in to the results section of the index.html. Show at least below data in the page:
- the recipe image
- the recipe title
- the recipe publisher

## NOTE: Take index.html as a template. Do not change classnames.
- Do not forget to connect your script files and functions with import and export.

## Show Selected Recipe
## 13.
Create getOneRecipe() as an asynchronous function. Add try/catch blocks inside. Log the error inside the catch block.

## 14.
Before the try code block, create a const called urlToFetch to make a request with spesific id of selected recipe.

## 15.
Inside of the try block, await the response of calling fetch() and passing it the URL you created in a previous step. Save the response to a variable response using the const keyword.

## 16.
Create a conditional statement that checks the ok property of the response object. If this evaluates to a truthy value, await the response of calling .json() on the response object. Save the resolution of this Promise to a variable called jsonResponse using the const keyword.

## 17.
Log jsonResponse to the console. Explore object.

Create a click event handler for selected recipe, call the function. Enter a city in the browser and see what is logged! Explore the object!

## 18.
Send recipe to the showRecipe function.

## 19.
You can find showRecipe function in the recipeView.js file. It is empty. 

Repair function to see the selected recipe in to the “recipe” section of the index.html. 

NOTE: Take index.html as a template. Do not change classnames.

## Shopping List
## 20.
If you take the correct format of index.html; you wil see a “Add To Shopping List” button. By using this button, add your recipes to the shopping list at the right of the page.

## 21.
To do that you have to create a click event handler in your index.js and also create an addShoppingList function in your listView.js file. 

Complete!

## 22.
Congratulations! You made your page working but somethins missing.

When you click another recipe on the search results part, it adds under the first item of the main page. So every time just keep one recipe on the main page.

## 23.
When you click “Add To Shopping List” button again and again your recipe duplicates. Stop this duplication. 

## 24.
When you want to see a recipe from your shopping list, you can click on the item and see recipe at the main page.

## 25.
Make delete button on the rigth corner of all recipes (in the shopping list) functional.

## 26.
When you search for another recipe, first clear the results part.

## Challange!

## 22.
If you want some more job to do.

On the search results part, Show only 10 of the results.

## 23.
Some recipe titles are very long, shorten them in your results page.
