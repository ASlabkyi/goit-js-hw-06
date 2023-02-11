function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const bodyEl = document.querySelector('body')
const textColorEl = document.querySelector('.color')
const colorChangeBtnEl = document.querySelector('.change-color')

colorChangeBtnEl.addEventListener('click', () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  textColorEl.textContent = getRandomHexColor();
})