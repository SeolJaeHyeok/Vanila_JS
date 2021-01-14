const body = document.querySelector("body");

function handleBgColor() {
  const width = window.innerWidth;

  if (width < 700) {
    body.style.backgroundColor = "#2980b9";
  } else if (width < 1100) {
    body.style.backgroundColor = " #8e44ad";
  } else {
    body.style.backgroundColor = "#f1c40f";
  }
}

window.addEventListener("resize", handleBgColor);
