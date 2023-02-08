const listEl = document.querySelector("#categories");
const itemsEl = [...listEl.children];

console.log(`Number of categories: ${itemsEl.length}`);

  itemsEl.forEach((item) => {
    console.log(item.firstElementChild.innerText);
    console.log(`Elements: ${[...item.lastElementChild.children].length}`);
  });