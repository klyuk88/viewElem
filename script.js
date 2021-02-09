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


console.log(window.pageYOffset + rectElem.top) //расстояние от верхеней границы документа до верхней границы элемента. window.pageYOffset - расстояние от верхней границы окна до верхней границы элемента. rectElem.top - рассояние от верхней границы элемента до верхней границы окна





