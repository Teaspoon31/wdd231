const menuButton = document.getElementById('menu');
const navLinks = document.getElementById('navLinks');

menuButton.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});
