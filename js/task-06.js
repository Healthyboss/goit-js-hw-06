const textInput = document.querySelector("#validation-input");
const requiredLength = parseInt(textInput.getAttribute("data-length"));

textInput.addEventListener("blur", function (event) {
  const inputValue = event.target.value;
  if (inputValue.length === requiredLength) {
    textInput.className = "valid";
  } else {
    textInput.className = "invalid";
  }
});
