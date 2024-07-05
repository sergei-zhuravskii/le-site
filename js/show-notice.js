
const headerLogoContainer = document.querySelector('.top-line__logo-container');
const footerLogoContainer = document.querySelector('.footer__logo-container');
const footerPrivacy = document.querySelector('.footer__privacy');

headerLogoContainer.addEventListener('click', openModal);
footerLogoContainer.addEventListener('click', openModal);
footerPrivacy.addEventListener('click', openModal);

function openModal() {

  const modalContainer = document.querySelector('.notice__modal-container');
  const modalBtn = document.querySelector('.modal__btn');

  modalContainer.classList.remove('hidden');
  modalBtn.addEventListener('click', closeModal);
  modalContainer.addEventListener('click', closeModal);

  function closeModal() {
    modalContainer.classList.add('hidden');
  }

}
