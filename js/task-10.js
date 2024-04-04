function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const number = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("#boxes");
let boxSize = 30;

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const divSize = boxSize + 10;
    const divBox = document.createElement("div");
    divBox.style.width = `${divSize}px`;
    divBox.style.height = `${divSize}px`;
    divBox.style.marginBottom = "10px";
    divBox.style.backgroundColor = getRandomHexColor();
    divBoxes.append(divBox);
    boxSize = divSize;
  }
}

btnCreate.addEventListener("click", () => {
  const amount = number.value;
  createBoxes(amount);
});

function destroyBoxes() {
  divBoxes.remove();
}

btnDestroy.addEventListener("click", destroyBoxes);
