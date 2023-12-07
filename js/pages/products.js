import { url } from "../data/constants.js";
import { fetchData } from "../data/fetchAPI.js";
import { renderProducts } from "../rendering/renderProducts.js";

export async function createProducts(){
    try {
        const products = await fetchData(url);
        console.log(products);
        renderProducts(products); 
    } catch (error) {
        
    }
}