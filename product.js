const productItem = document.querySelector(".product_item");
const productId = 1528;

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productItem.innerHTML = `
    
        <h3 class="designation">${data.category} / ${data.subcategory} / ${data.articletype}</h3>

        <div class="grid_1-1 discounted">
          <img
            src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp"
            alt="Product Image"
          />

          <div>
            <h2>${data.productdisplayname}</h2>

            <div class="product_prices">
              <p class="sale_price">3950 kr.</p>
              <p class="standard_price">${data.price} kr.</p>
            </div>

            <p class="product_description">
              Black jacket made of blended fabric, has full sleeves with ribbed
              cuffs, full front zippered placket, spread collar, a patch pocket
              on the left chest, ferrari branding on left chest, Italy's flag
              colours above the pocket and at the hemline.
            </p>

            <a class="basket_btn" href=""><p>ADD TO BASKET</p></a>

            <button class="accordion">DETAILS</button>
            <div class="panel">
              <h4>Season:</h4>
              <p>${data.season}</p>
              <h4>Production Year:</h4>
              <p>${data.productionyear}</p>
              <h4>Useage:</h4>
              <p>${data.usagetype}</p>
              <h4>Variant Name:</h4>
              <p>${data.variantname}</p>
              <h4>Brand:</h4>
              <p>${data.brandname}</p>

              <p class="brand_description">
                Puma's Ferrari merchandise never goes out of demand. The brand
                sticks to its minimalist style while flaunting Italian colours
                on this jacket. Pair this with denims and a sober tee.
              </p>

              <img
                class="brand_image"
                src="${data.brandimage}"
                alt="Brand Logo"
              />
            </div>

            <button class="accordion">WASH CARE</button>
            <div class="panel">
              <ul>
                <li>Gentle machine wash in cool water</li>
                <li>Do not bleach</li>
                <li>Tumble dry at low temperature</li>
                <li>Warm iron</li>
                <li>Do not dry clean</li>
              </ul>
            </div>

            <button class="accordion">MODEL STATISTICS</button>
            <div class="panel model_statistics">
              <p>The model wears a size M with height 6' and shoulders 18”</p>
            </div>
          </div>
        </div>
    `;
  });
