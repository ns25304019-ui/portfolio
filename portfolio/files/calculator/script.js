const inputBox = document.querySelector(".Box");
const buttons = document.querySelectorAll(".btn button");

// Handle button clicks
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      inputBox.value = "";
    } else if (value === "=") {
      calculate();
    } else {
      inputBox.value += value;
    }
  });
});

// Handle Enter key
inputBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    calculate();
  }
});

// Calculation function
function calculate() {
  try {
    let expression = inputBox.value.replace(/x/g, "*").replace(/%/g, "/100");
    inputBox.value = eval(expression);
  } catch {
    inputBox.value = "Error";
  }
}