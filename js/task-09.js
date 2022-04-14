function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const color = document.querySelector(".color");
console.log(btn);

btn.addEventListener("click", onChangeColor);

function onChangeColor() {
  const colorRandom = getRandomHexColor();
  bodyEl.style.backgroundColor = colorRandom;
  color.innerHTML = colorRandom;
}
