export function renderProducts(products){
    const parent = document.querySelector(".lightweight-products");
    parent.innerHTML = ""; 

    for (let i = 0; i < products.length; i++){
        const element = document.createElement("section");
        element.classList.add("jackets");
    
        const heading = document.createElement("h2");
        heading.textContent = products[i].name; 
        heading.classList.add("h2-jackets");
        element.append(heading);

        const image = document.createElement("img");
        image.src = products[i].images[0].src;
        image.setAttribute("alt", products[i].images[0].alt);
        image.classList.add("product-jackets");
        element.append(image);

        const description = document.createElement("p");
        description.innerHTML = products[i].description;
        description.classList.add("producttext");
        element.append(description);

        const gender = document.createElement("span");
        gender.textContent = products[i].categories[0].name;
        element.append(gender);

        const price = document.createElement("span");
        price.textContent = products[i].prices.currency_prefix + products[i].prices.price / 100;
        price.classList.add("price");
        element.append(price); 

        const btn = document.createElement("a");
        btn.href = "../specific.html" + "?id=" + products[i].id;
        btn.classList.add("button");
        btn.textContent = "Check it out";
        element.append(btn);

        parent.append(element);
    }
} 