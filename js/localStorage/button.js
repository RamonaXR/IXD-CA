import { getID } from "../data/getID.js";
import { fetchData } from "../data/fetchApi.js";
import { url } from "../data/constants.js";

const id = getID();
const newURL = url + "/" + id; 
const product = await fetchData(newURL);

export function addToCart(){
    const btn = document.querySelector(".cta-add-to-cart");
    const select = document.querySelector("select");

    btn.addEventListener("click", onClick);

    function onClick(){
        localStorage.setItem(`product${product.title}`, product.id);
        localStorage.setItem(`size${product.title}`, select.value);
    }
}