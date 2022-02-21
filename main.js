function enableDark() {
  document.body.classList.add("dark_mode");
  localStorage.setItem("darkmode", "enabled-state");
}

function disableDark() {
  document.body.classList.remove("dark_mode");
  localStorage.setItem("darkmode", "disabled-state");
}

let buttOn = document.querySelector("#switcher");
buttOn.addEventListener("click", function () {
  locale = localStorage.getItem("darkmode");
  if (locale != "enabled-state") {
    enableDark();
  } else {
    disableDark();
  }
});

//getting LC data  keeping it enabled if present on page reload
let locale = localStorage.getItem("darkmode");
if (locale === "enabled-state") {
  enableDark();
}

let leadingBar = document.querySelector(".leading-snackbar");
let baselineBar = document.querySelector(".baseline-snackbar");
let stackedBar = document.querySelector(".stacked-snackbar");

function show(value) {
  if (value == "baseline") {
    baselineBar.classList.toggle("hidden");
    leadingBar.classList.add("hidden");
    stackedBar.classList.add("hidden");
  } else if (value == "leading") {
    leadingBar.classList.toggle("hidden");
    baselineBar.classList.add("hidden");
    stackedBar.classList.add("hidden");
  } else {
    stackedBar.classList.toggle("hidden");
    baselineBar.classList.add("hidden");
    leadingBar.classList.add("hidden");
  }
  setTimeout(() => {
    baselineBar.classList.add("hidden");
    leadingBar.classList.add("hidden");
    stackedBar.classList.add("hidden");
  }, 2000);
}

const modal = document.querySelector(".modal-box");
const demo = document.querySelector(".demo");

let cancleBtn = document.querySelector(".cancle");

demo.addEventListener("click", () => {
  modal.style.position = "fixed";
});
cancleBtn.addEventListener("click", () => {
  modal.style.position = "static";
});
