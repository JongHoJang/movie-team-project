const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzhkNzIxZTRjYzgwNTU0NGM3NDQyOTVkNWQ0NTgwOSIsIm5iZiI6MTcyMjQ5MzgxMi43MDA2ODksInN1YiI6IjY2YTJlYzljMDk5MDU0NTUxNDYxMmJlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CrYho_flSejWu4M0bLQq4uFADdDAPFUi-pX3fKlYLsc'
  }
};

// 1. popular API
async function popularApi() {
  const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);

  const dataJson = await data.json();
  const movieData = dataJson.results;

  // 상단 banner 영화 붙이기
  movieData.forEach((movie) => {
    const bannerSlides = document.querySelector('.banner-slides');
    const slide = document.createElement('li');
    slide.id = movie.id;
    slide.innerHTML = `    
    <a href="#">
    <img src="https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}" alt="movie image" />
    </a>
    `;

    // 쿼리스트링
    slide.onclick = () => {
      window.location.href = `detailPage.html?id=${movie.id}`;
    };

    bannerSlides.appendChild(slide);
  });

  // Banner Carousel (start) //
  const bannerCarousel = () => {
    let slides = document.querySelector('.banner-slides');
    let slide = document.querySelectorAll('.banner-slides li');
    let currentIdx = 0;
    let slideCount = slide.length;
    let slideWidth = 840;
    let slideMargin = 20;
    let prevBtn = document.querySelector('.prev');
    let nextBtn = document.querySelector('.next');

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
      slides.style.left = -num * (slideWidth + slideMargin) + 'px';
      currentIdx = num;

      if (currentIdx === slideCount || currentIdx === -slideCount) {
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
    let timer = null;

    function autoSlide() {
      if (timer === null) {
        timer = setInterval(() => {
          moveSlide(currentIdx + 1);
        }, 2500);
      }
    }

    autoSlide();

    function stopSlide() {
      clearInterval(timer);
      timer = null;
    }

    slides.addEventListener('mouseenter', () => stopSlide());
    slides.addEventListener('mouseleave', () => autoSlide());
  };
  bannerCarousel();

  // main-movies의 popular 파트에 영화 붙이기
  movieData.forEach((movie) => {
    const popularSlides = document.querySelector('.popular-slides');
    const slide = document.createElement('li');
    slide.id = movie.id;
    slide.innerHTML = `
    <a href="#">
    <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="movie image" />
    </a>
    `;

    // 쿼리스트링
    slide.onclick = () => {
      window.location.href = `detailPage.html?id=${movie.id}`;
    };
    popularSlides.appendChild(slide);
  });

  // ************************************************************
  // *************** Main Part - Popular Carousel ***************
  // ************************************************************
  const mainPopularCarousel = () => {
    let popularSlides = document.querySelector('.popular-slides'); // ul
    let popularSlide = document.querySelectorAll('.popular-slides li');
    let popularPrevBtn = document.querySelector('.popular-prev');
    let popularNextBtn = document.querySelector('.popular-next');

    let currentIdx = 0;
    let popularSlideCount = popularSlide.length;
    let bunchOfFiveSlides = popularSlideCount / 5;
    let slideWidth = 240;
    let slideMargin = 10;

    const makeClone = () => {
      for (let i = 0; i < popularSlideCount; i++) {
        let cloneSlide = popularSlide[i].cloneNode(true);

        cloneSlide.classList.add(`cloned-slide-${i}`);
        popularSlides.appendChild(cloneSlide);
      }

      for (let i = popularSlideCount - 1; i >= 0; i--) {
        let cloneSlide = popularSlide[i].cloneNode(true);

        cloneSlide.classList.add(`cloned-slide-${i}`);
        popularSlides.prepend(cloneSlide);
      }

      updateWidth();

      setInitialPos();

      setTimeout(() => {
        popularSlides.classList.add('animated');
      }, 100);
    };

    makeClone();

    function updateWidth() {
      let currentSlides = document.querySelectorAll('.popular-slides li');
      let newSlideCount = currentSlides.length;
      let newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';

      popularSlides.style.width = newWidth;
    }

    function setInitialPos() {
      let initialTranslateValue = -(slideWidth + slideMargin) * popularSlideCount;

      popularSlides.style.transform = `translateX(${initialTranslateValue}px)`;
    }

    popularNextBtn.addEventListener('click', () => {
      moveSlide(currentIdx + 1);
    });

    popularPrevBtn.addEventListener('click', () => {
      moveSlide(currentIdx - 1);
    });

    const moveSlide = (num) => {
      popularSlides.style.left = -num * (5 * slideWidth + 5 * slideMargin) + 'px';
      currentIdx = num;

      if (currentIdx === bunchOfFiveSlides || currentIdx === -bunchOfFiveSlides) {
        setTimeout(() => {
          popularSlides.classList.remove('animated');
          popularSlides.style.left = '0px';
          currentIdx = 0;
        }, 500);

        setTimeout(() => {
          popularSlides.classList.add('animated');
        }, 600);
      }
    };
  };
  mainPopularCarousel();
}
popularApi();

// 2. Top Rated API
// fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

