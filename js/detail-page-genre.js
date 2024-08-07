// 영화 정보
async function fetchMovieContent() {
  const response = await fetch(`${API_URL}movie/${id}?api_key=${apiKey}&language=en-US`);
  const data = await response.json();
  return data;
}

// 장르 리스트
async function getGenres() {
  const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`);
  const data = await response.json();
  return data.genres; // 장르 배열 반환
}
// 특정 장르 영화 가지고 오는 API
async function getMoviesByGenre(genreId) {
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`);
  const data = await response.json();
  return data.results; // 영화 배열 반환
}

// 해당 영화의 장르 > 배열로 반환하는 함수
function getGenreNamesArray(genres) {
  return genres.map((genre) => genre.name);
}

async function displayMovieDetails() {
  const movieDetails = await fetchMovieContent();
  const movieCredits = await fetchMovieCredits();

  if ((movieDetails, movieCredits)) {
    // 현재 영화의 장르 이름 배열 생성
    const genreNamesArray = getGenreNamesArray(movieDetails.genres);
    console.log('현재 보고 있는 영화의 장르 이름:', genreNamesArray); // 현재 영화의 장르

    // 현재 장르 추가
    document.querySelector('#movie-genre-ids').textContent = genreNamesArray.join(', ');

    // 현재 영화의 장르 ID를 찾기 위해 전체 장르 리스트를 필터링
    const currentMovieGenreIds = movieDetails.genres.map((genre) => genre.id);
    const currentMovieGenreIds2 = currentMovieGenreIds.slice(0, 2);
    console.log('현재 보고 있는 영화의 장르 id:', currentMovieGenreIds);
    console.log('현재 보고 있는 영화의 장르 2개의 id:', currentMovieGenreIds2);

    // 장르 목록 가져오기
    const genres = await getGenres();
    console.log('전체 장르 목록: ', genres);

    // 현재 영화의 장르 ID를 이용해 각 장르의 영화 목록을 가져오기
    const moviesByGenrePromises = currentMovieGenreIds2.map((genreId) => getMoviesByGenre(genreId));
    const [moviesByFirstGenre, moviesBySecondGenre] = await Promise.all(moviesByGenrePromises);

    // 두 장르 모두에 포함된 영화 찾기
    const firstGenreMovieIds = new Set(moviesByFirstGenre.map((movie) => movie.id));
    const commonMovies = moviesBySecondGenre.filter((movie) => firstGenreMovieIds.has(movie.id));

    console.log('Movies with both genres:', commonMovies);

    const top5Movie = commonMovies.slice(0, 5);
    console.log(top5Movie);

    const relativeMovieContainer = document.querySelector('#relative-movies-container');
    // relativeMovieContainer.innerHTML = '';

    // 반복문 돌면서 영화카드 제작
    top5Movie.forEach((movie) => {
      const relativeMovieContain = document.createElement('div');
      relativeMovieContain.classList.add('relative-movie-contain');

      const relativeMovieTitle = document.createElement('p');
      relativeMovieTitle.classList.add('relative-movie-title');
      relativeMovieTitle.textContent = movie.title;

      const relativeMoviePoster = document.createElement('img');
      relativeMoviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      relativeMoviePoster.alt = `${movie.name} profile image`;
      relativeMoviePoster.classList.add('relative-movie-img');

      relativeMovieContain.appendChild(relativeMoviePoster);
      relativeMovieContain.appendChild(relativeMovieTitle);
      relativeMovieContainer.appendChild(relativeMovieContain);

      // 개별 영화 카드에 클릭 이벤트 리스너 추가
      relativeMovieContain.addEventListener('click', () => {
        window.location.href = `detailPage.html?id=${movie.id}`;
      });
    });

    const relativeContainer = document.querySelector('.relative-movie-container');
  }
}

displayMovieDetails();
fetchMovieCredits();
