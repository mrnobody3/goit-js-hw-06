const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputText.addEventListener("input", onInputChange);

function onInputChange(event) {
  outputText.textContent = event.currentTarget.value;
  if (!outputText.textContent) {
    inputText.dataset.state = "";
    return (outputText.innerHTML = "Anonymous");
  }
}
