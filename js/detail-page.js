const URLSearch = new URLSearchParams(window.location.search); // 현재 페이지의 URL에서 쿼리 스트링 부분을 가져오기
const id = URLSearch.get('id'); // id라는 이름의 파라미터 값을 가져오기

const API_URL = 'https://api.themoviedb.org/3/';
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
const apiKey = '838d721e4cc805544c744295d5d45809';

// 영화 정보
async function fetchMovieContent() {
  const response = await fetch(`${API_URL}movie/${id}?api_key=${apiKey}&language=en-US`);
  const data = await response.json();
  return data;
}

// 선택된 영화 캐스팅 정보
async function fetchMovieCredits() {
  const response = await fetch(`${API_URL}movie/${id}/credits?api_key=${apiKey}&language=en-US`);
  const data = await response.json();
  // console.log(data.cast);
  return data;
}

//
//
// dom 조작 영역
async function displayMovieDetails() {
  const movieDetails = await fetchMovieContent();
  const movieCredits = await fetchMovieCredits();
  if ((movieDetails, movieCredits)) {
    // 장르

    // 타이틀
    document.querySelector('.movie-title').textContent = movieDetails.title;

    // 영화 가로 포스터
    document.querySelector('.autosize-poster-img').src = `${IMAGE_BASE_URL}/original${movieDetails.backdrop_path}`;

    // 영화 개봉일
    document.querySelector('.release-year').textContent = new Date(movieDetails.release_date).getFullYear();

    // 상영 시간
    document.querySelector('.movie-runtime').textContent = `${Math.floor(movieDetails.runtime / 60)}h ${
      movieDetails.runtime % 60
    }m`;

    // 점수
    document.querySelector('.movie-rate').textContent = `${(movieDetails.vote_average * 10).toFixed(2)}%`;

    //
    //
    // About the movie
    // 세로 포스터
    document.querySelector('.poster-img').src = `https://image.tmdb.org/t/p/original${movieDetails.poster_path}`;

    // 감독
    const director = movieCredits.crew.find((member) => member.job === 'Director');
    if (director) {
      document.querySelector('#movie-director').textContent = `${director.name}`;
    } else {
      document.querySelector('#movie-director').textContent = `There is no director information.`;
    }

    // 감독
    const producer = movieCredits.crew.find((member) => member.job === 'Producer');
    if (producer) {
      document.querySelector('#movie-producer').textContent = `${producer.name}`;
    } else {
      document.querySelector('#movie-producer').textContent = `There is no producer information.`;
    }

    // 배우(이미지,이름)
    fetchMovieCredits().then((movieCredits) => {
      const top5Cast = movieCredits.cast.slice(0, 5);
      const castContainer = document.querySelector('.actor-container');
      castContainer.innerHTML = '';

      top5Cast.forEach((actor) => {
        const actorDiv = document.createElement('div');
        actorDiv.classList.add('actor-contain');

        const actorName = document.createElement('p');
        actorName.classList.add('movie-actor-name');
        actorName.textContent = actor.name;

        const actorImage = document.createElement('img');
        actorImage.src = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
        actorImage.alt = `${actor.name} profile image`;
        actorImage.classList.add('movie-actor-img');

        actorDiv.appendChild(actorImage);
        actorDiv.appendChild(actorName);
        castContainer.appendChild(actorDiv);
      });
    });

    // 줄거리
    document.querySelector('#movie-overview').textContent = movieDetails.overview;
  }
}

displayMovieDetails();
fetchMovieCredits();
