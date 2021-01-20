const subtitle = document.querySelector(".subtitle"),
  rangevalue = document.querySelector(".js-range"),
  uservalue = document.querySelector(".js-value"),
  messagebox = document.querySelector(".message"),
  playBtn = document.querySelector(".playBtn"),
  resultMessage = document.querySelector(".result");

function userNumber() {
  const range = rangevalue.value;
  subtitle.innerText = `Generate a number between 0 and ${range}`;
  return range;
}

function machineNumber() {
  const rand = Date.now() % userNumber();
  return rand;
}

function play(event) {
  event.preventDefault();
  const machineNum = machineNumber();
  messagebox.innerText = `You choose : ${uservalue.value}, the machine choose : ${machineNum}.`;
  if (parseInt(uservalue.value) === machineNum) {
    resultMessage.innerText = `You won!`;
  } else {
    resultMessage.innerText = `You lost!`;
  }
}

function init() {
  userNumber();
  machineNumber();
}

rangevalue.addEventListener("input", userNumber);
playBtn.addEventListener("click", play);

init();
