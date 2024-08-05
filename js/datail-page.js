const URLSearch = new URLSearchParams(window.location.search); // 현재 페이지의 URL에서 쿼리 스트링 부분을 가져오기
const id = URLSearch.get('id'); // id라는 이름의 파라미터 값을 가져오기

const API_URL = 'https://api.themoviedb.org/3/';
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
const apiKey = '838d721e4cc805544c744295d5d45809';

const GENRES = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western'
};

// 영화 정보
async function fetchMovieContent() {
  const response = await fetch(`${API_URL}movie/${id}?api_key=${apiKey}&language=en-US`);
  const data = await response.json();
  return data;
}

//
//
// dom 조작 영역
async function displayMovieDetails() {
  const movieDetails = await fetchMovieContent();
  if (movieDetails) {
    // 타이틀
    document.querySelector('.movie-title').textContent = movieDetails.title;

    // 영화 가로 포스터
    document.querySelector('.autosize-poster-img').src = `${IMAGE_BASE_URL}/original${movieDetails.backdrop_path}`;

    // 영화 개봉일
    document.querySelector('.release-year').textContent = new Date(movieDetails.release_date).getFullYear();

    // 상영 시간
    document.querySelector('.movie-runtime').textContent = `${Math.floor(movieDetails.runtime / 60)}시간 ${
      movieDetails.runtime % 60
    }분`;

    // 점수
    document.querySelector('.movie-rate').textContent = `${(movieDetails.vote_average * 10).toFixed(2)} 점`;

    // About the movie
    // 세로 포스터
    document.querySelector('.poster-img').src = `https://image.tmdb.org/t/p/original${movieDetails.poster_path}`;

    // 감독
    document.querySelector('#movie-director').textContent = movieDetails.title;

    // 장르
    // document.querySelector('#movie-genre-ids').textContent = movieDetails.genre_ids[0];

    // 줄거리
    document.querySelector('#movie-overview').textContent = movieDetails.overview;
  } else {
    document.querySelector('.movie-title').textContent = 'Movie not found';
    document.querySelector('.release-year').style.display = 'none';
    document.querySelector('.movie-runtime').style.display = 'none';
    document.querySelector('.movie-rate').style.display = 'none';
  }
}

displayMovieDetails();
