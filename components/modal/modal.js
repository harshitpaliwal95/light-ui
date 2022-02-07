const modal = document.querySelector(".modal-box");
const demo = document.querySelector(".demo");

let cancleBtn = document.querySelector(".cancle");

demo.addEventListener("click", () => {
  modal.style.position = "fixed";
});
cancleBtn.addEventListener("click", () => {
  modal.style.position = "static";
});
