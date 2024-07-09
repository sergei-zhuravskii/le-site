
// notice-links iniaialisation
const noticeLinks = document.querySelectorAll('.notice-link');

// event for click by links
noticeLinks.forEach(link => {
  link.addEventListener('click', openModal);
})

// function show notice
function openModal() {

  const modalContainer = document.querySelector('.notice__modal-container');
  const noticeModalBtn = document.querySelector('#notice-modal-btn');
  const body = document.querySelector('body');

  modalContainer.classList.remove('hidden');
  noticeModalBtn.addEventListener('click', closeModal);
  body.classList.add('body-scroll-off');
  if (window.innerWidth > 770) {
    body.classList.add('body-offset');
  }

  function closeModal() {
    modalContainer.classList.add('hidden');
    body.classList.remove('body-scroll-off');
    if (window.innerWidth > 770) {
      body.classList.remove('body-offset');
    }
  }

}
