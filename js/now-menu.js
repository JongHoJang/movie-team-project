const API_KEY = '838d721e4cc805544c744295d5d45809';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzhkNzIxZTRjYzgwNTU0NGM3NDQyOTVkNWQ0NTgwOSIsIm5iZiI6MTcyMjQ5MzgxMi43MDA2ODksInN1YiI6IjY2YTJlYzljMDk5MDU0NTUxNDYxMmJlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CrYho_flSejWu4M0bLQq4uFADdDAPFUi-pX3fKlYLsc'
  }
};

fetch(`${BASE_URL}now_playing?language=en-US&page=1`, options)
  .then((response) => response.json())
  .then((response) => {
    renderNowMovies(response.results);
  })
  .catch((err) => console.error(err));

// 영화 카드
const createNowMovieCard = (movie) => {
  const { poster_path } = movie;

  const card = document.createElement('div');
  const image = document.createElement('img');

  card.className = 'movie-card';
  image.src = `https://image.tmdb.org/t/p/w200${poster_path}`;

  card.appendChild(image);
  return card;
};

// 영화 목록
const renderNowMovies = (movies) => {
  const nowMovieContainer = document.getElementById('NowMovieContainer');
  nowMovieContainer.innerHTML = '';

  movies.forEach((movie) => {
    const movieCard = createNowMovieCard(movie);
    nowMovieContainer.appendChild(movieCard);
  });
};

// 영화 검색
function search_movie(event) {
  event.preventDefault();
  const query = document.querySelector('.search-box').value.toLowerCase();

  if (query) {
    fetch(`${BASE_URL}now_playing?language=en-US&page=1`, options)
      .then((response) => response.json())
      .then((data) => {
        const movies = data.results.filter((movie) => movie.title.toLowerCase().includes(query));
        const movieContainer = document.getElementById('NowMovieContainer');
        movieContainer.innerHTML = '';

        movies.forEach((movie) => {
          const card = createNowMovieCard(movie);
          movieContainer.appendChild(card);
        });
      })
      .catch((error) => console.error('Error:', error));
  }
}
