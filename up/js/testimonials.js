const slides = document.querySelectorAll('.testimonials__content--slider__slide')
const indicatorImg = document.querySelectorAll('.testimonials__content--indicator__img')

console.log(indicatorImg);

for (const i of indicatorImg) {
    i.addEventListener('click', (e) => {
        for (const j of indicatorImg) {
           j.classList.remove('active')
        }
        i.classList.add('active')

        const id = i.getAttribute('data-id')

        for (const slide of slides) {
            slide.classList.remove('active')
        }

        slides[id].classList.add('active')
})
    
}