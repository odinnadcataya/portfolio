const navBtn = document.querySelector ('.nav-button');
const mobileNav = document.querySelector ('.mobile-nav');
const navBtnClose = document.querySelector ('.button-close-wrap');
const body = document.body;

navBtn.addEventListener('click', function () {
    mobileNav.classList.toggle('mobile-nav-active');
    body.classList.toggle('no-scroll');
})

navBtnClose.addEventListener('click', function (){
    mobileNav.classList.toggle('mobile-nav-active');
    body.classList.toggle('no-scroll');
})

