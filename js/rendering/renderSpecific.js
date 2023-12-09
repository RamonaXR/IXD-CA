export function renderSpecific(jacket){
    const parent = document.querySelector(".container-spesific");

    parent.innerHTML = "";

    const element = document.createElement("section");
    element.classList.add("flex", "flex-1", "flex-wrap", "left-side");

    const heading = document.createElement("h1");
    heading.textContent = jacket.title;
    element.append(heading);

    const image = document.createElement("img");
    image.src = jacket.image;
    image.setAttribute("alt", "One of our finest " + jacket.title);
    element.append(image);

    const secondConatiner = document.createElement("div");
    secondConatiner.classList.add("flex", "flex-1", "flex-wrap", "left-side");

    const firstChildContainer = document.createElement("div");
    firstChildContainer.classList.add("flex", "flex-wrap", "flex-1", "p-2");
    secondConatiner.append(firstChildContainer);

    const childParagraph = document.createElement("p");
    childParagraph.classList.add("p-spes");
    childParagraph.textContent = jacket.description;
    firstChildContainer.append(childParagraph);

    const price = document.createElement("span");
    price.textContent = "$ " + jacket.price;
    price.classList.add("price");
    secondConatiner.append(price);

    const gender = document.createElement("span");
    gender.textContent = jacket.gender;
    gender.classList.add("gender");
    secondConatiner.append(gender);

    const sizeContainer = document.createElement("div");
    sizeContainer.classList.add("flex", "sizes");
    secondConatiner.append(sizeContainer);

    const sizeLabel = document.createElement("label");
    sizeLabel.setAttribute("for", "sizes");
    sizeLabel.textContent = "Pick your size:";
    sizeContainer.append(sizeLabel);

    const sizeSelect = document.createElement("select");
    sizeSelect.classList.add("sticky", "send-size");
    sizeSelect.setAttribute("name", "sizes");
    sizeSelect.setAttribute("id", "sizes");
    sizeContainer.append(sizeSelect);

    for (let i = 0; i < jacket.sizes.length; i++){
        const option = document.createElement("option");
        option.setAttribute("value", jacket.sizes[i]);
        option.textContent = jacket.sizes[i];
        sizeSelect.append(option);
    }

    const btn = document.createElement("button");
    btn.classList.add("cta-add-to-cart", "button");
    btn.setAttribute("id", "checkout-btn");
    btn.textContent = "Add to cart";
    secondConatiner.append(btn);

    const childContainer = document.createElement("div");
    childContainer.classList.add("flex", "delivery");
    
    const childImage1 = document.createElement("img");
    childImage1.src = "./Images/Delivery.png";
    childImage1.setAttribute("alt", "Icon");
    childContainer.append(childImage1);

    const child1Paragraph = document.createElement("p");
    child1Paragraph.textContent = "Always free shipping!";
    childContainer.append(child1Paragraph);
    
    secondConatiner.append(childContainer);

    const childContainer2 = document.createElement("div");
    childContainer2.classList.add("flex", "delivery");

    const childImage2 = document.createElement("img");
    childImage2.src = "./Images/Return.png";
    childImage2.setAttribute("alt", "Icon");
    childContainer2.append(childImage2);

    const child2Paragraph = document.createElement("p");
    child2Paragraph.textContent = "Free 30-day return policy";
    childContainer2.append(child2Paragraph);

    secondConatiner.append(childContainer2);

    const childContainer3 = document.createElement("div");

    const childImage3 = document.createElement("img");
    childImage3.src = "./Images/Stars.svg";
    childImage3.setAttribute("alt", "stars");
    childContainer3.append(childImage3);

    secondConatiner.append(childContainer3);


    parent.append(element);
    parent.append(secondConatiner);
}