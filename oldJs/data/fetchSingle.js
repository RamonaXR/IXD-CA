import { createJacket } from "../../js/renderHTML/createJacket.js";
import { getProductIdFromURL } from "../../js/utility/productUtility.js";
import { url } from "./fetchAPI.js";
// Single jacket 

const id = getProductIdFromURL();
console.log(id);
export const newURL = url + "/" + id; 
console.log(newURL);


export async function fetchProduct (url) {
    try {
        const response = await fetch(url);
        const details = await response.json();
        createJacket(details, spesificContainer);
        title.innerHTML = `Rainy Days | ${details.title}`;
    return details;
    } catch (error) {
        console.log(error);
        spesificContainer.innerHTML = `<div class="error">Ups, an error occurred while loading this page.</div>`;
    }
}