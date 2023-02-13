const formInputEl = document.querySelector("#name-input");
const userNameOutputEl = document.querySelector("#name-output");

formInputEl.addEventListener("input", (event) => {
  if (!event.target.value.trim()) {
    userNameOutputEl.textContent = "Anonymous";
  } else {
    userNameOutputEl.textContent = event.target.value.trim();
  }
});
