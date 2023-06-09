const hamburgerEl = document.querySelector('.hamburger-btn'),
      menuEl = document.querySelector('.menu');

// hamburgerEl.addEventListener('click', () => {
//     hamburgerEl.classList.toggle('active');
//     menuEl.classList.toggle('toggle');
// });

const activeClass = "active";
const aliveClass = "toggle";
// const showClass = "show";
const overlayEl = document.querySelector(".overlay");
let isHamburgerOpen = false;

function toggleNav() {
  hamburgerEl.classList.toggle(activeClass);
  menuEl.classList.toggle(aliveClass);
//   overlayEl.classList.toggle(showClass);

  isHamburgerOpen = !isHamburgerOpen;

  if (isHamburgerOpen) {
    document.body.style.overflow = "hidden"; // Disable scroll
    window.addEventListener("scroll", disableScroll);
  } else {
    document.body.style.overflow = ""; // Enable scroll
    window.removeEventListener("scroll", disableScroll);
  }
}

function disableScroll(event) {
  event.preventDefault();
  event.stopPropagation();
}

hamburgerEl.addEventListener("click", toggleNav);

setTimeout(() => {
    const element = document.querySelector('.bot');
    element.classList.add("show");
    }, 12000);
      

const textEl = document.querySelector('.text');
const textLoad = () => {
    setTimeout(() => {
        textEl.textContent = 'Personal';
    },0)
    setTimeout(() => {
        textEl.textContent = 'Buisness';
    },5000)
    setTimeout(() => {
        textEl.textContent = 'Company';
    },10000)
}
textLoad();
setInterval(textLoad,15000);

const worksEl = document.querySelector('.works'),
      optionEl = document.querySelector('.option'); 
      
    worksEl.addEventListener('click', () => {
        optionEl.classList.toggle('showOption');
    })