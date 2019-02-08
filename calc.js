const buttons = document.querySelectorAll(".numbers button");
const display = document.querySelector(".calc-display");
const operations = document.querySelectorAll(".operations button");
const parentheses = document.querySelectorAll(".parentheses button");
const other = document.querySelectorAll(".other-math button");
const equally = document.querySelector(".equally");
const history = document.querySelector(".history");
const advBtns = document.querySelectorAll(".advanced");

//service functions

const fixNaN = q => {
  if (isNaN(display.innerHTML)) {
    const p = document.createElement("p");
    p.innerHTML = "Error! Not a math";
    history.insertBefore(p, history.firstChild);
    display.innerHTML = "0";
  } else {
    const p = document.createElement("p");
    p.innerHTML += `√${q} =  ${display.innerHTML}`;
    history.insertBefore(p, history.firstChild);
  }
};

const evil = fn => {
  return new Function("return " + fn)(); //eval?
};

const lengthFix = (elem, style = "long", l = 10) => {
  if (elem.innerHTML.length > l) {
    elem.classList.add(style);
  } else {
    elem.classList.remove(style);
  }
};

const historyLength = () => {
  for (let i = 0; i < history.children.length; i++) {
    let item = history.children[i];
    lengthFix(item, "long-history", 15);
  }

  if (history.children.length > 5) {
    history.lastChild.remove();
  }
};

const infinityCheck = (historyLength, lengthFix = undefined, p) => {
  if (display.innerHTML === "Infinity" || display.innerHTML === "-Infinity") {
    display.innerHTML = 0;
    p.innerHTML = `JS cant calc more :( `;
    history.insertBefore(p, history.firstChild);

    historyLength();
    if (lengthFix !== undefined) {
      lengthFix(display);
    }
  }
};

// =

const quallyFunc = () => {
  const p = document.createElement("p");
  const bugFix = display.innerHTML.length;
  p.innerHTML = display.innerHTML;
  display.innerHTML = evil(display.innerHTML);

  if (bugFix === 7 && display.innerHTML === "0.09999999999999998") {
    display.innerHTML = Math.ceil(display.innerHTML * 100) / 100;
  }

  p.innerHTML += ` = ${evil(display.innerHTML)}`;
  history.insertBefore(p, history.firstChild);

  historyLength();
  infinityCheck(historyLength, undefined, p);
};

equally.onclick = () => {
  quallyFunc();
};

//<= Backcpace

const backspace = () => {
  if (display.innerHTML.length !== 1) {
    display.innerHTML = display.innerHTML.slice(0, -1);
  } else {
    display.innerHTML = "0";
  }
  lengthFix(display);
};

other[2].onclick = () => {
  backspace();
};

//[0-9]

const numbersAdd = event => {
  const item = event.target;

  if (
    item.innerHTML === "0" &&
    display.innerHTML[0] === "0" &&
    display.innerHTML.length === 1
  ) {
    return false;
  } else if (display.innerHTML[0] === "0" && display.innerHTML.length === 1) {
    display.innerHTML = "";
    display.innerHTML += item.innerHTML;
  } else {
    display.innerHTML += item.innerHTML;
  }

  lengthFix(display);
};

buttons.forEach(number => {
  number.onclick = numbersAdd;
});

//+-*/

const operatorsAdd = event => {
  const item = event.target;
  const value = display.innerHTML.slice(-1);

  if (value === "+" || value === "-" || value === "*" || value === "/") {
    return false;
  } else {
    display.innerHTML += item.innerHTML;
  }
};

operations.forEach(operator => {
  operator.onclick = operatorsAdd;
});

// (,)

const parenthesesAddleft = event => {
  const item = event.target;
  const value = display.innerHTML.slice(-1);

  if (
    value === "+" ||
    value === "-" ||
    value === "*" ||
    value === "/" ||
    value === item.innerHTML
  ) {
    display.innerHTML += item.innerHTML;
  } else {
    return false;
  }
};

