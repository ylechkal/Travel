function getProduct(){
    let productLocalStorage = localStorage.getItem('basket')
    if (productLocalStorage !== null){
        return JSON.parse(productLocalStorage)
    } 
    console.log(productLocalStorage)
    return []
}

function putProduct(id){
    let products = getProduct()
    let index = products.indexOf(id)
    let pushProduct = false
    if (index === -1){
        products.push(id)
        pushProduct = true
    }
    else {
        products.splice(index, 1)
    }
    localStorage.setItem('basket', JSON.stringify(products))
    return {
        pushProduct,
        products
    }
}