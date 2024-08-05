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

// Popular movies
fetch(`${BASE_URL}popular?language=en-US&page=1`, options)
  .then((response) => response.json())
  .then((response) => {
    renderMovies(response.results);
  })
  .catch((err) => console.error(err));

const popMovieContainer = document.getElementById('popMovieContainer');

const createMovieCard = (movie) => {
  const { poster_path } = movie;
  // title, overview, poster_path, vote_average

  const card = document.createElement('div');
  const image = document.createElement('img');
  // const titleElement = document.createElement('h2');
  // const overviewElement = document.createElement('p');
  // const voteAverageElement = document.createElement('p');

  card.className = 'movie-card';
  // image.className = "poster-image";
  // titleElement.className = "title";
  // overviewElement.className = "overview";
  // voteAverageElement.className = "vote-average";

  image.src = `https://image.tmdb.org/t/p/w200${poster_path}`;
  // titleElement.textContent = title;
  // overviewElement.textContent = overview;
  // voteAverageElement.textContent = `Rating: ${vote_average}`;

  card.appendChild(image);
  // card.appendChild(titleElement);
  // card.appendChild(overviewElement);
  // card.appendChild(voteAverageElement);

  return card;
};

const renderMovies = (movies) => {
  movies.forEach((movie) => {
    const movieCard = createMovieCard(movie);
    popMovieContainer.appendChild(movieCard);
    // 영화 Id값 주소로 가지고 오는 코드 (+종호)
    movieCard.onclick = () => {
      window.location.href = `detailPage.html?id=${movie.id}`;
    };
  });
};

// Top rated movies
fetch(`${BASE_URL}top_rated?language=en-US&page=1`, options)
  .then((response) => response.json())
  .then((response) => {
    renderTopMovies(response.results);
  })
  .catch((err) => console.error(err));

const topMovieContainer = document.getElementById('TopMovieContainer');

const createTopMovieCard = (movie) => {
  const { poster_path } = movie;

  const card = document.createElement('div');
  const image = document.createElement('img');

  card.className = 'movie-card';

  image.src = `https://image.tmdb.org/t/p/w200${poster_path}`;

  card.appendChild(image);

  return card;
};

const renderTopMovies = (movies) => {
  movies.forEach((movie) => {
    const movieCard = createTopMovieCard(movie);
    topMovieContainer.appendChild(movieCard);
  });
};

// Now Playing API
fetch(`${BASE_URL}now_playing?language=en-US&page=1`, options)
  .then((response) => response.json())
  .then((response) => {
    renderNowMovies(response.results);
  })
  .catch((err) => console.error(err));

const nowMovieContainer = document.getElementById('NowMovieContainer');

const createNowMovieCard = (movie) => {
  const { poster_path } = movie;

  const card = document.createElement('div');
  const image = document.createElement('img');

  card.className = 'movie-card';

  image.src = `https://image.tmdb.org/t/p/w200${poster_path}`;

  card.appendChild(image);

  return card;
};

const renderNowMovies = (movies) => {
  movies.forEach((movie) => {
    const movieCard = createNowMovieCard(movie);
    nowMovieContainer.appendChild(movieCard);
  });
};