const parenthesesAddRight = event => {
  const item = event.target;
  const value = display.innerHTML.slice(-1);

  if (
    value === "+" ||
    value === "-" ||
    value === "*" ||
    value === "/" ||
    display.innerHTML.length < 2
  ) {
    return false;
  } else {
    display.innerHTML += item.innerHTML;
  }
};

parentheses[0].onclick = parenthesesAddleft;
parentheses[1].onclick = parenthesesAddRight;

// %

other[4].onclick = () => {
  let firstNumber;
  let secondNumber;
  let operat;
  let val = display.innerHTML.length;

  if (display.innerHTML.indexOf("+")) {
    firstNumber = display.innerHTML.slice(0, display.innerHTML.indexOf("+"));
    secondNumber = display.innerHTML.slice(
      display.innerHTML.indexOf("+") - (val - 1)
    );

    operat = "+";
  }

  if (display.innerHTML.indexOf("+") === -1) {
    firstNumber = display.innerHTML.slice(0, display.innerHTML.indexOf("-"));
    secondNumber = display.innerHTML.slice(
      display.innerHTML.indexOf("-") - (val - 1)
    );

    operat = "-";
  }

  const interest = (firstNumber / 100) * secondNumber;

  display.innerHTML = `${firstNumber}${operat}${interest}`;

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    const p = document.createElement("p");
    p.innerHTML = "Error! Not a math";
    history.insertBefore(p, history.firstChild);
    display.innerHTML = "0";
  }

  historyLength();
  lengthFix(display);
};

//Math.sqrt(x)

other[3].onclick = () => {
  const q = display.innerHTML;
  display.innerHTML = Math.sqrt(display.innerHTML);

  fixNaN(q);
  historyLength();
  lengthFix(display);
};

//X2

advBtns[0].onclick = () => {
  display.innerHTML = display.innerHTML * display.innerHTML;

  const p = document.createElement("p");
  p.innerHTML = display.innerHTML;

  history.insertBefore(p, history.firstChild);

  historyLength();
  lengthFix(display);
  infinityCheck(historyLength, lengthFix, p);
};

//C

other[1].onclick = () => {
  display.innerHTML = "0";
  display.classList.remove("long");
};

//.

other[0].onclick = event => {
  const item = event.target;
  const value = display.innerHTML.slice(-1);

  if (
    value === "+" ||
    value === "-" ||
    value === "*" ||
    value === "/" ||
    value === "(" ||
    value === ")" ||
    value === "."
  ) {
    return false;
  } else {
    display.innerHTML += item.innerHTML;
  }
};

//Keyboard

onkeydown = event => {
  const item = event.key;
  const space = event.which;

  if (space === 32) {
    return false;
  }

  if (item === 0 || item <= 9) {
    if (
      item === 0 &&
      display.innerHTML[0] === "0" &&
      display.innerHTML.length === 1
    ) {
      return false;
    } else if (display.innerHTML[0] === "0" && display.innerHTML.length === 1) {
      display.innerHTML = "";
      display.innerHTML += item;
    } else {
      display.innerHTML += item;
    }

    lengthFix(display);
  }

  if (item === "+" || item === "-" || item === "*" || item === "/") {
    const value = display.innerHTML.slice(-1);

    if (value === "+" || value === "-" || value === "*" || value === "/") {
      return false;
    } else {
      display.innerHTML += item;
    }
  }

  if (item === "=" || item === "Enter") {
    quallyFunc();
  }

  if (item === "Backspace") {
    backspace();
  }

  if (item === ".") {
    const value = display.innerHTML.slice(-1);

    if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/" ||
      value === "(" ||
      value === ")" ||
      value === "."
    ) {
      return false;
    } else {
      display.innerHTML += item;
    }
  }

  if (item === "(") {
    const value = display.innerHTML.slice(-1);

    if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/" ||
      value === item
    ) {
      display.innerHTML += item;
    } else {
      return false;
    }
  }

  if (item === ")") {
    const value = display.innerHTML.slice(-1);

    if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/" ||
      display.innerHTML.length < 2
    ) {
      return false;
    } else {
      display.innerHTML += item;
    }
  }
};
