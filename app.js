fetch(`https://dummyjson.com/products`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const container = document.getElementById("products-container");

    data.products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("card");

      productElement.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}" class="product-image">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <p class="price"><strong>Narx:</strong> $${product.price}</p>
            `;

      container.appendChild(productElement);
    });
  })
  .catch((error) => console.error("Xatolik:", error));
