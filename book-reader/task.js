const bookControls = document.querySelectorAll('.font-size')

bookControls.forEach( bookControl => {
    bookControl.addEventListener('click', (event) => {
        event.preventDefault()

        bookControls.forEach(bookControl => {
                bookControl.classList.remove('font-size_active')
            })
        bookControl.classList.add('font-size_active')

        const size = bookControl.getAttribute('data-size')
        let bookClassList = bookControl.closest('.book').classList

        bookClassList.forEach(bookClass => {
            if (bookClass.slice(0, 8) === 'book_fs-') {
                bookClassList.remove(bookClass)
            }
        })

        if (size) {
            bookClassList.add(`book_fs-${size}`)
        }
    })
});

const colorControls = document.querySelectorAll('.color')

colorControls.forEach(colorControl => {
    colorControl.addEventListener('click', (event) => {
        event.preventDefault()

        let feature = 'color'
        let anotherAttr = 'white'

        event.target.parentNode.classList.forEach( className => {
            if(className.startsWith('book__control_')) {
                feature = (className === "book__control_color") ? 'color' : 'background'
            }
        })

        const anotherFeature = ( feature === 'color') ? 'background' : 'color'
        const attributeName = (feature === 'color') ? 'data-text-color' : 'data-bg-color'
        const featureAttr = colorControl.getAttribute(attributeName)
        const anotherAttributeName = (anotherFeature === 'color') ? 'data-text-color' : 'data-bg-color'

        colorControls.forEach( bookControl => {

            if(bookControl.parentElement.classList.contains(`book__control_${anotherFeature}`) && bookControl.classList.contains('color_active')) {
                anotherAttr = bookControl.getAttribute(anotherAttributeName)
            }
        })

        if(featureAttr.slice(0,4) !== anotherAttr.slice(0,4)) {
            colorControls.forEach(currentControl => {

                if (currentControl.parentElement.classList.contains(`book__control_${feature}`)) {
                    currentControl.classList.remove('color_active')
                }
            })

            colorControl.classList.add('color_active')

            const bookElement = colorControl.closest('.book')

            bookElement.classList.forEach(className => {
                const featureType = (feature === 'color') ? "book_color-" : "book_bg-"

                if(className.startsWith(featureType)) {
                    bookElement.classList.remove(className)
                }

                    bookElement.classList.add(`${featureType}${featureAttr}`)
            })

        }
    })
});