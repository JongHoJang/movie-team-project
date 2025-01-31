const reviewUrl = new URL(window.location.href);
const reviewUrlParams = reviewUrl.searchParams;
const reviewMovieId = reviewUrlParams.get('id');
console.log(reviewMovieId);

let storedReviews = JSON.parse(localStorage.getItem(`movie_${reviewMovieId}`)) || [];

const reviewForm = document.getElementById('review-form');
const reviewContainer = document.getElementById('reviews');
const confirmModal = document.getElementById('confirm-modal');
const modifyModal = document.getElementById('modify-modal');

// 삭제할, 수정할 리뷰의 인덱스
let reviewToDeleteIndex = null;
let reviewToModifyIndex = null;

//화면에 리뷰 띄우기
function displayReviews() {
  reviewContainer.innerHTML = storedReviews
    .map(
      (review, index) => `
            <div class="review-item">
              <div class="review-item-top">
                ${review.author} ${review.rating}
                <div class="review-item-bottom">
                  <button data-index="${index}" class="modify-btn"><i class="fa-solid fa-pen"></i></button>
                  <button data-index="${index}" class="delete-btn"><i class="fa-solid fa-trash"></i></button>
                </div>
              </div>
              <div class="review-item-middle">
                ${replaceNewlineWord(review.review)}
              </div>
            </div>
        `
    )
    .join('');

  // 리뷰 삭제 버튼 클릭 시 비밀번호 확인 모달 열기
  document.querySelectorAll('.delete-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
      reviewToDeleteIndex = Number(event.target.getAttribute('data-index'));
      console.log('삭제할 리뷰 인덱스:', reviewToDeleteIndex);
      openModal(confirmModal, 'delete');
    });
  });

  // 리뷰 수정 버튼 클릭 시 비밀번호 확인 모달 열기
  document.querySelectorAll('.modify-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
      reviewToModifyIndex = Number(event.target.getAttribute('data-index'));
      console.log('수정할 리뷰 인덱스:', reviewToModifyIndex);
      openModal(confirmModal, 'modify');
    });
  });
}

function openModal(modal, actionType) {
  modal.style.display = 'block';
  modal.dataset.actionType = actionType;
}

function closeModal(modal) {
  modal.style.display = 'none';
  modal.dataset.actionType = '';
}

// 비밀번호 맞는지 확인
function handlePasswordConfirm(index, callback) {
  const enteredPassword = document.getElementById('modal-password-input').value;
  console.log('입력된 비밀번호:', enteredPassword);
  console.log('저장된 비밀번호:', storedReviews[index].password);
  if (enteredPassword === storedReviews[index].password) {
    callback();
    closeModal(confirmModal);
  } else {
    alert('The password is wrong');
    return;
  }
  document.getElementById('modal-password-input').value = '';
}

// 비밀번호 확인 모달 닫기
confirmModal.querySelector('.close-confirm-modal').addEventListener('click', () => {
  closeModal(confirmModal);
});

// 비밀번호 확인 모달 -> 비밀번호 확인 버튼 클릭 시
// (삭제할or수정할 리뷰글 인덱스가 존재할 경우)
document.getElementById('confirm-password').addEventListener('click', () => {
  console.log('confirm-password 버튼 클릭됨');
  const actionType = confirmModal.dataset.actionType;

  if (actionType === 'delete' && reviewToDeleteIndex !== null) {
    handlePasswordConfirm(reviewToDeleteIndex, () => {
      storedReviews.splice(reviewToDeleteIndex, 1);
      localStorage.setItem(`movie_${reviewMovieId}`, JSON.stringify(storedReviews));
      displayReviews();
      reviewToDeleteIndex = null;
    });
  } else if (actionType === 'modify' && reviewToModifyIndex !== null) {
    handlePasswordConfirm(reviewToModifyIndex, () => {
      populateModifyModal(reviewToModifyIndex);
      openModal(modifyModal);
      console.log('수정 모달 열기');
    });
  }
});

// 수정 모달 닫기
modifyModal.querySelector('.close-modify-modal').addEventListener('click', () => {
  closeModal(modifyModal);
});

// 수정 모달 -> 리뷰 수정 확인 버튼 클릭 시
document.getElementById('confirm-modify-review').addEventListener('click', () => {
  console.log('confirm-modify-review 버튼 클릭됨');
  if (reviewToModifyIndex !== null) {
    const updatedRating = document.getElementById('modify-rating').value;
    const updatedReview = document.getElementById('modify-review').value;
    console.log('수정할 별점:', updatedRating);
    console.log('수정할 리뷰:', updatedReview);
    console.log('수정할 리뷰 인덱스:', reviewToModifyIndex);

    if (updatedRating !== 'none') {
      // 데이터 업데이트
      storedReviews[reviewToModifyIndex] = {
        ...storedReviews[reviewToModifyIndex],
        rating: updatedRating,
        review: updatedReview
      };

      localStorage.setItem(`movie_${reviewMovieId}`, JSON.stringify(storedReviews));
      displayReviews();
      closeModal(modifyModal);
      reviewToModifyIndex = null;
    } else {
      alert('Please choose a rating');
      return;
    }
  }
});

// 리뷰 폼 제출 시
reviewForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const author = document.getElementById('author').value;
  const rating = document.getElementById('rating').value;
  const reviewText = document.getElementById('review').value;
  const password = document.getElementById('password').value;

  if (rating !== 'none') {
    storedReviews.push({ author, rating, review: reviewText, password });
    localStorage.setItem(`movie_${reviewMovieId}`, JSON.stringify(storedReviews));

    reviewForm.reset();
    displayReviews();
  } else {
    alert('Please choose a rating');
  }
});

// 수정 모달 입력필드에 리뷰 데이터 채우기
function populateModifyModal(index) {
  const reviewData = storedReviews[index];
  document.getElementById('modify-rating').value = reviewData.rating;
  document.getElementById('modify-review').value = reviewData.review;
}

function replaceNewlineWord(reviewText) {
  return reviewText.replaceAll('\n', '<br>');
}

displayReviews();
