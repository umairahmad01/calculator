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


function storeValues(value) {
  if (operatorArr.length === 0) {
    numOne += value;
  }
  else if (operatorArr.length !== 0) {
    numTwo += value;
  }
}
function calculation(n) {
  operatorArr.push(n);
  if (operatorArr.length === 2) {
    numOne = operate(Number(numOne),operatorArr[0],Number(numTwo));
    numTwo = '';
    console.log(numOne);
    if (operatorArr[1] !== "=") {
      let temp = operatorArr[1];
      operatorArr.length = 0;
      operatorArr.push(temp);
    }
    else{
      operatorArr.length = 0;
    }
  }
}
function clearArray() {
    numOne = '';
    numTwo = '';
    operatorArr.length = 0;
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
        clearArray();
        break;
    }
  });
});
