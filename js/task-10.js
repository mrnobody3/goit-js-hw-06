function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const controlsEl = document.querySelector("#controls > input");
const boxesEl = document.querySelector("#boxes");

btnCreate.addEventListener("click", createBoxes);
controlsEl.addEventListener("change", onChangeColor);

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    boxesEl.insertAdjacentHTML(
      "beforeend",
      `<div style="background-color:${getRandomHexColor()};width: 30px;height: 30px">1</div>`
    );
  }
}

function onChangeColor(e) {
  const numberEl = e.currentTarget.value;
  return createBoxes(numberEl);
}
// console.log(createBoxes(5));
