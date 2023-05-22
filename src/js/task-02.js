const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsList = document.querySelector("#ingredients");
const ingredientsNewArr = [];

ingredients.forEach((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.className = "item";
  ingredientsNewArr.push(item);
});

ingredientsList.append(...ingredientsNewArr);
