const likeBtn = document.getElementById('like-btn');
const likeCount = document.getElementById('like-count');
const hateBtn = document.getElementById('hate-btn');
const hateCount = document.getElementById('hate-count');

let likeCountValue;
let hateCountValue;

displaySavedCountingValue();

function displaySavedCountingValue() {
  const countValue = JSON.parse(localStorage.getItem('countValue'));
  if (countValue !== null) {
    likeCount.innerText = countValue.like;
    hateCount.innerText = countValue.hate;

    likeCountValue = countValue.like;
    hateCountValue = countValue.hate;
  }
}

function saveCountingValue(likeCountValue, hateCountValue) {
  const countValue = {
    like: likeCountValue,
    hate: hateCountValue
  };
  localStorage.setItem('countValue', JSON.stringify(countValue));
}

likeBtn.addEventListener('click', () => {
  if (likeCountValue == null) {
    likeCountValue = 0;
  }
  likeCountValue++;
  likeCount.innerText = likeCountValue;
  saveCountingValue(likeCountValue, hateCountValue);
});

hateBtn.addEventListener('click', () => {
  if (hateCountValue == null) {
    hateCountValue = 0;
  }
  hateCountValue++;
  hateCount.innerText = hateCountValue;
  saveCountingValue(likeCountValue, hateCountValue);
});
