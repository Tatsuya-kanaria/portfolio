const backBtn = document.getElementById('back-btn');

window.addEventListener('scroll', () => {
  const scrollValue = document.scrollingElement.scrollTop;

  if (scrollValue >= 300) {
    backBtn.style.display = 'inline-block';
  }

  else {
    backBtn.style.display = 'none';
  }
});
