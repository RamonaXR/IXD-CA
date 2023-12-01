import { getProductIdFromURL } from "../utility/productUtility.js";



export async function fetchProductDetails() {
const productId = getProductIdFromURL();
  const url = `https://api.noroff.dev/api/v1/rainy-days/${productId}`;
  try {
    const response = await fetch(url);
    const product = await response.json();
    displayProductDetails(product);
  } catch (error) {
    console.error("Error fetching product details:", error);
  }
}

export function displayProductDetails(product) {
  const productImageContainer = document.getElementById(".flex image-cart");
  const productInfoContainer = document.getElementById(".flex jacket-info");

  productImageContainer.innerHTML = `<img src="${product.image}" alt="${product.title}" />`;
  productInfoContainer.innerHTML = `
    <h2 class="flex cart-left">${product.title}</h2>
    <p>${product.description}</p>
    <p>Size: [Your Size Selection]</p>
    <span class="price">${product.price}$</span>
    <p>Qty:1</p>
  `;
}

fetchProductDetails();