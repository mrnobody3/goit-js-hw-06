const inputEl = document.querySelector("#validation-input");

// const atrLength = inputEl.dataset.length;
const atrLength = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", onInputChange);

function onInputChange() {
  if (inputEl.value.length !== Number(atrLength)) {
    return (inputEl.classList = "invalid");
  }
  return (inputEl.classList = "valid");
}
