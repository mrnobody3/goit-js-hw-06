const form = document.querySelector(".login-form");
const btnSubmit = document.querySelector(".login-form > button");

console.log(btnSubmit);

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.log(event);
  const formData = new FormData(event.currentTarget);
  console.log(formData);
}
