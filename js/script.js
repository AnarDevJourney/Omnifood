const headerEl = document.querySelector('.header')
const btnEl = document.querySelector('.btn-menu')

btnEl.addEventListener('click' , function(){
    headerEl.classList.toggle('nav-open')
})