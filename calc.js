const buttons = document.querySelectorAll(".numbers button");

const display = document.querySelector(".calc-display");
const operations = document.querySelectorAll(".operations button");
const parentheses = document.querySelectorAll(".parentheses button");
const other = document.querySelectorAll(".other-math button");
const equally = document.querySelector(".equally");
const history = document.querySelector(".history");

const quallyFunc = () => {
  const p = document.createElement("p");
  const bugFix = display.value.length;

  p.innerHTML = display.value;
  display.value = evil(display.value);

  if (bugFix === 7 && display.value === "0.09999999999999998") {
    display.value = Math.ceil(display.value * 100) / 100;
  }

  p.innerHTML += ` = ${evil(display.value)}`;
  history.insertBefore(p, history.firstChild);

  if (history.children.length > 5) {
    history.lastChild.remove();
  }

  if (display.value === "Infinity" || display.value === "-Infinity") {
    display.value = 0;
    p.innerHTML = `JS cant calc more :( `;
    history.insertBefore(p, history.firstChild);

    if (history.children.length > 5) {
      history.lastChild.remove();
    }
  }
};

const fixNaN = q => {
  if (isNaN(display.value)) {
    const p = document.createElement("p");
    p.innerHTML = "Error! Not a math";
    history.insertBefore(p, history.firstChild);
    display.value = "0";
  } else {
    const p = document.createElement("p");
    p.innerHTML += `√${q} =  ${display.value}`;
    history.insertBefore(p, history.firstChild);
  }
};

const evil = fn => {
  return new Function("return " + fn)();
};

const numbersAdd = event => {
  const item = event.target;

  if (
    item.innerHTML === "0" &&
    display.value[0] === "0" &&
    display.value.length === 1
  ) {
    return false;
  } else if (display.value[0] === "0" && display.value.length === 1) {
    display.value = "";
    display.value += item.innerHTML;
  } else {
    display.value += item.innerHTML;
  }

  if (display.value.length > 10) {
    display.classList.add("long");
  } else {
    display.classList.remove("long");
  }
};

buttons.forEach(number => {
  number.onclick = numbersAdd;
});

const operatorsAdd = event => {
  const item = event.target;
  const value = display.value.slice(-1);

  if (value === "+" || value === "-" || value === "*" || value === "/") {
    return false;
  } else {
    display.value += item.innerHTML;
  }
};

operations.forEach(operator => {
  operator.onclick = operatorsAdd;
});

const parenthesesAddleft = event => {
  const item = event.target;
  const value = display.value.slice(-1);

  if (
    value === "+" ||
    value === "-" ||
    value === "*" ||
    value === "/" ||
    value === item.innerHTML
  ) {
    display.value += item.innerHTML;
  } else {
    return false;
  }
};

const parenthesesAddRight = event => {
  const item = event.target;
  const value = display.value.slice(-1);

  if (
    value === "+" ||
    value === "-" ||
    value === "*" ||
    value === "/" ||

    display.value.length < 2
  ) {
    return false;
  } else {
    display.value += item.innerHTML;
  }
};

parentheses[0].onclick = parenthesesAddleft;
parentheses[1].onclick = parenthesesAddRight;

equally.onclick = () => {
  quallyFunc();
};

//%

other[4].onclick = () => {
  let firstNumber;
  let secondNumber;
  let operat;
  let val = display.value.length;

  if (display.value.indexOf("+")) {
    firstNumber = display.value.slice(0, display.value.indexOf("+"));
    secondNumber = display.value.slice(display.value.indexOf("+") - (val - 1));

    operat = "+";
  }

  if (display.value.indexOf("+") === -1) {
    firstNumber = display.value.slice(0, display.value.indexOf("-"));
    secondNumber = display.value.slice(display.value.indexOf("-") - (val - 1));

    operat = "-";
  }

  const interest = (firstNumber / 100) * secondNumber;

  display.value = `${firstNumber}${operat}${interest}`;

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    const p = document.createElement("p");
    p.innerHTML = "Error! Not a math";
    history.insertBefore(p, history.firstChild);
    display.value = "0";
  }

  if (history.children.length > 5) {
    history.lastChild.remove();
  }

  if (display.value.length > 10) {
    display.classList.add("long");
  } else {
    display.classList.remove("long");
  }
};

//Math.sqrt(x)

other[3].onclick = () => {
  const q = display.value;
  display.value = Math.sqrt(display.value);

  fixNaN(q);

  if (history.children.length > 5) {
    history.lastChild.remove();
  }

  if (display.value.length > 10) {
    display.classList.add("long");
  } else {
    display.classList.remove("long");
  }
};

//backspace
other[2].onclick = () => {
  if (display.value.length !== 1) {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = "0";
  }
};

//C

other[1].onclick = () => {
  display.value = "0";
  display.classList.remove("long");
};

//.

other[0].onclick = event => {
  const item = event.target;
  const value = display.value.slice(-1);

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
    display.value += item.innerHTML;
  }
};
