
const navLinks = document.querySelectorAll('[data-name="nav-link"]');

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
