const navToggle = document.querySelector('#nav-toggle'),
  navMenu = document.querySelector('.nav-menu');

// Event Listener
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

window.addEventListener('resize', () => {
  const winWidth = window.innerWidth;
  if (winWidth > 992) {
    navMenu.classList.remove('show');
  }

});

// search

const searchIcon = document.querySelector('.search-icon'),
  searchScreen = document.querySelector('.search-screen'),
  closeSearch = document.querySelector('.close');

searchIcon.addEventListener('click', () => {
  searchScreen.classList.add('active');
});

closeSearch.addEventListener('click', () => {
  searchScreen.classList.remove('active');
});