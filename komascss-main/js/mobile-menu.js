const menuToggle = document.getElementById("menu-toggle");
const closeButton = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

closeButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
