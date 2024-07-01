
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
