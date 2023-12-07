import { getProducts } from "../../oldJs/data/fetchAPI.js"

const products = await getProducts();


export function displayProductDetails() {
    const cart = checkCart(products);
    setTimeout(function(){
        console.log(cart);
    }, 1000);
}



export function checkCart(products){
    let productsInCart = []
    for (let i = 0; i < products.length; i++) {
        if (localStorage.getItem(`product${products[i].title}`)) {
            let purchase = {
                productId: products[i].id, 
                size: localStorage.getItem(`size${products[i].title}`)
            } 
            purchase.push(productsInCart);
        }
    } 
    return productsInCart; 
}

