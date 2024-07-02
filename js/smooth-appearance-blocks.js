
// assign class (smooth-block) to img and text ii section-about
if (window.innerWidth < 768) {
  const companyImg = document.querySelector('.list-about__company-img');
  const companyText = document.querySelector('.list-about__company-text');

  companyImg.classList.add('smooth-block');
  companyText.classList.add('smooth-block');
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
