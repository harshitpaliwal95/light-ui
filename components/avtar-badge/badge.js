let hideBadgeBtn = document.querySelector(".hide-bage-btn");
let removeBadge = document.querySelector(".badge-hide");

hideBadgeBtn.addEventListener("click", () => {
  removeBadge.classList.toggle("hidden");
});
