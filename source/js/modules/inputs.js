const feedback = document.querySelector('.feedback');

function setInputBg() {
  if (!feedback) {
    return;
  }

  const formElements = document.querySelectorAll('.form-el');

  formElements.forEach((el) => {
    el.addEventListener('change', () => {
      if (el.value !== '') {
        el.classList.add('is-active');
      } else {
        el.classList.remove('is-active');
      }
    });
  });
}

export {setInputBg};
