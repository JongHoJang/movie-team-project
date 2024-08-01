const commentForm = document.getElementById('commentForm');
const usernameInput = document.getElementById('usernameInput');
const commentInput = document.getElementById('commentInput');
const commentList = document.getElementById('commentList');

commentForm.addEventListener('submit',  (event) => {
    event.preventDefault();

    const usernameValue = usernameInput.value.trim();
    const commentValue = commentInput.value.trim();

    if (usernameValue && commentValue) {
        const comment = document.createElement('li'); 
        comment.innerText = `${usernameValue}, ${commentValue}`;
        commentList.appendChild(comment);
        console.log(comment.innerText);
    } else {
        alert('값을 입력해주세요');
    }

    usernameInput.value = '';
    commentInput.value = '';
})