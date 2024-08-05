document.addEventListener('DOMContentLoaded', () => {
  // top button
  console.log(document.documentElement.scrollTop);

  const topButton = document.querySelector('.move-top-button');

  const scrollFunction = () => {
    if (document.documentElement.scrollTop > 500) {
      topButton.style.display = 'block';
    } else {
      topButton.style.display = 'none';
    }
  };

  window.onscroll = function () {
    scrollFunction();
  };

  topButton.addEventListener('click', () => {
    // document.documentElement.scrollTop = 0;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
