// создать массив 
// создать функцию в которой массив с картинками будет обрабатываться через Math.random()
// создать функцию через которую будет находить картинку которая лежит в контейнере
// добавить к предыдущей функции переменную которая вызывает функцию с Math.random()
// к переменной к которой мы нашли картинку добавить свойство background-image значением которого
// является функция с Math.random()
// вызвать функцию через set-interval

let img = ['image/bg4.jpg','image/bg5.jpg','image/bg6.jpg','image/bg.png']
function randomImage(img) {
    let randomMain = Math.floor(Math.random() * img.length);
    return img[randomMain]
}

function image() {
    let bg = document.querySelector('#bg')
    let randomBg = randomImage(img)
    bg.style.backgroundImage = `url("${randomBg}")`;
}

setInterval(image,5000)