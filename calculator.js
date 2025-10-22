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
let list = []; 
const body = document.querySelector("body");
const display = document.createElement("div");
body.appendChild(display);
const digitZero = document.querySelector(".zero");
const digitOne = document.querySelector(".one");
const digitTwo = document.querySelector(".two");
const digitThree = document.querySelector(".three");
const digitFour = document.querySelector(".four");
const digitFive = document.querySelector(".five");
const digitSix = document.querySelector(".six");
const digitSeven = document.querySelector(".seven");
const digitEight = document.querySelector(".eight");
const digitNine = document.querySelector(".nine");
digitZero.addEventListener("click",function() {
  display.textContent = "0";
  list.push(0); 
});
digitOne.addEventListener("click",function() {
  display.textContent =  "1";
  list.push(1); 
});

digitTwo.addEventListener("click",function() {
  display.textContent =  "2";
  list.push(2); 
});

digitThree.addEventListener("click",function() {
  display.textContent =  "3";
  list.push(3); 
});

digitFour.addEventListener("click", function() {
  display.textContent = "4"
  list.push(4);
})
digitFive.addEventListener("click",function() {
  display.textContent =  "5";
  list.push(5); 
});
digitSix.addEventListener("click",function() {
  display.textContent =  "6";
  list.push(6);
});
digitSeven.addEventListener("click",function() {
  display.textContent =  "7";
  list.push(7);
});
digitEight.addEventListener("click",function() {
  display.textContent =  "8";
  list.push(8);
});
digitNine.addEventListener("click",function() {
  display.textContent =  "9";
  list.push(9);
});
const plus = document.querySelector(".plus");
plus.addEventListener("click", function() {
  display.textContent =  "+";
  list.push("+");
});
const minus = document.querySelector(".minus");
minus.addEventListener("click", function() {
  display.textContent =  "-";
  list.push("-");
});
const x = document.querySelector(".x");
x.addEventListener("click", function() {
  display.textContent =  "*";
  list.push("*");
});
const division = document.querySelector(".divide");
division.addEventListener("click", function() {
  display.textContent =  "/";
  list.push("/");
});
const equal = document.querySelector(".equal");
equal.addEventListener("click",function() {
  console.log(list);
  let result = 0;
  result = operate(list[0],list[1],list[2]); 
  display.textContent = `${result}`;
  if (list.length >= 4) {
    display.textContent = `${operate(result,list[3],list[4])}`;
  }
});
const clear = document.querySelector(".clear");
clear.addEventListener("click",function() {
  list = []; 
  display.textContent = " ";
});
