const form = document.querySelector(".login-form");
const btnSubmit = document.querySelector(".login-form > button");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const emailEl = event.currentTarget.elements.email.value.trim();
  const passwordEl = event.currentTarget.elements.password.value.trim();

  if (!emailEl || !passwordEl) {
    form.reset();
    return alert("Give me your email and password");
  }
  form.reset();
  return console.log(`Email: ${emailEl};\nPassword: ${passwordEl}`);
}
