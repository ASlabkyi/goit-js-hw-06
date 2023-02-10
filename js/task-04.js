let counterValue = 0;

const counterTextEl = document.querySelector('#value')
counterTextEl.textContent = counterValue;

const counterEl = document.querySelector('#counter')
const decBtnEl = counterEl.firstElementChild;
const incBtnEl = counterEl.lastElementChild;

decBtnEl.addEventListener('click', () => counterTextEl.textContent = counterValue -= 1)
incBtnEl.addEventListener('click', () => counterTextEl.textContent = counterValue += 1)