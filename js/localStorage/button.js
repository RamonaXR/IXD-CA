import { getProductIdFromURL } from "../utility/productUtility.js";
import { url } from "../data/fetchAPI.js";

const id = getProductIdFromURL ();
const newUrl = url + "/" + id;

console.log(id);
async function fetchProduct (url) {
        const response = await fetch(url);
        const details = await response.json();
        return details;
    
}

const product = await fetchProduct (newUrl);
console.log(product);
export function saveToStorage () {
    const size = document.querySelector(".send-size option");
    localStorage.setItem (`product${product.title}`, id);
    localStorage.setItem (`size${product.title}`, size.input);

}