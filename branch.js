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
  return a / b;
}
function operate(numOne,operator,numTwo) {
  if (operator == 90) {
    return add(numOne,numTwo);
  }
  else if (operator == 80) {
    return substract(numOne,numTwo);
  }
  else if (operator == 70) {
    return multiply(numOne,numTwo);
  }
  else {
    return divide(numOne,numTwo);
  }
}
let list = {};
const body = document.querySelector("body");
const display = document.createElement("div");
body.appendChild(display);
const digitZero = document.querySelector(".zero");
const digitOne = document.querySelector(".one");
const digitTwo = document.querySelector(".two");
const digitThree = document.querySelector(".three");
const digitFour = document.querySelector(".four");
digitZero.addEventListener("click",function(e) {
  display.textContent = "0";
  list.zero = 0; 
});
digitOne.addEventListener("click",function() {
  display.textContent =  "1";
  list.one = 1;
});

const plus = document.querySelector(".plus");
plus.addEventListener("click", function() {
  display.textContent =  "+";
  list.plus = 90;
  console.log(list);
});
const equal = document.querySelector(".equal");
equal.addEventListener("click",function() {
  let arr = [];
  for (let key in list){
    let element = list[key];
    arr.push(element);
  }
  let result = operate(arr[0],arr[1],arr[2]); 
  display.textContent = `${result}`;
});
const clear = document.querySelector(".clear");
clear.addEventListener("click",function() {
  list = {};
  arr = [];
  display.textContent = " ";
})
