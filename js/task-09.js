function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector("body");
const backgroundColorName = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

function changeColor() {
  const newColor = getRandomHexColor();
  bodyColor.style.backgroundColor = newColor;
  backgroundColorName.textContent = newColor;
}

btnChangeColor.addEventListener("click", changeColor);
