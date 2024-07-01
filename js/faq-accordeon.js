
// Открыть / скрыть FAQ

const faqButtonMore = document.querySelector('.FAQ__btn-more');

faqButtonMore.addEventListener('click', function() {
  faqButtonMore.previousElementSibling.classList.toggle('FAQ-accordeon_open');

  this.classList.toggle('btn-more_active');
})

// Аккордеон FAQ

const faqQuestions = document.querySelectorAll('.FAQ-item__heading');
const faqAnswers = document.querySelectorAll('.FAQ-item__answer');
const faqQuestionHeadings = document.querySelectorAll('.FAQ-item__question'); //*

faqQuestions.forEach((item) => {
  item.addEventListener('click', function() {
    const faqAnswersOpen = document.querySelectorAll('.answer_open');

    item.nextElementSibling.classList.toggle('answer_open');
    item.lastElementChild.classList.toggle('btn-more_active');
    item.firstElementChild.classList.toggle('FAQ-item__question_active');

    faqAnswersOpen.forEach((itemAnswer) => {
      itemAnswer.classList.remove('answer_open');
      itemAnswer.previousElementSibling.lastElementChild.classList.remove('btn-more_active');
      itemAnswer.previousElementSibling.firstElementChild.classList.remove('FAQ-item__question_active');

      console.log(itemAnswer)
    })
  });
});
