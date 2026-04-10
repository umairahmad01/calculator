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
function storeValues (num) {
  arr.push(num);
  if (arr.includes("+")) {
    let newArr = arr.slice(0,arr.indexOf("+"));
    numOne = newArr.join("");
    console.log("ONE: ",numOne);
    secondValue("+");
  }
}

function secondValue(value) {
  operator = value;
  console.log(operator);
  if (arr.includes("=")) {
      let newArr = arr.slice(arr.indexOf(value) + 1,arr.indexOf("="));
      numTwo = newArr.join("");
      console.log("TWO: ",numTwo);
      console.log(operate((+numOne),operator,(+numTwo)));
      

  }
}
let numOne = '';
let numTwo = '';
let operator = '';
let arr = [];
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.id) {
      case "one":
        storeValues("1");
        break;
      case "two":
        storeValues("2");
        break;
      case "plus":
        storeValues("+");
        break;
      
      case "equal":
        storeValues("=");
        break;
    }
  });
});
