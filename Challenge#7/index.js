const calculator = document.querySelector(".calculator");
const result = calculator.querySelector(".result");
const reset = calculator.querySelector(".reset");
const equal = calculator.querySelector(".equal");
const numbers = calculator.querySelectorAll(".number");
const operators = calculator.querySelectorAll(".operator");

let firstValue = "",
  secondValue = "",
  firstDone,
  secondDone,
  currentOperation;

function resetAll() {
  result.innerHTML = "0";
  firstValue = "";
  secondValue = "";
  firstDone = false;
  secondDone = false;
  currentOperator = null;
}

function getValue() {
  const parsedFirst = parseInt(firstValue, 10);
  const parsedSecond = parseInt(secondValue, 10);
  switch (currentOperator) {
    case "+":
      return parsedFirst + parsedSecond;
    case "-":
      return parsedFirst - parsedSecond;
    case "*":
      return parsedFirst * parsedSecond;
    case "/":
      return parsedFirst / parsedSecond;
    default:
      return;
  }
}

function getResult() {
  const finalResult = getValue();
  result.innerHTML = finalResult;
  firstValue = finalResult;
  secondValue = "";
  secondDone = false;
}

function handleNumber(event) {
  const clickedNum = event.target.innerText;
  if (!firstDone) {
    firstValue = firstValue + clickedNum;
    result.innerHTML = firstValue;
  } else {
    secondValue = secondValue + clickedNum;
    result.innerHTML = secondValue;
    secondDone = true;
  }
}

function handleOperation(event) {
  const clickedOperator = event.target.innerText;
  if (!firstDone) {
    firstDone = true;
  }
  if (firstDone && secondDone) {
    getResult();
  }
  currentOperator = clickedOperator;
}

function handleEqual() {
  if (firstDone && secondDone) {
    getResult();
  }
}

resetAll();
reset.addEventListener("click", resetAll);
numbers.forEach(function (num) {
  num.addEventListener("click", handleNumber);
});
operators.forEach(function (op) {
  op.addEventListener("click", handleOperation);
});
equal.addEventListener("click", handleEqual);
