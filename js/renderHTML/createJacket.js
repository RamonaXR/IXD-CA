export function createJacket(product, parent) {
    parent.innerHTML = `<section class="flex flex-1 flex-wrap left-side">
  <h1>${product.title}</h1>
  <img src="${product.image}" alt="Our finest jacket">
  </section>
  <section class="flex flex-1 flex-wrap left-side">
  <div class="flex flex-wrap flex-1 p-2">
  <p class="p-spes">${product.description}</p>
  </div>
  <span class="price">${product.price}</span>
<span class="gender">${product.gender}</span>
<div class="flex sizes">
  <label for="sizes">Pick your size:</label>
  <select class="sticky" name="sizes" id="sizes">
      <option value="XS">${product.sizes[0]}</option>
      <option value="S">${product.sizes[1]}</option>
      <option value="M">${product.sizes[2]}</option>
      <option value="L">${product.sizes[3]}</option>
      <option value="XL">${product.sizes[4]}</option>
      <option value="XXL">${product.sizes[5]}</option>
  </select>
  </div>
  <a href="checkout.html" class="button">Add to cart</a>
  <div class="flex delivery">
          <img src="Images/Delivery.png" alt="Icon" />
          <p>Always free shipping!</p>
        </div>
        <div class="flex delivery">
          <img src="Images/Return.png" alt="Icon" />
          <p>Free 30-day return policy</p>
        </div>
        <div>
          <img src="Images/Stars.svg" alt="stars" />
        </div>
      </section>`

  }