function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const controlsEl = document.querySelector("#controls > input");
const boxesEl = document.querySelector("#boxes");

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = controlsEl.value;
  let sizeBox = 20;
  for (let i = 0; i < amount; i += 1) {
    sizeBox += 10;
    boxesEl.insertAdjacentHTML(
      "beforeend",
      `<div style="background-color:${getRandomHexColor()};width: ${sizeBox}px;height: ${sizeBox}px"></div>`
    );
  }
  controlsEl.value = "";
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
  controlsEl.value = "";
}
