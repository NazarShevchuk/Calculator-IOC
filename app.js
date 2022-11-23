let a = ""; // first number
let b = ""; // second number
let sign = ""; // знак опереції
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "X", "/"];

// екран

const out = document.querySelector(".calc-screen p");

function clearAll() {
  a = ""; // first number and result
  b = ""; // second number
  sign = ""; // znak
  finish = false;
  out.textContent = 0;
}

document.querySelector(".ac").onClick = clearAll;
