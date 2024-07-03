
// assign class (smooth-block) to any blocks
if (window.innerWidth < 768) {
  const listAboutCompanyImg = document.querySelector('.list-about__company-img');
  const listAboutCompanyText = document.querySelector('[data-name="smooth-block-container"]');

  listAboutCompanyImg.classList.add('smooth-block');
  listAboutCompanyText.classList.add('smooth-block');
}

// launch function for smooth appearance of blocks
document.addEventListener('DOMContentLoaded', function() {

  let smoothBlocks = document.querySelectorAll('.smooth-block');

  function checkBlocksVisibility() {
    let windowHeight = window.innerHeight;

    smoothBlocks.forEach(block => {
        const blockPosition = block.getBoundingClientRect().top;

        if (blockPosition < windowHeight) {
            block.style.opacity = "1";
            block.style.transform = "translateY(0)";
        }
    });
  }

  checkBlocksVisibility();

  window.addEventListener('scroll', function() {
    checkBlocksVisibility();
  });

});

// if (window.innerWidth < 768) {
//   const listServicesItems = document.querySelectorAll('.list-services__item');
//   const listServicesItemImgs = document.querySelectorAll('.list-services__item-img');
//   const listServicesItemHeadings = document.querySelectorAll('.list-services__item-heading');
//   const listServicesItemDescriptions = document.querySelectorAll('.list-services__item-description');
//   const listAboutCompanyImg = document.querySelector('.list-about__company-img');
//   const listAboutCompanyText = document.querySelector('.list-about__company-text');

//   listServicesItems.forEach (item => item.classList.add('smooth-block'));
//   listServicesItemImgs.forEach (img => img.classList.add('smooth-block'));
//   listServicesItemHeadings.forEach (heading => heading.classList.add('smooth-block'));
//   listServicesItemDescriptions.forEach (heading => heading.classList.add('smooth-block'));
//   listAboutCompanyImg.classList.add('smooth-block');
//   listAboutCompanyText.classList.add('smooth-block');
// }
