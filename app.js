const menuHamburger = document.querySelector('.icon-menu');
const navLinks = document.querySelector('.links');

menuHamburger.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu');
});

const iconMenu = document.querySelector('.icon-menu');
const menuLinks = document.querySelector('.links');

iconMenu.addEventListener('click', () => {
  menuLinks.classList.toggle('open');
  iconMenu.classList.toggle('open');
});