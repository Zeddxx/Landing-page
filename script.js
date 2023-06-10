const hamburgerEl = document.querySelector('.hamburger'),
      menuEl = document.querySelector('.menu');

hamburgerEl.addEventListener('click', () => {
    hamburgerEl.classList.toggle('active');
    menuEl.classList.toggle('toggle');
});

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
textLoad()
setInterval(textLoad,15000)