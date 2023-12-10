import { renderCheckout } from "../rendering/renderCheckout.js";
import { fetchData } from "../data/fetchApi.js";
import { url } from "../data/constants.js";

export async function createCheckout(){
    const products = await fetchData(url);
    const cart = checkStorage(products);
    const productsInCart = await fetchProduct(cart);
    setTimeout(renderCheckout(productsInCart, cart), 1000);

}

export function checkStorage(products){
    let cartContent = [];
    for (let i = 0; i < products.length; i++){
        if (localStorage.getItem(`product${products[i].title}`)){
            let object = {
                id: products[i].id, 
                size: localStorage.getItem(`size${products[i].title}`)
            }
            cartContent.push(object);
        }
    }
    return cartContent;
}

export async function fetchProduct(cart){
    let jackets = [];
    for (let i = 0; i < cart.length; i++){
        const newURL = url + "/" + cart[i].id;
        const jacket = await fetchData(newURL);
        jackets.push(jacket);
    }
    return jackets;
}