
const servicesButtonsMore = document.querySelectorAll('.list-services__btn-more');

servicesButtonsMore.forEach((item) => {
  item.addEventListener('click', function() {
    const servicesDescriptionsOpen = document.querySelectorAll('.list-services__item-description:not(.list-services__item-description_line-clamp)');
    const  servicesDescription = item.previousElementSibling;

    servicesDescription.classList.toggle('list-services__item-description_line-clamp');
    item.classList.toggle('btn-more_active');

    servicesDescriptionsOpen.forEach((item) => {
      item.classList.add('list-services__item-description_line-clamp');
      item.nextElementSibling.classList.remove('btn-more_active');
    })
  })
})
