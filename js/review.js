document.addEventListener('DOMContentLoaded', () => {
    // 리뷰 데이터 로드 및 초기화
    let storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];

    const reviewForm = document.getElementById('reviewForm');
    const reviewContainer = document.getElementById('reviews');
    const confirmModal = document.getElementById('confirmModal');
    const modifyModal = document.getElementById('modifyModal');

    // 삭제할, 수정할 리뷰의 인덱스
    let reviewToDeleteIndex = null;
    let reviewToModifyIndex = null;

    //화면에 리뷰 띄우기
    function displayReviews() {
        reviewContainer.innerHTML = storedReviews.map((review, index) => `
            <div class="reviewItem">
                ${review.author} ${review.rating}<br>
                ${review.review}<br>
                <button data-index="${index}" class="modifyBtn">수정</button>
                <button data-index="${index}" class="deleteBtn">삭제</button>
            </div>
        `).join('');

        // 리뷰 삭제 버튼 클릭 시 비밀번호 확인 모달 열기
        document.querySelectorAll('.deleteBtn').forEach(button => {
            button.addEventListener('click', (event) => {
                reviewToDeleteIndex = event.target.getAttribute('data-index');
                openModal(confirmModal);
            });
        });

        // 리뷰 수정 버튼 클릭 시 비밀번호 확인 모달 열기
        document.querySelectorAll('.modifyBtn').forEach(button => {
            button.addEventListener('click', (event) => {
                reviewToModifyIndex = event.target.getAttribute('data-index');
                openModal(confirmModal);
            });
        });
    }

    function openModal(modal) {
        modal.style.display = 'block';
    }

    function closeModal(modal) {
        modal.style.display = 'none';
    }
    
    // 비밀번호 맞는지 확인
    function handlePasswordConfirm(index, callback) {
        const enteredPassword = document.getElementById('modalPasswordInput').value;
        if (enteredPassword === storedReviews[index].password) {
            callback();
            closeModal(confirmModal);
        } else {
            alert('비밀번호가 틀렸습니다.');
        }
        document.getElementById('modalPasswordInput').value = '';
    }

    // 비밀번호 확인 모달 닫기
    confirmModal.querySelector('.closeConfirmModal').addEventListener('click', () => {
        closeModal(confirmModal);
    });

    // 비밀번호 확인 모달 -> 비밀번호 확인 버튼 클릭 시
    // (삭제할or수정할 리뷰글 인덱스가 존재할 경우)
    document.getElementById('confirmPassword').addEventListener('click', () => {
        if (reviewToDeleteIndex !== null) {
            handlePasswordConfirm(reviewToDeleteIndex, () => {
                storedReviews.splice(reviewToDeleteIndex, 1);
                localStorage.setItem('reviews', JSON.stringify(storedReviews));
                displayReviews();
            });
        } else if (reviewToModifyIndex !== null) {
            handlePasswordConfirm(reviewToModifyIndex, () => {
                populateModifyModal(reviewToModifyIndex);
                openModal(modifyModal);
            });
        }
    });

    // 수정 모달 닫기
    modifyModal.querySelector('.closeModifyModal').addEventListener('click', () => {
        closeModal(modifyModal);
    });

    // 수정 모달 -> 리뷰 수정 확인 버튼 클릭 시
    document.getElementById('confirmModifyReview').addEventListener('click', () => {
        if (reviewToModifyIndex !== null) {
            const updatedRating = document.getElementById('modifyRating').value;
            const updatedReview = document.getElementById('modifyReview').value;
            storedReviews[reviewToModifyIndex] = {
                ...storedReviews[reviewToModifyIndex],
                rating: updatedRating,
                review: updatedReview
            };
            localStorage.setItem('reviews', JSON.stringify(storedReviews));
            displayReviews();
            closeModal(modifyModal);
        }
    });

    // 리뷰 폼 제출 시
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

    // 수정 모달 입력필드에 리뷰 데이터 채우기
    function populateModifyModal(index) {
        const reviewData = storedReviews[index];
        document.getElementById('modifyRating').value = reviewData.rating;
        document.getElementById('modifyReview').value = reviewData.review;
    }

    displayReviews();
});
