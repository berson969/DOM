window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal')

    reveals.forEach( reveal => {
        const {top, bottom} = reveal.getBoundingClientRect()

        if (50 < bottom && top < window.innerHeight - 50) {
            reveal.classList.add('reveal_active')
        } else {
            reveal.classList.remove('reveal_active')
        }
    })

})