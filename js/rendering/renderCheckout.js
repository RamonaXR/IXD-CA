

export function renderCheckout(jacket, cart){
    const cartContent = document.querySelector(".cart-content");
    const cartSummary = document.querySelector(".cart-summary");
    
    cartContent.innerHTML = "";
    for (let i = 0; i < jacket.length; i++){
        const cartContentContainer = document.createElement("div");
        cartContentContainer.classList.add("cart-wrap");

        const image = document.createElement("img");
        image.src = jacket[i].image;
        image.setAttribute("alt", `The finest ${jacket[i].title}`);
        cartContentContainer.append(image);

        const infoContainer = document.createElement("section");
        infoContainer.classList.add("cart-info-wrap");
        cartContentContainer.append(infoContainer);

        const heading = document.createElement("h2");
        heading.textContent = jacket[i].title; 
        infoContainer.append(heading);

        const container = document.createElement("div");
        infoContainer.append(container);

        const size = document.createElement("span");
        size.textContent = "size: " + cart[i].size;
        container.append(size);

        const price = document.createElement("span");
        price.textContent = "price: $ " + jacket[i].price;
        container.append(price);

        cartContent.append(cartContentContainer);
    }

    let sum = 0;
    for (let i = 0; i < jacket.length; i++){
        sum += jacket[i].price;
    }

    cartSummary.innerHTML = "";
    const element = document.createElement("div");
    element.classList.add("checkout-wrap");

    const totalPrice = document.createElement("span");
    totalPrice.textContent = "total price: $ " + sum;
    element.append(totalPrice);

    const purchaseBtn = document.createElement("a");
    purchaseBtn.href = "../sucsess.html";
    purchaseBtn.textContent = "Check out";
    purchaseBtn.classList.add("button");
    element.append(purchaseBtn);

    cartSummary.append(element);


}