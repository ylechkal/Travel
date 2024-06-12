document.addEventListener('DOMContentLoaded', () => {
    let cart = document.querySelector('.cart__content')
    let products = getProduct()
    products.forEach(id =>{
        let item = cards.find((item) => item.id === id)
        if (item)
        createCard(item)
    })
    function createCard(item) {
        let main = document.createElement('div'),
        
            info = document.createElement('div'),

            img = document.createElement('img'),

            text = document.createElement('div'),

            header = document.createElement('h1'),

            about = document.createElement('p'),

            price = document.createElement('p'),

            input = document.createElement('input');

        main.classList.add('cart__main')

        info.classList.add('cart__info')

        img.classList.add('cart__img')
        img.src = item.image

        text.classList.add('cart__text')

        header.textContent = item.header

        about.textContent = item.text

        price.classList.add('cart__text_price')
        price.textContent = item.actualPrice

        input.classList.add('cart__input')
        input.setAttribute('type','number')
        input.setAttribute('min','1')
        input.setAttribute('value','1')

        cart.appendChild(main)
        main.appendChild(info)
        info.appendChild(img)
        info.appendChild(text)
        text.appendChild(header)
        text.appendChild(about)
        text.appendChild(price)
        main.appendChild(input)

        // cart.appendChild(main)
    }
})

// создаем карточку в html (шаблон)
// по шаблону создаем карточку html в JS
// т.к. карточки по шаблону одинаковые, а по информации в них разные, создаем массив с данными,
// в которм каждая карточка - объект
// В корзине отображение самой карточки будет отличаться, поэтому также создаем шаблон и внутрь шаблона добавляем
// данные из массива карточки
// И в первом, и во втором случае обрабатываем массив с помощью цикла forEach, в котором получаем данные из каждого
// объекта карточки

let clearButton = document.querySelector('#clear_button')
// localStorage.setItem('basket', JSON.stringify(products))
clearButton.onclick = () => {
    localStorage.removeItem('basket')
    location.reload()
}

// сумма товаров
function calcSum() {
    let products = getProduct()
    let zero = 0
    products.forEach(id =>{
        let quantity = cards.find((item) => item.id === id)
        if (quantity) {
            zero += quantity.actualPrice
            console.log(quantity.actualPrice)
        }   
    })
    let result = document.querySelector('.cart__title')
    result.textContent = `Итого: ${zero} руб.`
}
calcSum()