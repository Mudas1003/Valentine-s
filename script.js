const moveButton = document.getElementById('moveButton');

moveButton.addEventListener('click', () => {
  const newX = Math.random() * (window.innerWidth - moveButton.offsetWidth);
  const newY = Math.random() * (window.innerHeight - moveButton.offsetHeight);
  moveButton.style.left = `${newX}px`;
  moveButton.style.top = `${newY}px`;
});

 