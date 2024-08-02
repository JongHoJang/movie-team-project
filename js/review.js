document.addEventListener('DOMContentLoaded', () => {
    // 리뷰 데이터 로드 및 초기화
    let storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];

    const reviewForm = document.getElementById('reviewForm');
    const reviewContainer = document.getElementById('reviews');

    // 리뷰 화면에 띄우는 함수
    function displayReviews () {
        reviewContainer.innerHTML = storedReviews.map((review, index) => `
            <div class="reviewItem">
                ${review.author} - ${review.rating}<br>
                ${review.review}<br>
                <button data-index="${index}" class="deleteBtn">삭제</button>
            </div>
        `).join('');

        
        // 리뷰 삭제 버튼 클릭 시 -> 클릭된 버튼 참조(인덱스) -> 비번 확인 모달창on
        document.querySelectorAll('.deleteBtn').forEach(button => {
            button.addEventListener('click', (event) => {
                reviewToDeleteIndex = event.target.getAttribute('data-index');
                deleteModal.style.display = 'block';
            });
        });
    }

    const deleteModal = document.getElementById('deleteModal');
    const closeModal = deleteModal.querySelector('.close');
    const confirmDelete = document.getElementById('confirmDelete');
    const modalPassword = document.getElementById('modalPassword');
    let reviewToDeleteIndex = null;

    // 모달 창 닫기
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            deleteModal.style.display = 'none';
            modalPassword.value = '';
            reviewToDeleteIndex = null;
        });
    }

    // 모달 창에서 삭제 확인 버튼 클릭 시
    if (confirmDelete) {
        confirmDelete.addEventListener('click', () => {
            if (reviewToDeleteIndex !== null) {
                const enteredPassword = modalPassword.value;
    
                if (enteredPassword === storedReviews[reviewToDeleteIndex].password) {
                    storedReviews.splice(reviewToDeleteIndex, 1);
                    localStorage.setItem('reviews', JSON.stringify(storedReviews));
                    displayReviews();
                    deleteModal.style.display = 'none';
                    modalPassword.value = '';
                } else {
                    alert('비밀번호가 틀렸습니다.');
                    modalPassword.value = '';

                }
            }
        });
    }

    reviewForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const author = document.getElementById('author').value;
        const rating = document.getElementById('rating').value;
        const review = document.getElementById('review').value;
        const password = document.getElementById('password').value;

        storedReviews.push({ author, rating, review, password });
        localStorage.setItem('reviews', JSON.stringify(storedReviews));

        reviewForm.reset();
        displayReviews();
    });

    displayReviews();
});