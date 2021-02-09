function viewOnScroll(element) {
        const elements = document.querySelectorAll(element)
        const windowH = window.innerHeight
        window.addEventListener('scroll', () => {
            elements.forEach(item => {
                const rectElem = item.getBoundingClientRect()
                if (rectElem.top < windowH) { //в зоне видимости по верхней границе
                    console.log('Hello, i am element');
                }
                if ((rectElem.top + rectElem.height) < 0) { //вне зоны видимости по нижней границе
                     console.log('By');
                }
            })
        })
    }
    viewOnScroll('.picture-image')
