const themeToggler = document.querySelector(".theme-btn");
const openMenuBtn = document.querySelector(".hamburger-btn");
const closeMenuBtn = document.querySelector(".close-btn");
const sideNavbarElement = document.querySelector(".side-nav");
const navigateToTop = document.querySelector(".arrow-top");
let iconstDarkMode = true;

themeToggler.addEventListener("click", () => {
  const themeImgBtn = document.querySelector(".theme-img-btn");
  const menuImgBtn = document.querySelector(".hamburger-img-btn");

  document.body.classList.toggle("dark-mode");
  document.querySelectorAll("a").forEach((item) => item.classList.toggle("text-dark-mode"));
  document.querySelectorAll("nav a").forEach((item) => item.classList.toggle("text-black"));
  document.querySelectorAll(".link-arrow").forEach((item) => item.classList.toggle("dark-mode"));
  document.querySelector(".section-4-items > h2").classList.toggle("text-dark-mode");
  document.querySelector(".section-4-items > p").classList.toggle("text-dark-mode");
  document.querySelector(".arrow-top").classList.toggle("top-dark-mode");

  if (iconstDarkMode) {
    themeImgBtn.src = "./assets/icons/wTheme.png";
    menuImgBtn.src = "./assets/icons/wMenu.png";
    iconstDarkMode = false;
  } else {
    themeImgBtn.src = "./assets/icons/theme.png";
    menuImgBtn.src = "./assets/icons/Menu.png";
    iconstDarkMode = true;
  }

});
openMenuBtn.addEventListener("click", () => {
  const overlayerElement = document.createElement('div');
  overlayerElement.className = 'sideNavbar-overlayer'
  document.querySelector('nav').appendChild(overlayerElement);
  document.body.style.overflowY = 'hidden';
  sideNavbarElement.classList.add("open");
});
closeMenuBtn.addEventListener("click", () => {
  sideNavbarElement.classList.remove("open");
  document.body.style.overflowY = 'auto';
  document.querySelector('.sideNavbar-overlayer').remove();
});
navigateToTop.addEventListener("click", () => {
  document.body.scrollIntoView({ behavior: "smooth" });
});
