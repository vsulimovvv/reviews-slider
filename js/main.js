function slider() {
  const reviewsSlide = document.querySelectorAll('.reviews-card');
  const arrowBtnPrev = document.querySelector('.arrow-prev');
  const arrowBtnNext = document.querySelector('.arrow-next');
  let current = 0;
  
  function removeActive() {
    reviewsSlide.forEach((el) => {
      el.classList.remove('active');
    });
  }

  arrowBtnNext.addEventListener('click', (e) => {
    if (reviewsSlide.length - 1 === current) {
      current = 0;
    }

    current++;
    removeActive();
    reviewsSlide[current].classList.add('active');
  });

  arrowBtnPrev.addEventListener('click', (e) => {
    if (current <= 0) {
      current = reviewsSlide.length;
    }

    if (current >= 0) {
      current--;
      removeActive();
      reviewsSlide[current].classList.add('active');
    }
  });
}

slider();
