import { createHtmlHome, products } from "./../renderHTML/renderHtmlHome.js";
import { getProductIdFromURL } from "../utility/productUtility.js";
import { fetchProduct } from "../data/fetchSingle.js";
import { selectJackets } from "../data/selectJackets.js";
import { displayProductDetails} from "./checkout.js";
import { fetchProductDetails } from "./checkout.js";

export const lightweight = document.querySelector(".lightweight-products");

const id = getProductIdFromURL();
export const spesificContainer = document.querySelector(".container-spesific");
export const url = "https://api.noroff.dev/api/v1/rainy-days/" + id;


export const title = document.querySelector("title");
const jacketContainer = document.querySelector(".homepage-jackets");

function renderJackets(jackets) {
    jacketContainer.innerHTML = "";
    for(let i = 0; i < 3; i++) {
        jacketContainer.innerHTML += `<img src="${jackets[i]}" alt="jackets"/>`
    }
} 


switch (location.pathname) {
    case "/product":  //Will not load on liveserver, but I am aware of why and what to do different in the future.
        try {
            createHtmlHome (products, lightweight);
        } catch (error) {
            lightweight.innerHTML = `<div class="error">Ups, an error occured while loading this page.</div>`;
            console.log("Ups, an error occured");
        }
        break; 
    case "/spesific.html": //Same issue as on product. I am aware of why and in the future I will make a better filestructure.
        fetchProduct();
        break;
    default:
        try {
            const e = selectJackets(products);
            renderJackets(e);
        } catch (error) {
            jacketContainer.innerHTML = `<div class="error">Ups, an error occured while loading this page.</div>`;
            console.log("Ups, an error occured");
        }
        break;
}