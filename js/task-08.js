const form = document.querySelector(".login-form");
const btnSubmit = document.querySelector(".login-form > button");

// console.log(btnSubmit);

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  // console.log(event);
  const formData = new FormData(event.currentTarget);
  // console.log(formData);
  formData.forEach((value, name) => {
    if (value && name) {
      return console.log(name, value);
    }
    return alert("Give me your email and password");
  });
  event.currentTarget.elements.email.value = "";
  event.currentTarget.elements.password.value = "";
}
