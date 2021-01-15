const clockContainer = document.querySelector(".clockContainer");
const remainTime = clockContainer.querySelector("h3");

function getTime() {
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const today = new Date();
  const remain = xmasDay - today;
  const seconds = Math.floor((remain / 1000) % 60);
  const minutes = Math.floor((remain / 1000 / 60) % 60);
  const hours = Math.floor((remain / (1000 * 60 * 60)) % 24);
  const days = Math.floor(remain / (1000 * 60 * 60 * 24));

  remainTime.innerText = `${days}d ${hours < 10 ? `0${hours}` : hours}h ${
    minutes < 10 ? `0${minutes}` : minutes
  }m ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
