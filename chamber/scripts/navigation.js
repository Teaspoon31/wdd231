const menuButton = document.getElementById('menu');
const navLinks = document.getElementById('navLinks');

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