async function topRated() {
  const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);

  const dataJson = await data.json();
  const movieData = dataJson.results;

  // main-movies의 Top-Rated 파트에 영화 붙이기
  movieData.forEach((movie) => {
    const topRatedSlides = document.querySelector('.top-rated-slides');
    const slide = document.createElement('li');
    slide.id = movie.id;
    slide.innerHTML = `
      <a href="#">
      <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="movie image" />
      </a>
      `;

    // 쿼리스트링
    slide.onclick = () => {
      window.location.href = `detailPage.html?id=${movie.id}`;
    };
    topRatedSlides.appendChild(slide);
  });

  // ************************************************************
  // ************** Main Part - Top Rated Carousel **************
  // ************************************************************
  const mainTopRatedCarousel = () => {
    let topRatedSlides = document.querySelector('.top-rated-slides'); // ul
    let topRatedSlide = document.querySelectorAll('.top-rated-slides li');
    let topRatedPrevBtn = document.querySelector('.top-rated-prev');
    let topRatedNextBtn = document.querySelector('.top-rated-next');

    let currentIdx = 0;
    let popularSlideCount = topRatedSlide.length;
    let bunchOfFiveSlides = popularSlideCount / 5;
    let slideWidth = 240;
    let slideMargin = 10;

    // 복제본 생성
    const makeClone = () => {
      for (let i = 0; i < popularSlideCount; i++) {
        let cloneSlide = topRatedSlide[i].cloneNode(true);

        cloneSlide.classList.add(`cloned-slide-${i}`);
        topRatedSlides.appendChild(cloneSlide);
      }

      for (let i = popularSlideCount - 1; i >= 0; i--) {
        let cloneSlide = topRatedSlide[i].cloneNode(true);

        cloneSlide.classList.add(`cloned-slide-${i}`);
        topRatedSlides.prepend(cloneSlide);
      }

      updateWidth();

      setInitialPos();

      setTimeout(() => {
        topRatedSlides.classList.add('animated');
      }, 100);
    };

    makeClone();

    function updateWidth() {
      let currentSlides = document.querySelectorAll('.popular-slides li');
      let newSlideCount = currentSlides.length;
      let newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';

      topRatedSlides.style.width = newWidth;
    }

    function setInitialPos() {
      let initialTranslateValue = -(slideWidth + slideMargin) * popularSlideCount;

      topRatedSlides.style.transform = `translateX(${initialTranslateValue}px)`;
    }

    topRatedNextBtn.addEventListener('click', () => {
      moveSlide(currentIdx + 1);
    });

    topRatedPrevBtn.addEventListener('click', () => {
      moveSlide(currentIdx - 1);
    });

    const moveSlide = (num) => {
      topRatedSlides.style.left = -num * (5 * slideWidth + 5 * slideMargin) + 'px';
      currentIdx = num;

      if (currentIdx === bunchOfFiveSlides || currentIdx === -bunchOfFiveSlides) {
        setTimeout(() => {
          topRatedSlides.classList.remove('animated');
          topRatedSlides.style.left = '0px';
          currentIdx = 0;
        }, 500);

        setTimeout(() => {
          topRatedSlides.classList.add('animated');
        }, 600);
      }
    };
  };
  mainTopRatedCarousel();
}
topRated();

// 3. Now Playing API
async function nowPlaying() {
  const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);

  const dataJson = await data.json();
  const movieData = dataJson.results;

  // main-movies의 Now Playing 파트에 영화 붙이기
  movieData.forEach((movie) => {
    const nowPlayingSlides = document.querySelector('.now-playing-slides');
    const slide = document.createElement('li');
    slide.id = movie.id;
    slide.innerHTML = `
        <a href="#">
        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="movie image" />
        </a>
        `;

    // 쿼리스트링
    slide.onclick = () => {
      window.location.href = `detailPage.html?id=${movie.id}`;
    };
    nowPlayingSlides.appendChild(slide);
  });

  // ************************************************************
  // *************** Main Part - Now Playing Animation ***************
  // ************************************************************
  const mainNowPlayinganimation = () => {
    const nowPlayingSlides = document.querySelector('.now-playing-slides');
    const nowPlayingSlidesItems = nowPlayingSlides.querySelectorAll('li');
    let animationFrame;

    // 복사
    const makeClone = (slides, slidesItems) => {
      slidesItems.forEach((slide, idx) => {
        let cloneSlide = slide.cloneNode(true);
        cloneSlide.classList.add(`cloned-slide-${idx}`);

        slides.appendChild(cloneSlide);
      });
    };

    makeClone(nowPlayingSlides, nowPlayingSlidesItems);

    let currentLeftValueC = 0;
    let leftMovingDistanceC = 2;

    function animateSlideC() {
      currentLeftValueC = currentLeftValueC - leftMovingDistanceC;
      if (currentLeftValueC <= -5000) {
        currentLeftValueC = 0;
      }

      nowPlayingSlides.style.left = `${currentLeftValueC}px`;

      animationFrame = requestAnimationFrame(animateSlideC);
    }
    window.onload = animateSlideC();

    function startAnimationC() {
      if (!animationFrame) animateSlideC();
    }

    function stopAnimationC() {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null; // 멈추는 작업을 확실하게
      }
    }

    nowPlayingSlides.addEventListener('mouseenter', () => stopAnimationC());
    nowPlayingSlides.addEventListener('mouseleave', () => startAnimationC());
    // now playng slide (end) //
  };
  mainNowPlayinganimation();
}
nowPlaying();

// 4. similar
// fetch('https://api.themoviedb.org/3/movie/movie_id/similar?language=en-US&page=1', options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// genre (장르별)
// fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// credits -> 404 오류 뜨는데 왜 그런 건지 모르겠음.. -> 응답 결과가 나오지 않음
// fetch('https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US', options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// Top Button (start) //
document.addEventListener('DOMContentLoaded', () => {
  // top button
  console.log(document.documentElement.scrollTop);

  const topButton = document.querySelector('.move-top-button');

  const scrollFunction = () => {
    if (document.documentElement.scrollTop > 500) {
      topButton.style.display = 'block';
    } else {
      topButton.style.display = 'none';
    }
  };

  window.onscroll = function () {
    scrollFunction();
  };

  topButton.addEventListener('click', () => {
    // document.documentElement.scrollTop = 0;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
// Top Button (end) //
