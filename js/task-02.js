const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const liEl = document.querySelector("#ingredients");

const elements = [];

ingredients.forEach(function (item) {
  const liItemEl = document.createElement("li");
  liItemEl.classList.add("item");
  liItemEl.textContent = item;
  elements.push(liItemEl);
});

liEl.append(...elements);
