const productListContainer = document.querySelector(".product_list_container");
let url = "https://kea-alt-del.dk/t7/api/products";

function showProducts(data) {
  const markup = data
    .map(
      (product) => `
    <div class="product_list_item discounted">
        <figure>
          <a href="product.html?id=${product.id}"
            ><img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Product Image"/>
          </a>
        </figure>

          <p>${product.productdisplayname}</p>
          <p class="brand_and_type">${product.brandname} | ${product.articletype}</p>
          <div class="product_prices">
            <p class="sale_price">3950 kr.</p>
            <p class="standard_price">${product.price} kr.</p>
          </div> 
          </div>`
    )
    .join("");

  productListContainer.innerHTML = markup;
}

function collectData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => showProducts(data));
}

collectData();

console.log(url);
