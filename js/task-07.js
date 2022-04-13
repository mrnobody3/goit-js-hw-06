const rangeController = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

rangeController.addEventListener("change", onRangeChange);

function onRangeChange(event) {
  const fontSiz = event.currentTarget.value;
  textEl.style.fontSize = `${fontSiz}px`;
}
