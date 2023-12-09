import { createHome } from "./pages/home.js";
import { createProducts } from "./pages/products.js";
import { createSpecific } from "./pages/specific.js";

switch (removeSlashAndHtml(location.pathname)) {
    case "product":
        createProducts();
        break;
    case "specific":
        createSpecific();
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

}

function removeSlashAndHtml(inputString) {
    let modifiedString = inputString.replace(/\//g, '').replace(/\.html/g, '');
    return modifiedString;
}