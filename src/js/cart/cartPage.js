import { getCart } from './cartStorage.js';
import { clearCart } from './cartManager.js';
import { renderCart } from './cartRender.js';

export function initCartPage() {
    const container = document.querySelector('.cart__items');
    const summarySubtotal = document.querySelector(
        '.cart__summary .cart__summary-price'
    );
    const summaryTotal = document.querySelector(
        '.cart__summary-total .cart__summary-price'
    );
    const shipping = document.querySelector(
        '.cart__summary-item .shipping-price'
    );
    const shippingValue = 30;

    function rerender() {
        renderCart(
            container,
            summarySubtotal,
            summaryTotal,
            shipping,
            shippingValue
        );
    }

    document
        .querySelector('.cart__actions-btn:nth-child(2)')
        .addEventListener('click', () => {
            clearCart();
            rerender();
            document.querySelector(
                '.cart__summary-discount .discount-price'
            ).textContent = '$0';
        });

    document.querySelector('.checkout-btn').addEventListener('click', () => {
        if (getCart().length !== 0) {
            clearCart();
            container.innerHTML = `<p class="cart-gratitude__text">Thank you for your purchase.</p>`;
            summarySubtotal.textContent = '$0';
            document.querySelector(
                '.cart__summary-discount .discount-price'
            ).textContent = '$0';
            summaryTotal.textContent = `$${0 + shippingValue}`;
        } else {
            alert('You should choose something from the catalog page');
        }
    });

    rerender();
}
