const resultDisplay = document.querySelector("#display");
let btn = "";

function buttonOutput(btn) {
  resultDisplay.value += btn;
}
function finalResult() {
  try {
    resultDisplay.value = eval(resultDisplay.value);
  } catch (error) {
    resultDisplay.value = "Error";
  }
}
function clearScreen() {
  resultDisplay.value = "";
}
function deleteLastCharacter() {
  resultDisplay.value = resultDisplay.value.slice(0, -1);
}
function reversetInteger() {}
