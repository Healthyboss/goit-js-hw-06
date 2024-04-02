const counter = document.querySelector("#counter");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueVisible = document.querySelector("#value");
let counterValue = 0;

const handleclickDecrement = () => {
  counterValue--;
  valueVisible.textContent = counterValue;
};

const handleclickIncrement = () => {
  counterValue++;
  valueVisible.textContent = counterValue;
};

decrementBtn.addEventListener("click", handleclickDecrement);
incrementBtn.addEventListener("click", handleclickIncrement);
