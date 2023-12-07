import { createHome } from "./pages/home.js";
import { createProducts } from "./pages/products.js";

switch (removeSlashAndHtml(location.pathname)) {
    case "product":
        createProducts();
        break;
    case "specific":
        //Code here
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
    case "/":
        createHome();
        break;


}

function removeSlashAndHtml(inputString) {
    let modifiedString = inputString.replace(/\//g, '').replace(/\.html/g, '');
    return modifiedString;
}