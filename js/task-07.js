const rangeController = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

rangeController.addEventListener("change", onRangeChange);

function onRangeChange(event) {
  console.log(event.currentTarget.value);
}
