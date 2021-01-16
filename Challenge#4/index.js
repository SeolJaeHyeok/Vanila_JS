const select = document.querySelector(".js-country");
const COUNTRY_LS = "country";

function saveCoutry(text) {
  localStorage.setItem(COUNTRY_LS, text);
}

function handleSelect(event) {
  event.preventDefault();
  const {
    target: { value },
  } = event;
  saveCoutry(value);
}

function paintCoutry(text) {
  for (let i = 0; i < select.length; i++) {
    if (select[i].value === text) {
      select[i].selected = true;
    }
  }
}

function loadCountry() {
  const currentValue = localStorage.getItem(COUNTRY_LS);
  if (currentValue !== null) {
    paintCoutry(currentValue);
  }
}

function init() {
  loadCountry();
  select.addEventListener("change", handleSelect);
}

init();
