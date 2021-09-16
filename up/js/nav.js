const hamburger = document.querySelector('.header__menu')
const header = document.querySelector('.header')
const overlay = document.querySelector('.header__overlay')

hamburger.addEventListener('click', () => {
    header.classList.toggle('open')
    overlay.classList.toggle('open')
})

overlay.addEventListener('click', () => {
    header.classList.remove('open')
    overlay.classList.remove('open')
})