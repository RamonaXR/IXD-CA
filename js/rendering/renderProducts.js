export function renderProducts(products){
    const parent = document.querySelector(".lightweight-products");
    parent.innerHTML = ""; 

    for (let i = 0; i < products.length; i++){
        const element = document.createElement("section");
        element.classList.add("jackets");
    
        const heading = document.createElement("h2");
        heading.textContent = products[i].title; 
        heading.classList.add("h2-jackets");
        element.append(heading);

        const image = document.createElement("img");
        image.src = products[i].image;
        image.setAttribute("alt", `This is our ${products[i].title} jacket`);
        image.classList.add("product-jackets");
        element.append(image);

        const description = document.createElement("p");
        description.textContent = products[i].description;
        description.classList.add("producttext");
        element.append(description);

        const gender = document.createElement("span");
        gender.textContent = products[i].gender;
        element.append(gender);

        const price = document.createElement("span");
        price.textContent = products[i].price;
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