import { renderStars } from './renderStars.js';

export function renderMiniatures(data) {
    const productsList = document.getElementById('cotalog-products__list');
    if (!productsList) {
        console.warn('Container #cotalog-products__list not found');
        return;
    }

    productsList.innerHTML = '';

    const selected = data
        .filter((p) => p.category === 'luggage sets')
        .sort(() => 0.5 - Math.random());

    selected.forEach((product) => {
        const miniature = document.createElement('div');
        miniature.classList.add('cotalog-products__item');

        miniature.innerHTML = `
            <img src="${product.imageUrl}" alt="${
            product.name
        }" class="cotalog-products__item-img"/>
            <div class="cotalog-products__item-info">
                <p class="cotalog-products__item-text">${product.name}</p>
                <span class="cotalog-products__item-rating">
                    ${renderStars(product.rating)}
                </span>
                <p class="cotalog-products__item-price">$${product.price}</p>
            </div>
        `;
        productsList.appendChild(miniature);
    });
}
