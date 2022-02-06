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
}
