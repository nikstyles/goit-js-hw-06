const allCategoriesEl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${allCategoriesEl.length}`);

for (const li of allCategoriesEl) {
  const titleTextEl = li.querySelector("h2").textContent;
  const quantityEl = li.querySelectorAll("li").length;
  console.log(`Category:${titleTextEl}`);
  console.log(`Elements:${quantityEl}`);
}
