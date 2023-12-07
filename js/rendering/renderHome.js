

export async function renderJacketsHome(products){
    const container = document.querySelector(".homepage-jackets");
    console.log(container);

    container.innerHTML = "";
    for (let i = 0; i < 3; i++){
        const element = document.createElement("div");

        const image = document.createElement("img");
        image.src = products[i].image;
        image.setAttribute("alt", `This is our ${products[i].title} that is for sale`);
        element.append(image);

        container.append(element);
    }
    
}