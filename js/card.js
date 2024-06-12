document.addEventListener('DOMContentLoaded', () => {
    let content = document.querySelector('.product__content')
    let catalog = document.querySelector('.product__content_catalog')
    cards.forEach(item => {
        createCard(item)
    })
    function createCard(item) {
        let card = document.createElement('div'),

            photo = document.createElement('img'),

            header = document.createElement('h1'),

            text = document.createElement('p'),

            price = document.createElement('div'),

            actual = document.createElement('p'),

            notactual = document.createElement('p'),

            button = document.createElement('button');

        card.classList.add('card')

        photo.classList.add('card__photo')
        photo.src = item.image

        header.classList.add('card__header')
        header.textContent = item.header

        text.classList.add('card__text')
        text.textContent = item.text

        price.classList.add('card__price')

        actual.classList.add('card__price_actual')
        actual.textContent = item.actualPrice

        notactual.classList.add('card__price_notactual')
        notactual.textContent = item.notActualPrice

        button.classList.add('card__button')
        button.textContent = item.button
        button.onclick = ()=> putProduct(item.id)

        content.appendChild(card)
        card.appendChild(photo)
        card.appendChild(header)
        card.appendChild(text)
        card.appendChild(price)
        price.appendChild(actual)
        price.appendChild(notactual)
        card.appendChild(button)

        if (item.popular === true) {
            content.appendChild(card)
        } else {
            catalog.appendChild(card)
        }
    }
})

