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

// API 호출
const fetchMovies = async (pages) => {
  const movies = [];

  for (let page = 1; page <= pages; page++) {
    try {
      const response = await fetch(`${BASE_URL}now_playing?language=en-US&page=${page}`, options);
      const data = await response.json();
      movies.push(...data.results);
    } catch (error) {
      console.error(`Error fetching page ${page}:`, error);
    }
  }

  return movies;
};

document.addEventListener('DOMContentLoaded', async () => {
  const movies = await fetchMovies(10);
  renderNowMovies(movies);
});

//
// 장르 토글
document.addEventListener('DOMContentLoaded', (event) => {
  const toggleButtons = document.querySelectorAll('.toggle-btn');

  toggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
      filterMovies();
    });
  });
});

function getGenreName(id) {
  const genres = {
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
  return genres[id] || 'etc';
}

// 영화 카드
const createNowMovieCard = (movie) => {
  const { poster_path, genre_ids } = movie;

  const card = document.createElement('div');
  const image = document.createElement('img');

  card.className = 'movie-card';
  // setAttribute함수를 통해 카드마다 장르값을 속성으로 추가
  card.setAttribute('data-genres', genre_ids.map((id) => getGenreName(id)).join(', '));
  image.src = `https://image.tmdb.org/t/p/w200${poster_path}`;
  console.log(card.getAttribute('data-genres')); // 리스트된 영화들의 장르들

  card.appendChild(image);
  return card;
};

// 영화 목록 렌더링
const renderNowMovies = (movies) => {
  const nowMovieContainer = document.getElementById('NowMovieContainer');
  nowMovieContainer.innerHTML = '';

  movies.forEach((movie) => {
    const movieCard = createNowMovieCard(movie);
    nowMovieContainer.appendChild(movieCard);
    // 쿼리 스트링
    movieCard.onclick = () => {
      window.location.href = `detailPage.html?id=${movie.id}`;
    };
  });
  filterMovies();
};

function filterMovies() {
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  const movieCards = document.querySelectorAll('.movie-card');

  // activeGenres는  active 클래스를 가진 버튼들로만 이루어진 배열
  const activeGenres = Array.from(toggleButtons) // 얕은 복사를 통해 유사 배열 객체를 일반 배열로 변환(배열 메서드 활용 가능해짐)
    .filter((button) => button.classList.contains('active'))
    .map((button) => button.textContent); //  토글 버튼의 텍스트 콘텐츠(장르 이름)를 가져오는 부분

  movieCards.forEach((card) => {
    const movieGenres = card.getAttribute('data-genres').split(', '); // 배열로 변환

    // 활성화된 토글버튼이 없거나, 선택된 모든 토글 버튼의 장르들이 포함하는지 확인 영화 카드를 표시
    const allGenresMatch = activeGenres.every((genre) => movieGenres.includes(genre)); // 두개 모두 true 인 경우 true를 반환

    //allGenresMatch가 true이면 선택된 모든 장르를 포함하는 영화이므로 카드를 표시
    if (activeGenres.length === 0 || allGenresMatch) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

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

        if (movies.length > 0) {
          movies.forEach((movie) => {
            const card = createNowMovieCard(movie);
            movieContainer.appendChild(card);
          });
        } else {
          openModal();
        }
      })
      .catch((error) => console.error('Error:', error));
  }
}

// 모달
function openModal() {
  document.getElementById('noResultModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('noResultModal').style.display = 'none';
}

document.getElementById('search-form').addEventListener('submit', search_movie);

window.onclick = function (event) {
  const modal = document.getElementById('noResultModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
