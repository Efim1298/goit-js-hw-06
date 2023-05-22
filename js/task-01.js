const numCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numCategories.length}`);

numCategories.forEach((elem) => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
});
