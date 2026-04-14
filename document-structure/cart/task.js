document.addEventListener("DOMContentLoaded", () => {
  const products = document.querySelectorAll(".product");
  const cart = document.querySelector(".cart__products");

  products.forEach((product) => {
    const decBtn = product.querySelector(".product__quantity-control_dec");
    const incBtn = product.querySelector(".product__quantity-control_inc");
    const quantityValue = product.querySelector(".product__quantity-value");
    const addBtn = product.querySelector(".product__add");
    const productImage = product.querySelector(".product__image");
    const id = product.dataset.id;

    decBtn.addEventListener("click", () => {
      let val = parseInt(quantityValue.textContent);
      if (val > 1) quantityValue.textContent = val - 1;
    });
    incBtn.addEventListener("click", () => {
      quantityValue.textContent = parseInt(quantityValue.textContent) + 1;
    });

    addBtn.addEventListener("click", () => {
      const count = parseInt(quantityValue.textContent);
      let cartItem = cart.querySelector(`.cart__product[data-id="${id}"]`);

      if (cartItem) {
        const currentCount = parseInt(
          cartItem.querySelector(".cart__product-count").textContent
        );
        cartItem.querySelector(".cart__product-count").textContent =
          currentCount + count;
      } else {
        cartItem = document.createElement("div");
        cartItem.className = "cart__product";
        cartItem.dataset.id = id;
        cartItem.innerHTML = `
                  <img class="cart__product-image" src="${productImage.src}" alt="Товар ${id}">
                  <div class="cart__product-count">${count}</div>
              `;
        cart.appendChild(cartItem);

        const imgClone = productImage.cloneNode();
        imgClone.classList.add("animated-image");
        document.body.appendChild(imgClone);

        const startCoords = productImage.getBoundingClientRect();
        const endCoords = cartItem
          .querySelector(".cart__product-image")
          .getBoundingClientRect();

        const dx = endCoords.left - startCoords.left;
        const dy = endCoords.top - startCoords.top;
        const steps = 20;

        let step = 0;
        const interval = setInterval(() => {
          step++;
          const progress = step / steps;
          imgClone.style.left = startCoords.left + dx * progress + "px";
          imgClone.style.top = startCoords.top + dy * progress + "px";
          if (step >= steps) {
            clearInterval(interval);
            imgClone.remove();
          }
        }, 15);
      }
    });
  });
});
