// 1. popular API

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzhkNzIxZTRjYzgwNTU0NGM3NDQyOTVkNWQ0NTgwOSIsIm5iZiI6MTcyMjQ5MzgxMi43MDA2ODksInN1YiI6IjY2YTJlYzljMDk5MDU0NTUxNDYxMmJlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CrYho_flSejWu4M0bLQq4uFADdDAPFUi-pX3fKlYLsc'
  }
};

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

// 2. Top Rated API
fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

// 3. Now Playing
fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

// similar
fetch('https://api.themoviedb.org/3/movie/movie_id/similar?language=en-US&page=1', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

// genre (장르별)
fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

// credits -> 404 오류 뜨는데 왜 그런 건지 모르겠음.. -> 응답 결과가 나오지 않음
fetch('https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
