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
let numThree = "";
let list = []; 
let arr = [];
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
  list.push("0"); 
});
digitOne.addEventListener("click",function() {
  display.textContent =  "1";
  list.push("1"); 
});

digitTwo.addEventListener("click",function() {
  display.textContent =  "2";
  list.push("2"); 
});

digitThree.addEventListener("click",function() {
  display.textContent =  "3";
  list.push("3"); 
});

digitFour.addEventListener("click", function() {
  display.textContent = "4"
  list.push("4");
})
digitFive.addEventListener("click",function() {
  display.textContent =  "5";
  list.push("5"); 
});
digitSix.addEventListener("click",function() {
  display.textContent =  "6";
  list.push("6");
});
digitSeven.addEventListener("click",function() {
  display.textContent =  "7";
  list.push("7");
});
digitEight.addEventListener("click",function() {
  display.textContent =  "8";
  list.push("8");
});
digitNine.addEventListener("click",function() {
  display.textContent =  "9";
  list.push("9");
});
const plus = document.querySelector(".plus");
plus.addEventListener("click", function() {
  display.textContent =  "+";
  arr.push("+");
  list.push("+");
if (arr.length > 1) {
  let numOne = "";
  let numTwo = "";
  let pointer = list.indexOf(arr[0]);
  for (let i = 0;i < pointer;i++) {
    numOne += list[i];
  }
  for (let i = (pointer + 1);i < (list.length - 1);i++) {
    numTwo += list[i];
  }
  let result = operate(Number(numOne),arr[0],Number(numTwo));
  display.textContent = `${result}`;
  numThree = result;
}
});
const minus = document.querySelector(".minus");
minus.addEventListener("click", function() {
  display.textContent =  "-";
  arr.push("-");
  list.push("-");
  if (arr.length > 1) {
    let numOne = "";
    let numTwo = "";
    let pointer = list.indexOf(arr[0]);
    for (let i = 0;i < pointer;i++) {
      numOne += list[i];
    }
    for (let i = (pointer + 1);i < (list.length - 1);i++) {
      numTwo += list[i];
    }
    let result = operate(Number(numOne),arr[0],Number(numTwo));
    display.textContent = `${result}`;
    numThree = result;
  }
});
const x = document.querySelector(".x");
x.addEventListener("click", function() {
  display.textContent =  "*";
  arr.push("*");
  list.push("*");
  if (arr.length > 1) {
    let numOne = "";
    let numTwo = "";
    let pointer = list.indexOf(arr[0]);
    for (let i = 0;i < pointer;i++) {
      numOne += list[i];
    }
    for (let i = (pointer + 1);i < (list.length - 1);i++) {
      numTwo += list[i];
    }
    let result = operate(Number(numOne),arr[0],Number(numTwo));
    display.textContent = `${result}`;
    numThree = result;
  }
});
const division = document.querySelector(".divide");
division.addEventListener("click", function() {
  display.textContent =  "/";
  arr.push("/")
  list.push("/");
  if (arr.length > 1) {
    let numOne = "";
    let numTwo = "";
    let pointer = list.indexOf(arr[0]);
    for (let i = 0;i < pointer;i++) {
      numOne += list[i];
    }
    for (let i = (pointer + 1);i < (list.length - 1);i++) {
      numTwo += list[i];
    }
    let result = operate(Number(numOne),arr[0],Number(numTwo));
    display.textContent = `${result}`;
    numThree = result;
  }
});
const equal = document.querySelector(".equal");
equal.addEventListener("click",function() {
  if(numThree == "") {
    let numOne = "";
    let numTwo = "";
    let pointer = list.indexOf(arr[0]);
    for (let i = 0;i < pointer;i++) {
      numOne += list[i];
  }
    for (let i = (pointer + 1);i < list.length;i++) {
      numTwo += list[i];
    }
    let result = operate(Number(numOne),arr[0],Number(numTwo));
    display.textContent = `${result}`;
  }
  else {
    let index = numThree.toString().length;
    let numOne = numThree;
    let numTwo = "";
    let pointer = list.indexOf(arr[1],(index + 1));
    for (let i = (pointer + 1);i < list.length;i++) {
      numTwo += list[i];
    }
    let result = operate(Number(numOne),arr[1],Number(numTwo));
    display.textContent = `${result}`;
  }
});
const clear = document.querySelector(".clear");
clear.addEventListener("click",function() {
  list = []; 
  arr = [];
  display.textContent = " ";
});
