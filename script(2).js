function addition() {
  let num1 = Number(document.getElementById("num-1").value);
  let num2 = Number(document.getElementById("num-2").value);
  let display = document.getElementById("display");
  if (num1 == "" || num2 == "") {
    display.innerHTML = "Please enter value";
  } else {
    let result = num1 + num2;
    display.innerHTML = result;
  }
}
function subtraction() {
  let num1 = Number(document.getElementById("num-1").value);
  let num2 = Number(document.getElementById("num-2").value);
  let display = document.getElementById("display");
  if (num1 == "" || num2 == "") {
    display.innerHTML = "Please enter value";
  } else {
    let result = num1 - num2;
    display.innerHTML = result;
  }
}
function multiplication() {
  let num1 = Number(document.getElementById("num-1").value);
  let num2 = Number(document.getElementById("num-2").value);
  let display = document.getElementById("display");
  if (num1 == "" || num2 == "") {
    display.innerHTML = "Please enter value";
  } else {
    let result = num1 * num2;
    display.innerHTML = result;
  }
}
function division() {
  let num1 = Number(document.getElementById("num-1").value);
  let num2 = Number(document.getElementById("num-2").value);
  let display = document.getElementById("display");
  if (num2 === 0) {
    display.innerHTML = "Cannot divide by zero";
  } else {
    let result = num1 / num2;
    display.innerHTML = result;
  }
}
