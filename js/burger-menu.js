
const burgerMenuBtn = document.querySelector('.burger-menu-btn');
const burgerMenu = document.querySelector('.nav__burger-menu');
const burgerMenuLinks = document.querySelectorAll('.burger-menu__item-link');

burgerMenuBtn.addEventListener('click', showBurgerMenu);

function showBurgerMenu() {
  burgerMenu.classList.toggle('burger-menu-active');

  burgerMenuBtn.classList.toggle('burger-menu-btn-active');

  document.body.classList.toggle('body-scroll-off');
}

burgerMenuLinks.forEach((item) => {
  item.addEventListener('click', closeBurgerMenu);
});

function closeBurgerMenu() {
  burgerMenu.classList.toggle('burger-menu-active');

  burgerMenuBtn.classList.toggle('burger-menu-btn-active');

  document.body.classList.remove('body-scroll-off');
}
