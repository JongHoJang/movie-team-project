const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzhkNzIxZTRjYzgwNTU0NGM3NDQyOTVkNWQ0NTgwOSIsIm5iZiI6MTcyMjQ5MzgxMi43MDA2ODksInN1YiI6IjY2YTJlYzljMDk5MDU0NTUxNDYxMmJlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CrYho_flSejWu4M0bLQq4uFADdDAPFUi-pX3fKlYLsc'
  }
};

// 1. popular API
// 원래 코드(윤지님)
// fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
//

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
    bannerSlides.appendChild(slide);
  });

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
    popularSlides.appendChild(slide);
  });
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
    topRatedSlides.appendChild(slide);
  });
}
topRated();

// 3. Now Playing
// fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

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
    nowPlayingSlides.appendChild(slide);
  });

  // test-section에 영화 붙이기
  movieData.forEach((movie) => {
    const testNowPlayingSlides = document.querySelector('.test-now-playing-slides');
    const slide = document.createElement('li');
    slide.id = movie.id;
    slide.innerHTML = `
        <a href="#">
        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="movie image" />
        </a>
        `;
    testNowPlayingSlides.appendChild(slide);
  });
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
