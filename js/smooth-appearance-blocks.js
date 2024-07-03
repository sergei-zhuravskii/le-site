
// assign class (smooth-block) to any blocks
if (window.innerWidth < 992) {
  const smoothBlockContainers = document.querySelectorAll('[data-name="smooth-block-container"]');

  smoothBlockContainers.forEach (item => item.classList.add('smooth-block'));
}

if (window.innerWidth < 768) {
  const listAboutCompanyImg = document.querySelector('.list-about__company-img');
  const listAboutCompanyText = document.querySelector('[data-name="smooth-block-container-about"]');

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
