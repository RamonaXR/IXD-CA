import { url } from "../data/constants.js";
import { fetchData } from "../data/fetchApi.js";
import { renderProducts } from "../rendering/renderProducts.js";

export async function createProducts(){
    try {
        const products = await fetchData(url);
        renderProducts(products); 
    } catch (error) {
        console.log(error);
    }
}