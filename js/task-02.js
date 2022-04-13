const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingArr = ingredients.map((item) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = item;
  console.log(liEl);
  return liEl;
});
console.log(ingArr);

const ingrMain = document.querySelector("#ingredients");
ingrMain.append(...ingArr);
