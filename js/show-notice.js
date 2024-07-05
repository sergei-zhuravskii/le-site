
// notice-links iniaialisation
const noticeLinks = document.querySelectorAll('.notice-link');

// event for click by links
noticeLinks.forEach(link => {
  link.addEventListener('click', openModal);
})

// function show notice
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
