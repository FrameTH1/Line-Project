let section = document.querySelector('section')
let overlay = document.querySelector('.overlay')
let showBtn = document.querySelector('.show-modal')

var max_width = 640;
var widthOutput = window.innerWidth;

showBtn.addEventListener('click', () => {
    section.style.display = 'flex';
    section.classList.add('active');
});

overlay.addEventListener('click', () => {
    section.style.display = 'none';
    section.classList.remove('active');
});

local_location.addEventListener('click', () => {
    section.style.display = 'none';
    section.classList.remove('active');
});

