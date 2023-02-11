const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (event) => {
  inputEl.classList.remove("valid", "invalid");
  
  if (event.currentTarget.value.trim().length !== 6) {
    inputEl.classList.add('invalid');
  } else {
    inputEl.classList.add('valid');
  }
});