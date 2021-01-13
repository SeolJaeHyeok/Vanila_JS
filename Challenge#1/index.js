const title = document.querySelector("#title");

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
  mouseOver: title.addEventListener("mouseover", handleMouseOver),
  mouseLeave: title.addEventListener("mouseleave", handleMouseLeave),
  rightClick: window.addEventListener("contextmenu", handleRightClick),
  resize: window.addEventListener("resize", handleResize),
};

function handleMouseOver() {
  title.innerHTML = "The mouse is here!";
  title.style.color = colors[0];
}

function handleMouseLeave() {
  title.innerHTML = "The mouse is gone!";
  title.style.color = colors[1];
}

function handleRightClick() {
  title.innerHTML = "That was a right click!";
  title.style.color = colors[4];
}

function handleResize() {
  title.innerHTML = "You just resized!";
  title.style.color = colors[2];
}
