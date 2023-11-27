// ID by URL
export function getProductIdFromURL() {
    const queryString = document.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = urlParams.get('id');
    return productId;
}