const productListContainer = document.querySelector(".product_list_container");
const productId = 1528;

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productListContainer.innerHTML = `
    
<div class="product_list_item discounted">
        <figure>
          <a href="product.html"
            ><img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="Product Image"/>
          </a>
        </figure>

          <p>${data.productdisplayname}</p>
          <p class="brand_and_type">${data.brandname} | ${data.articletype}</p>
          <div class="product_prices">
            <p class="sale_price">3950 kr.</p>
            <p class="standard_price">${data.price} kr.</p>
          </div>
    `;
  });
