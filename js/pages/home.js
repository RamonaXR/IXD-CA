import { renderJacketsHome } from "../rendering/renderHome.js";
import { url } from "../data/constants.js";
import { fetchData } from "../data/fetchApi.js";

export async function createHome(){
    try {
        const products = await fetchData(url);
        renderJacketsHome(products);
        console.log(products);
    } catch (error) {
        console.log(error);
        
    }
}