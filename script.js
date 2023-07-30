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

        let blur = document.querySelector('.blur-circle');
        document.addEventListener('mousemove', (e) => {
            
            blur.style.left = e.clientX - 60 + 'px';
            blur.style.top = e.clientY - 60 + 'px';
            // console.log(e.clientX);
            // console.log(e.clientY);
        })

const tl = gsap.timeline({defaults: {ease : "power2.out"}})
tl.to('.word', {y: '0%', duration: 1, stagger: .3})
tl.to('.loading', {y: "-100%", duration: 1, delay: 1})
tl.to('.intro', {y: '-100%', duration: 1}, '-=.8')
tl.fromTo('.navbar', {y: "-100%", duration: 1}, {y: "0%", duration: 1})
tl.fromTo('.logo', {x: "-150%", duration: 1, opacity: 0}, {x: "0", duration: 1, opacity: 1})
tl.fromTo('.menu', {x: "150%", duration: 1, opacity: 0}, {x: "0", duration: 1, opacity: 1}, "-=1")
tl.fromTo('.hamburger-btn', {x: "100%", duration: 1, opacity: 0}, {x: "0", duration: 1, opacity: 1}, "-=1")