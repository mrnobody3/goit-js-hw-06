const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("input", () => {
  if (inputEl.value.length > 5) {
    return (inputEl.classList = "valid");
  }
  return (inputEl.classList = "invalid");
});
