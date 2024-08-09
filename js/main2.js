const mainMenuEl = document.querySelector('.main-menu');
const menuBgEl = document.querySelector('.menu-bg');

// console.log(mainMenuEl);
// console.log(mainBgEl);
// hover는 mouseover, hover 푸는건 mouseout << 2개가 세트로 다님.
mainMenuEl.addEventListener('mouseover',function(){
    menuBgEl.classList.add('on');
});
mainMenuEl.addEventListener('mouseout',function(){
    menuBgEl.classList.remove('on');
});
menuBgEl.addEventListener('mouseover',function(){
    menuBgEl.classList.add('on');
    mainMenuEl.classList.add('on');
});
menuBgEl.addEventListener('mouseout',function(){
    menuBgEl.classList.remove('on');
    mainMenuEl.classList.remove('on');
});

const mobileMenuEl = document.querySelector('.mobile-menu');
const mobileBoxEl = document.querySelector('.mobile-box');
const closeMenuEl = document.querySelector('.close');

mobileMenuEl.addEventListener('click', function(){
    mobileBoxEl.classList.add('show');
});


closeMenuEl.addEventListener('click', function(){
    mobileBoxEl.classList.remove('show');
});