const rotator = document.querySelectorAll('.rotator__case')
rotator.forEach((element) => {
    element.style.color = element.getAttribute('data-color')
})

let currentIndex = 0

function rotate() {
    rotator[currentIndex].classList.remove('rotator__case_active')
    currentIndex = (currentIndex + 1) % rotator.length
    rotator[currentIndex].classList.add('rotator__case_active')
    const duration = parseInt(rotator[currentIndex].getAttribute('data-speed'))
    setTimeout(rotate, duration)
}

rotate()