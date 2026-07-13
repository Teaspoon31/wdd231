const menuButton = document.getElementById('menu');
const navLinks = document.getElementById('navLinks');

menuButton.addEventListener('click', () => {
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
  }
});
