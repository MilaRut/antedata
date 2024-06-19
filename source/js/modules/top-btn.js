const topBtns = document.querySelectorAll('.to-top-btn');
const toTopBtn = document.querySelector('#to-top-btn');

function scrollToTop() {
  topBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      }
      );
    });
  });

}

function showButton() {

  if (!toTopBtn) {
    return;
  }

  window.addEventListener('scroll', function () {
    const coeff = window.scrollY / 1000;
    if (window.scrollY <= 1000) {
      toTopBtn.style.opacity = coeff;
    } else {
      toTopBtn.style.opacity = 1;
    }
  });
}

export {scrollToTop, showButton};
