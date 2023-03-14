const menuHamburger = document.querySelector('.icon-menu');
const navLinks = document.querySelector('.links');

menuHamburger.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu');
});

const iconMenu = document.querySelector('.icon-menu');
const menuLinks = document.querySelector('.links');
const navLinksList = document.querySelectorAll('.links a');

iconMenu.addEventListener('click', () => {
  menuLinks.classList.toggle('open');
  iconMenu.classList.toggle('open');
});

navLinksList.forEach((link) => {
  link.addEventListener('click', () => {
    menuLinks.classList.remove('open');
    iconMenu.classList.remove('open');
    navLinks.classList.remove('mobile-menu');
  });
});