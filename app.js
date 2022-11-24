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

document.querySelector(".buttons").onclick = (event) => {
  // нажата  не кнопка
  if (!event.target.classList.contains("btn")) return;
  // нажата кнопка clearAll ac
  if (event.target.classList.contains("ac")) return;

  out.textContent = "";
  // получаю нажатую кнопку

  const key = event.target.textContent;

  // если нажата клавиша 0-9 .

  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a += key;

      out.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      b += key;
      out.textContent = b;
    }
    console.table(a, b, sign);
    return;
  }
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    console.table(a, b, sign);
    return;
  }

  // нажата ровно =

  if (key === "=") {
    if (b === "") b = a;
    switch (sign) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = a - b;
        break;
      case "X":
        a = a * b;
        break;
      case "/":
        if (b === "0") {
          out.textContent = "Ошибка";
          a = "";
          b = "";
          sign = "";
          return;
        }
        a = a / b;
        break;
    }
    finish = true;
    out.textContent = a;
    console.table(a, b, sign);
  }
};
