setTimeout(() => {
  let popularWrapperWidth = document.querySelector('.popular-wrapper').clientWidth;
  let popularSlides = document.querySelector('.popular-slides');
  let popularSlidesItems = popularSlides.querySelectorAll('li');
  let slidesItemsCount = popularSlidesItems.length;
  let slideWidth = 240;
  let slideMargin = 10;
  let animationFrameA;
  let animationFrameB;

  let topRatedSlides = document.querySelector('.top-rated-slides');
  let topRatedSlidesItems = popularSlides.querySelectorAll('li');

  let nowPlayingSlides = document.querySelector('.now-playing-slides');
  let nowPlayingSlidesItems = popularSlides.querySelectorAll('li');

  // 복사
  const makeClone = (slides, slidesItems) => {
    slidesItems.forEach((slide, idx) => {
      let cloneSlide = slide.cloneNode(true);
      cloneSlide.classList.add(`cloned-slide-${idx}`);

      slides.appendChild(cloneSlide);
    });
  };

  makeClone(popularSlides, popularSlidesItems);
  makeClone(topRatedSlides, topRatedSlidesItems);
  makeClone(nowPlayingSlides, nowPlayingSlidesItems);

  // popularSlidesItems.forEach((slide, idx) => {
  //   let cloneSlide = slide.cloneNode(true);
  //   cloneSlide.classList.add(`cloned-slide-${idx}`);

  //   popularSlides.appendChild(cloneSlide);
  // });

  //////////////// 1
  let currentLeftValueA = 0;
  let leftMovingDistanceA = 2;

  function animateSlideA() {
    currentLeftValueA = currentLeftValueA - leftMovingDistanceA;
    if (currentLeftValueA <= -5000) {
      currentLeftValueA = 0;
    }

    popularSlides.style.left = `${currentLeftValueA}px`;

    animationFrameA = requestAnimationFrame(animateSlideA);
  }
  window.onload = animateSlideA();

  function startAnimation() {
    if (!animationFrameA) animateSlideA();
  }

  function stopAnimation() {
    if (animationFrameA) {
      cancelAnimationFrame(animationFrameA);
      animationFrameA = null; // 멈추는 작업을 확실하게
    }
  }
  ////////////////

  ////////////// 2
  let currentLeftValueB = 0;
  let leftMovingDistanceB = 2;

  function animateSlideB() {
    currentLeftValueB = currentLeftValueB - leftMovingDistanceB;
    if (currentLeftValueB <= -5000) {
      currentLeftValueB = 0;
    }

    topRatedSlides.style.left = `${currentLeftValueB}px`;

    animationFrameB = requestAnimationFrame(animateSlideB);
  }
  window.onload = animateSlideB();

  function startAnimationB() {
    if (!animationFrameB) animateSlideB();
  }

  function stopAnimationB() {
    if (animationFrameB) {
      cancelAnimationFrame(animationFrameB);
      animationFrameB = null; // 멈추는 작업을 확실하게
    }
  }
  //////////////

  ////////////// 3
  let currentLeftValueC = 0;
  let leftMovingDistanceC = 2;

  function animateSlideC() {
    currentLeftValueC = currentLeftValueC - leftMovingDistanceC;
    if (currentLeftValueC <= -5000) {
      currentLeftValueC = 0;
    }

    nowPlayingSlides.style.left = `${currentLeftValueC}px`;

    animationFrameC = requestAnimationFrame(animateSlideC);
  }
  window.onload = animateSlideC();

  function startAnimationC() {
    if (!animationFrameC) animateSlideC();
  }

  function stopAnimationC() {
    if (animationFrameC) {
      cancelAnimationFrame(animationFrameC);
      animationFrameC = null; // 멈추는 작업을 확실하게
    }
  }
  //////////////

  popularSlides.addEventListener('mouseenter', () => stopAnimation());
  popularSlides.addEventListener('mouseleave', () => startAnimation());

  topRatedSlides.addEventListener('mouseenter', () => stopAnimationB());
  topRatedSlides.addEventListener('mouseleave', () => startAnimationB());

  nowPlayingSlides.addEventListener('mouseenter', () => stopAnimationC());
  nowPlayingSlides.addEventListener('mouseleave', () => startAnimationC());
}, 1000);
