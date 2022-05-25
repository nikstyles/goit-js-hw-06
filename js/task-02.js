const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach(function (item, index) {
  const liItemEl = document.createElement("li");
  liItemEl.classList.add("item");
  liItemEl.textContent = item;

  const liEl = document.querySelector("#ingredients");

  liEl.appendChild(liItemEl);
});
