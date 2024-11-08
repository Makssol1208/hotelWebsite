const navBtn = document.querySelector('.menu-icon-wrapper');
const navBtnImg = document.querySelector('.menu-icon');

navBtn.addEventListener('click', () => {
    navBtnImg.classList.toggle('menu-icon-active');
    document.body.classList.toggle('_lock');
    document.querySelector('.nav ul').classList.toggle('open');
});