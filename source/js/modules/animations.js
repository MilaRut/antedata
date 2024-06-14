const mainPage = document.querySelector('.main-page');

function initAnimations() {
  if (!mainPage) {
    return;
  }
  const animElements = document.querySelectorAll('[animate]');

  const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add('start');
      }
    });
  });

  animElements.forEach((el) => {
    observer.observe(el);
  });
}

export {initAnimations};
