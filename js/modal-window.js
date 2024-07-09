
const formBtnSubmit = document.querySelector('.form__btn-submit');
const clientName = document.querySelector('#form-input-name');
const clientPhone = document.querySelector('#form-input-phone');
const clientEmail = document.querySelector('#form-input-email');

formBtnSubmit.addEventListener('click', openModal);

function openModal() {

  if (clientName.value === '') {
    clientName.classList.add('form__input_no-data');
  } if (clientPhone.value === '') {
    clientPhone.classList.add('form__input_no-data');
  } if (clientName.value === '' || clientPhone.value === '') {
    alert('Не заполнены все необходимые поля ввода данных.');
  } else {
    const modalContainer = document.querySelector('.section-form__modal-container');
    const formModalBtn = document.querySelector('#form-modal-btn');
    const modalNumber = document.querySelector('.modal__number');
    const formModal = document.querySelector('.section-form__modal');
    const body = document.querySelector('body');

    modalContainer.classList.remove('hidden');
    modalNumber.textContent = Math.round(Math.random() * 500);
    formModalBtn.addEventListener('click', closeModal);
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

    const clientInfo = {
      clientName: clientName.value,
      clientPhone: clientPhone.value,
      clientEmail: clientEmail.value,
    };

    console.log(clientInfo);

  }

}
