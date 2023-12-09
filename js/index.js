import { createHome } from "./pages/home.js";
import { createProducts } from "./pages/products.js";
import { createSpecific } from "./pages/specific.js";
import { addToCart } from "./localStorage/button.js";

switch (removeSlashAndHtml(location.pathname)) {
    case "product":
        createProducts();
        break;
    case "specific":
        createSpecific();
        setTimeout(addToCart, 1000);
        break; 
    case "checkout":
        //Code here
        break;
    case "contact":
        //Code here
        break; 
    case "about":
        //Code here
        break; 
    case "sucsess":
        //Code here
        break;
    case "index":
        createHome();
}

if (location.pathname === "/"){
    createHome();
} 

function removeSlashAndHtml(inputString) {
    let modifiedString = inputString.replace(/\//g, '').replace(/\.html/g, '');
    return modifiedString;
}