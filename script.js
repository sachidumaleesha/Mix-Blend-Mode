const ghost = document.querySelector('.ghost');

window.addEventListener('scroll', function() {
  const h1Element = document.querySelector('h1');
  const h1Bounding = h1Element.getBoundingClientRect();
  const ghostBounding = ghost.getBoundingClientRect();

  // Check if the ghost and h1 elements overlap
  if (
    ghostBounding.left < h1Bounding.right &&
    ghostBounding.right > h1Bounding.left &&
    ghostBounding.top < h1Bounding.bottom &&
    ghostBounding.bottom > h1Bounding.top
  ) {
    ghost.style.opacity = '0.5'; // Adjust the opacity value as needed
  } else {
    ghost.style.opacity = '1'; // Reset the opacity when not overlapping
  }
});
