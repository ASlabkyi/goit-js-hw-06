const listEl = document.querySelector("#categories");
const itemsEl = [...listEl.children];

console.log(`Number of categories: ${itemsEl.length}`);

  itemsEl.forEach((item) => {
    console.log(item.firstElementChild.textContent);
    console.log(`Elements: ${[...item.lastElementChild.children].length}`);
  });