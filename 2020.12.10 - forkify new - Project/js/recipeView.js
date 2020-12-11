import { addShoppingList } from "./listView.js";

export const showRecipe = recipe => {
    // console.log(recipe);
    const recipeItem = recipe.data.recipe;

    const divRecipe = document.querySelector(".recipe");

    divRecipe.innerHTML = `
        <figure class="recipe__fig">
            <img src="${recipeItem.image_url}" alt="Tomato" class="recipe__img">
            <h1 class="recipe__title">
                <span>${recipeItem.title}</span>
            </h1>
        </figure>
        <div class="recipe__details">
            <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <use href="img/icons.svg#icon-stopwatch"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--minutes">${recipeItem.cooking_time}</span>
                <span class="recipe__info-text"> minutes</span>
            </div>
            <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <use href="img/icons.svg#icon-man"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--people">${recipeItem.servings}</span>
                <span class="recipe__info-text"> servings</span>

                <div class="recipe__info-buttons">
                    <button class="btn-tiny">
                        <svg>
                            <use href="img/icons.svg#icon-circle-with-minus"></use>
                        </svg>
                    </button>
                    <button class="btn-tiny">
                        <svg>
                            <use href="img/icons.svg#icon-circle-with-plus"></use>
                        </svg>
                    </button>
                </div>

            </div>
            <button class="recipe__love">
                <svg class="header__likes">
                    <use href="img/icons.svg#icon-heart-outlined"></use>
                </svg>
            </button>
        </div>

        <div class="recipe__ingredients">
            <ul class="recipe__ingredient-list">
            </ul>
            <button class="btn-small recipe__btn">
                <svg class="search__icon">
                    <use href="img/icons.svg#icon-shopping-cart"></use>
                </svg>
                <span>Add to shopping list</span>
            </button>
        </div>

        <div class="recipe__directions">
            <h2 class="heading-2">How to cook it</h2>
            <p class="recipe__directions-text">
                This recipe was carefully designed and tested by
                <span class="recipe__by">${recipeItem.publisher}</span>. Please check out directions at their website.
            </p>
            <a class="btn-small recipe__btn" href="${recipeItem.source_url}" target="_blank">
                <span>Directions</span>
                <svg class="search__icon">
                    <use href="img/icons.svg#icon-triangle-right"></use>
                </svg>

            </a>
        </div>
        `;

    recipeItem.ingredients.forEach(el => {
        const li = document.createElement("li");
        li.className = "recipe__item";
        li.innerHTML = `
            <svg class="recipe__icon">
                <use href="img/icons.svg#icon-check"></use>
            </svg>
            <div class="recipe__count">${el.quantity || ""}</div>
            <div class="recipe__ingredient">
                <span class="recipe__unit">${el.unit}</span>
                ${el.description}
            </div>
        `;
        divRecipe.querySelector(".recipe__ingredient-list").appendChild(li);
    });

    document.querySelector("button.recipe__btn").addEventListener("click", addShoppingList(recipeItem.ingredients));
};
