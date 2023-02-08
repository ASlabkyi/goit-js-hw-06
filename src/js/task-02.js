const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector('ul#ingredients')
const result = []

ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingredient;
  result.push(itemEl);
});

listEl.append(...result)