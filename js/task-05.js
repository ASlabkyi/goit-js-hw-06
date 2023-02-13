const formInputEl = document.querySelector("#name-input");
const userNameOutputEl = document.querySelector("#name-output");

formInputEl.addEventListener("input", (event) => {
  if (!event.target.value.trim()) {
    return (userNameOutputEl.textContent = "Anonymous");
  }
  userNameOutputEl.textContent = event.target.value.trim();
});
