function changeLogo() {
  window.addEventListener('scroll', function () {
    const logoWrapper = document.querySelector('.header__logo-wrapper');
    if (window.scrollY > 0) {
      logoWrapper.classList.add('is-scrolled');
    } else {
      logoWrapper.classList.remove('is-scrolled');
    }
  });
}

export {changeLogo};
