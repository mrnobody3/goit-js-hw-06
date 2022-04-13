const counter = {
  counterValue: 0,

  decrement() {
    this.counterValue -= 1;
    // console.log(1);
  },
  increment() {
    this.counterValue += 1;
    // console.log(2);
  },
};

// let counterValue = 0;
const buttonDecrement = document.querySelector(
  "button[data-action='decrement']"
);
const buttonIncrement = document.querySelector(
  "button[data-action='increment']"
);
console.log(buttonIncrement);
console.log(buttonDecrement);
const valueEl = document.querySelector("#value");

buttonDecrement.addEventListener("click", () => {
  console.log(1);
  // console.log(counter.decrement.call(counter));
});
buttonIncrement.addEventListener("click", () => {
  // console.log(counter.increment.call(counter));
});

valueEl.textContent = counter.counterValue;
console.log(valueEl);
