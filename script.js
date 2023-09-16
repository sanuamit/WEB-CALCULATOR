const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

document.addEventListener("keydown", (e) => {
  const key = e.key;
  if (!isNaN(key) || specialChars.includes(key) || key === ".") {
    calculate(key);
  } else if (key === "Enter") {
    calculate("=");
  } else if (key === "Backspace") {
    calculate("DEL");
  }
});

display.addEventListener("keydown", (e) => {
  e.preventDefault();
});
