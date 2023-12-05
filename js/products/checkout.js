import { getProducts } from "./../data/fetchAPI.js"

const products = getProducts();


export function displayProductDetails(product) {
  const productImageContainer = document.getElementById("productImageContainer");
  const productInfoContainer = document.getElementById("productInfoContainer");

  productImageContainer.innerHTML = `<img src="${product.image}" alt="${product.title}" />`;
  productInfoContainer.innerHTML = `
    <h2 class="flex cart-left">${product.title}</h2>
    <p>${product.description}</p>
    <p>Size: [Your Size Selection]</p>
    <span class="price">${product.price}$</span>
    <p>Qty:1</p>
  `;
}



function checkCart(){
    for (let i = 0;)
}