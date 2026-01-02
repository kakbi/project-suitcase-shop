import { getCart } from './cartStorage.js';
import { updateQuantity, removeFromCart } from './cartManager.js';
import { getCartTotal, getCartDiscount } from './cartUtils.js';

export function renderCart(
    container,
    summarySubtotal,
    summaryTotal,
    shipping,
    shippingValue
) {
    shipping.textContent = `$${shippingValue}`;

    const cart = getCart();
    container.innerHTML = '';

    if (!cart.length) {
        container.innerHTML = `<p class="cart-empty__text">Your cart is empty. Use the catalog to add new items.</p>`;
        summarySubtotal.textContent = '$0';
        summaryTotal.textContent = `$${shippingValue}`;
        return;
    }

    cart.forEach((item) => {
        const div = document.createElement('div');
        div.classList.add('cart__item');
        div.innerHTML = `
            <img src="${item.imageUrl}" alt="${
            item.name
        }" class="cart__item-image"/>
            <h3 class="cart__item-name">${item.name}</h3>
            <p class="cart__item-price">$${item.price}</p>
            <div class="cart__quantity">
                <button class="cart__quantity-decrease">-</button>
                <span class="cart__quantity-value">${item.quantity}</span>
                <button class="cart__quantity-increase">+</button>
            </div>
            <p class="cart__item-total">$${item.price * item.quantity}</p>
            <button class="cart__item-delete"><img src="../assets/img/icons/bin.svg" alt="bin"></button>

            <div class="cart__tooltip">
                <p><strong>Size:</strong> ${item.size || '-'}</p>
                <p><strong>Color:</strong> ${item.color || '-'}</p>
                <p><strong>Category:</strong> ${item.category || '-'}</p>
                <p><strong>Sale:</strong> ${
                    (item.salesStatus && 'Discount') || 'No Discount'
                }</p>
            </div>
        `;

        div.querySelector('.cart__quantity-increase').addEventListener(
            'click',
            () => {
                updateQuantity(item.id, item.size, item.color, 1);
                renderCart(
                    container,
                    summarySubtotal,
                    summaryTotal,
                    shipping,
                    shippingValue
                );
            }
        );

        div.querySelector('.cart__quantity-decrease').addEventListener(
            'click',
            () => {
                updateQuantity(item.id, item.size, item.color, -1);
                renderCart(
                    container,
                    summarySubtotal,
                    summaryTotal,
                    shipping,
                    shippingValue
                );
            }
        );

        div.querySelector('.cart__item-delete').addEventListener(
            'click',
            () => {
                removeFromCart(item.id, item.size, item.color);
                renderCart(
                    container,
                    summarySubtotal,
                    summaryTotal,
                    shipping,
                    shippingValue
                );
                discountRow.querySelector('.discount-price').textContent = '$0';
            }
        );

        container.appendChild(div);
    });

    const subtotal = getCartTotal();
    const discount = getCartDiscount();
    const total = subtotal - discount + shippingValue;

    summarySubtotal.textContent = `$${subtotal}`;
    summaryTotal.textContent = `$${total}`;

    const discountRow = document.querySelector('.cart__summary-discount');
    if (discount > 0) {
        discountRow.style.display = 'flex';
        discountRow.querySelector(
            '.discount-price'
        ).textContent = `$${discount}`;
    } else {
        discountRow.style.display = 'none';
    }
}
