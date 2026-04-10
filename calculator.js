function add(a,b) {
  return a + b;
}
function substract(a,b) {
  return a - b;
}
function multiply(a,b) {
  return a * b;
}
function divide(a,b) {
  let dff = a / b;
  return Math.round(dff * 100) / 100;
}
function operate(numOne,operator,numTwo) {
  if (operator == "+") {
    return add(numOne,numTwo);
  }
  else if (operator == "-") {
    return substract(numOne,numTwo);
  }
  else if (operator == "*") {
    return multiply(numOne,numTwo);
  }
  else {
    return divide(numOne,numTwo);
  }
}

function displayCalculation(num) {
  let input = document.querySelector("input");
  input.value = num;
}
function storeValues(value) {
  if (operatorArr.length === 0) {
    numOne += value;
    displayCalculation(numOne);
  }
  else if (operatorArr.length !== 0) {
    numTwo += value;
    displayCalculation(numTwo);
  }
}
function calculation(n) {
  operatorArr.push(n);
  if (operatorArr.length === 2) {
    if (numTwo !== "0") {
      numOne = operate(Number(numOne),operatorArr[0],Number(numTwo));
      numTwo = '';
      displayCalculation(numOne);
      if (operatorArr[1] !== "=") {
        let temp = operatorArr[1];
        operatorArr.length = 0;
        operatorArr.push(temp);
      }
      else{
        operatorArr.length = 0;
      }
    }
    else {
      alert("Don't divide by zero!");
    }
  }
}
function clearDisplay() {
    numOne = '';
    numTwo = '';
    operatorArr.length = 0;
    let input = document.querySelector("input");
    input.value = '';
}
let numOne = '';
let numTwo = '';
let operatorArr = [];
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.id) {
      case "zero":
        storeValues("0");
        break;
      case "one":
        storeValues("1");
        break;
      case "two":
        storeValues("2");
        break;
      case "three":
        storeValues("3");
        break;
      case "four":
        storeValues("4");
        break;
      case "five":
        storeValues("5");
        break;
      case "six":
        storeValues("6");
        break;
      case "seven":
        storeValues("7");
        break;
      case "eight":
        storeValues("8");
        break;
      case "nine":
        storeValues("9");
        break;
      case "equal":
        calculation("=");
        break;
      case "minus":
        calculation("-");
        break;
      case "x":
        calculation("*");
        break;
      case "/":
        calculation("/");
        break;
      case "plus":
        calculation("+");
        break;
      case "clear":
        clearDisplay();
        break;
    }
  });
});
