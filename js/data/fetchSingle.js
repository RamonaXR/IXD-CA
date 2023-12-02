import { createJacket } from "./../renderHTML/createJacket.js";
import { spesificContainer } from "../products/index.js";
import { title } from "../products/index.js";

// Single jacket 

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