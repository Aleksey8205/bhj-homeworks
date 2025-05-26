const products = document.querySelectorAll(".product");
const cartProducts = document.querySelector(".cart__products");

products.forEach((product) => {
  const addButton = product.querySelector(".product__add");
  const quantityValue = product.querySelector(".product__quantity-value");
  const quantityControls = product.querySelectorAll(
    ".product__quantity-control"
  );

  quantityControls.forEach((control) => {
    control.addEventListener("click", () => {
      const currentValue = parseInt(quantityValue.textContent);
      if (control.classList.contains("product__quantity-control_dec")) {
        if (currentValue > 1) {
          quantityValue.textContent = currentValue - 1;
        }
      } else {
        quantityValue.textContent = currentValue + 1;
      }
    });
  });

  addButton.addEventListener("click", () => {
    const productId = product.getAttribute("data-id");
    const productImage = product.querySelector(".product__image").src;
    const quantity = parseInt(quantityValue.textContent);

    let cartProduct = cartProducts.querySelector(
      `.cart__product[data-id="${productId}"]`
    );
    if (cartProduct) {
      const currentQuantity = parseInt(
        cartProduct.querySelector(".cart__product-count").textContent
      );
      cartProduct.querySelector(".cart__product-count").textContent =
        currentQuantity + quantity;
    } else {
      const newCartProduct = document.createElement("div");
      newCartProduct.classList.add("cart__product");
      newCartProduct.setAttribute("data-id", productId);
      newCartProduct.innerHTML = `
                <img class="cart__product-image" src="${productImage}">
                <div class="cart__product-count">${quantity}</div>
            `;
      cartProducts.appendChild(newCartProduct);
    }
  });
});
