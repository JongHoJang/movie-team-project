setTimeout(() => {
  let slides = document.querySelector('.test-now-playing-slides'); // ul
  let slide = document.querySelectorAll('.test-now-playing-slides li');
  let currentIdx = 0;
  let slideCount = slide.length;
  console.log(slideCount); // 20
  let slideWidth = 240;
  let slideMargin = 10;
  let prevBtn = document.querySelector('.test-prev');
  let nextBtn = document.querySelector('.test-next');

  // 복제본 붙이기
  const makeClone = () => {
    for (let i = 0; i < slideCount; i++) {
      let cloneSlide = slide[i].cloneNode(true);

      cloneSlide.classList.add(`cloned-slide-${i}`);
      slides.appendChild(cloneSlide);
    }

    for (let i = slideCount - 1; i >= 0; i--) {
      let cloneSlide = slide[i].cloneNode(true);

      cloneSlide.classList.add(`cloned-slide-${i}`);
      slides.prepend(cloneSlide);
    }

    updateWidth();

    setInitialPos();

    setTimeout(() => {
      slides.classList.add('animated');
    }, 100);
  };

  makeClone();

  function updateWidth() {
    let currentSlides = document.querySelectorAll('.banner-slides li');
    let newSlideCount = currentSlides.length;
    let newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
    // let newWidth = 14880 + 'px';
    console.log(newWidth);

    slides.style.width = newWidth;
  }

  function setInitialPos() {
    let initialTranslateValue = -(slideWidth + slideMargin) * slideCount;

    slides.style.transform = `translateX(${initialTranslateValue}px)`;
  }

  nextBtn.addEventListener('click', () => {
    moveSlide(currentIdx + 1);
  });

  prevBtn.addEventListener('click', () => {
    moveSlide(currentIdx - 1);
  });

  const moveSlide = (num) => {
    slides.style.left = -num * (5 * slideWidth + 4 * slideMargin) + 'px';
    console.log(num * (5 * slideWidth + 4 * slideMargin));
    currentIdx = num;
    console.log(currentIdx);

    if (currentIdx === 4 || currentIdx === -4) {
      setTimeout(() => {
        slides.classList.remove('animated');
        slides.style.left = '0px';
        currentIdx = 0;
      }, 500);

      setTimeout(() => {
        slides.classList.add('animated');
      }, 600);
    }
  };

  // move slides
  // let timer = null;

  // function autoSlide() {
  //   if (timer === null) {
  //     timer = setInterval(() => {
  //       moveSlide(currentIdx + 1);
  //     }, 2500);
  //   }
  // }

  // autoSlide();

  // function stopSlide() {
  //   clearInterval(timer);
  //   timer = null;
  // }

  // slides.addEventListener('mouseenter', () => stopSlide());
  // slides.addEventListener('mouseleave', () => autoSlide());
}, 1000);
