// Fetch jackets

export const url = "https://api.noroff.dev/api/v1/rainy-days";

export async function getProducts() {
    const response = await fetch(url); 

    const data = await response.json();

    const products = data;

    return products;
}