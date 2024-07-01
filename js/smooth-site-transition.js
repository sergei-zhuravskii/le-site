
const navLinks = document.querySelectorAll('[data-name="nav-link"]');
const footerLogo = document.querySelector('[data-name="footer-logo"]');

// Клик по ссылкам меню

navLinks.forEach((item) => {
  item.addEventListener('click', function(event) {
    event.preventDefault();

    const sectionId = item.getAttribute('href');

    document.querySelector(sectionId).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// Клик по эмблеме в футере

footerLogo.addEventListener('click', function(event) {
  event.preventDefault();

  document.querySelector('#header-site').scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
})
