
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
    const modalBtn = document.querySelector('.modal__btn');
    const modalNumber = document.querySelector('.modal__number');
    const formModal = document.querySelector('.section-form__modal');

    modalContainer.classList.remove('hidden');
    modalNumber.textContent = Math.round(Math.random() * 500);
    modalBtn.addEventListener('click', closeModal);
    modalContainer.addEventListener('click', closeModal);

    function closeModal() {
      modalContainer.classList.add('hidden');
    }

    const clientInfo = {
      clientName: clientName.value,
      clientPhone: clientPhone.value,
      clientEmail: clientEmail.value,
    };

    console.log(clientInfo);

  }

}
