import { addToCart } from '../cart/cartManager.js';

export function renderProductCard(product) {
    const card = document.createElement('article');
    card.classList.add('product-card');

    const badge = product.salesStatus
        ? `<div class="product-card__badge">SALE</div>`
        : '';

    card.innerHTML = `
        ${badge}
        <div class="product-card__image">
            <img src="${product.imageUrl}" alt="${product.name}" />
        </div>
        <h3 class="product-card__title">${product.name}</h3>
        <p class="product-card__price">$${product.price}</p>
        <button class="button product-card__btn" data-id="${product.id}">
            Add To Cart
        </button>
    `;

    const btn = card.querySelector('.product-card__btn');

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(
            product,
            product.size,
            product.color,
            product.category,
            1,
            product.salesStatus
        );
    });

    card.addEventListener('click', (e) => {
        if (!e.target.closest('.product-card__btn')) {
            window.location.href = `product-details-template.html?id=${product.id}`;
        }
    });

    return card;
}
