const counterObj = {
  counterValue: 0,

  decrement() {
    this.counterValue -= 1;
  },
  increment() {
    this.counterValue += 1;
  },
  onShowValue() {
    valueEl.textContent = counterObj.counterValue;
  },
};

const buttonDecrement = document.querySelector(
  "button[data-action='decrement']"
);
const buttonIncrement = document.querySelector(
  "button[data-action='increment']"
);
// console.log(buttonIncrement);
// console.log(buttonDecrement);
const valueEl = document.querySelector("#value");

buttonDecrement.addEventListener("click", () => {
  counterObj.decrement();
  counterObj.onShowValue();
});
buttonIncrement.addEventListener("click", () => {
  counterObj.increment();
  counterObj.onShowValue();
});
