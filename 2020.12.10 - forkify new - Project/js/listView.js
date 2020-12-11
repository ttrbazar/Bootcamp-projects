export function addShoppingList(ingredients) {
    return function (event) {

        const ulShoppingList = document.querySelector(".shopping__list");

        while (ulShoppingList.firstChild) {
            ulShoppingList.removeChild(ulShoppingList.firstChild);
        }

        ingredients.forEach(el => {
            const li = document.createElement("li");

            li.className = "shopping__item";
            li.innerHTML = `
                <div class="shopping__count">
                    <input type="number" value="${el.quantity}" step="100">
                    <p>${el.unit}</p>
                </div>
                <p class="shopping__description">${el.description}</p>
                <button class="shopping__delete btn-tiny">
                    <svg>
                        <use href="img/icons.svg#icon-circle-with-cross"></use>
                    </svg>
                </button>`;
            li.querySelector(".shopping__delete").addEventListener("click", e => {
                ulShoppingList.removeChild(e.currentTarget.parentElement);
            });
            ulShoppingList.appendChild(li);
        });
    };
}