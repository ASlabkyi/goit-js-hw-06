function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector("#controls");
const btnsEl = document.querySelectorAll("button[type='button']");
const boxesContainerEl = document.querySelector("#boxes");

const createBoxes = (amount) => {
  amount = controlsEl.firstElementChild.value;

  for (let i = 0; i < amount; i += 1) {
    const newBoxes = document.createElement("div");

    newBoxes.style.width = 30 + i * 10 + "px";
    newBoxes.style.height = 30 + i * 10 + "px";
    newBoxes.style.backgroundColor = getRandomHexColor();

    boxesContainerEl.insertAdjacentElement("beforeend", newBoxes);
  }
  
};

const destroyBoxes = () => {
  boxesContainerEl.innerHTML = "";
  controlsEl.firstElementChild.value = ''
};

btnsEl[0].addEventListener("click", createBoxes);
btnsEl[1].addEventListener("click", destroyBoxes);
