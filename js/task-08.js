const fomrEl = document.querySelector(".login-form");

fomrEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { password, email },
  } = event.currentTarget;
  const data = {};

  if (password.value === "" || email.value === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    data.email = email.value;
    data.password = password.value;
    console.log(data);
  }
  event.currentTarget.reset();
}
