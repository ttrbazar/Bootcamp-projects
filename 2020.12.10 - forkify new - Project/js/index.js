import { renderRecipeList } from "./searchView.js";
import { showRecipe } from "./recipeView.js";

const apiKey = "98d8a9fa-1b86-49ed-ad7f-e4e8550c8c80";
const url = "https://forkify-api.herokuapp.com/api/v2/recipes";

// Page Elements
const input = document.querySelector('.search__field');
const submitBtn = document.querySelector('.search__btn');


// Add AJAX functions here:
const getRecipe = async event => {
    const recipeInput = input.value;
    const urlToFetch = url + "?search=" + recipeInput + "&key=" + apiKey;

    try {
        const fetchResponse = await fetch(urlToFetch);
        // console.log(fetchResponse);
        if (fetchResponse.ok) {
            const jsonResponse = await fetchResponse.json();
            // console.log(jsonResponse);
            renderRecipeList(jsonResponse.data.recipes);
        } else {
            throw new Error("Request failed!");
        }
    } catch (err) {
        console.log(err);
    }
}


export const getOneRecipe = async event => {
    const urlToFetch = url + "/" + event.currentTarget.id + "?key=" + apiKey;

    try {
        const fetchResponse = await fetch(urlToFetch);
        if (fetchResponse.ok) {
            const jsonResponse = await fetchResponse.json();
            showRecipe(jsonResponse);
        } else {
            throw new Error("Request failed!");
        }
    } catch (err) {
        console.log(err);
    }
}

submitBtn.addEventListener("click", getRecipe);
