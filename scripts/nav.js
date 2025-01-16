const hamburgerBtn = document.getElementById('hamburger-btn');
hamburgerBtn.addEventListener('click', () => {
  const navList = document.querySelector('.header__nav');
  navList.classList.toggle('header__nav--is-open');
});

const navList = document.querySelector('.header__nav');
const navItems = navList.children;
if (window.location.pathname === '/') {
  navItems[0].classList.add('header__nav--is-active');
}