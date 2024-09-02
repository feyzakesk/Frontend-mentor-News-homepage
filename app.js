let menuBtn = document.querySelector('.menu');
let backdrop = document.querySelector('.backdrop');
let closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', (e) => {
    document.body.classList.add('lock');
    backdrop.style.display = "block";
    backdrop.classList.add("show");
});

closeBtn.addEventListener('click', (e) => {
    document.body.classList.remove('lock');
    backdrop.style.display = "none";
    backdrop.classList.remove("show");
});