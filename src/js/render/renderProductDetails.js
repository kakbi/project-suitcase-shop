import { addToCart } from '../cart/cartManager.js';
import { setupQuantity } from '../events/setupQuantity.js';
import { setupReviewForm } from '../events/setupReviewForm.js';
import { setupTabs } from '../events/setupTabs.js';
import { renderStars } from './renderStars.js';

export async function initProductDetails(data) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (!id) return;

    const product = data.find((p) => String(p.id) === String(id));
    if (!product) {
        const container = document.querySelector('.product-details__container');
        if (container) {
            container.textContent = 'Product not found';
        }
        return;
    }

    document.getElementById('product-title').textContent = product.name;
    document.getElementById('product-price').textContent = `$${product.price}`;
    document.querySelector('.product-details__main-image').innerHTML = `
    <img src="${product.imageUrl}"alt="${product.name}"/>`;
    document.querySelector(
        '.product-details__item-rating'
    ).innerHTML = `${renderStars(
        product.rating
    )} <span class="product-details__review">(1 Clients Review)</span>`;

    const btn = document.querySelector('.product-details__add-to-cart');
    if (btn) {
        btn.addEventListener('click', () => {
            const size = document.getElementById('filter-size').value;
            const color = document.getElementById('filter-color').value;
            const category = document.getElementById('filter-category').value;
            const quantity = Number.parseInt(
                document.getElementById('quantity').textContent,
                10
            );

            addToCart(product, size, color, category, quantity);
        });
    }

    setupQuantity();
    setupTabs();
    setupReviewForm();
}
