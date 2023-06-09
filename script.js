const hamburgerEl = document.querySelector('.hamburger'),
      menuEl = document.querySelector('.menu');

hamburgerEl.addEventListener('click', () => {
    hamburgerEl.classList.toggle('active');
    menuEl.classList.toggle('toggle');
})
      