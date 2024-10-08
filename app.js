const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const mobileLinks = document.querySelector(".header__navbar__mobile")

menuIcon.addEventListener("click", () => {
  mobileLinks.classList.add("visible");
});

closeIcon.addEventListener("click", () => {
  mobileLinks.classList.remove("visible");
});
