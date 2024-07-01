
const companyButtonMore = document.querySelector('[data-name="company-btn-more"]');
const companyText = document.querySelector('.list-about__company-text');

companyButtonMore.addEventListener('click', function() {
  companyText.classList.toggle('list-about__company-text_line-clamp');

  this.classList.toggle('btn-more_active');
})
