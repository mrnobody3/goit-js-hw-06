const catMain = document.querySelectorAll(".item");
console.log(`Number of categories: ${catMain.length}`);
catMain.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});

// catMain.firstChild;
// console.log(catMain.firstElementChild);

// const catItems = document.querySelector(".item");
// console.log(catItems.firstElementChild);

// console.log(`Category: ${catItems.firstElementChild}`);
