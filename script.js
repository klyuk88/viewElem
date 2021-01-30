function viewOnScroll(element) {
        const elements = document.querySelectorAll(element)
        const windowH = window.innerHeight
        window.addEventListener('scroll', () => {
            elements.forEach(item => {
                const rectElem = item.getBoundingClientRect()
                if (rectElem.top < windowH) {
                    console.log('Hello, i am element');
                }
            })
        })
    }
    viewOnScroll('.picture-image')
