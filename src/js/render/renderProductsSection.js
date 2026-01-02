import { addToCart } from '../cart/cartManager.js';
import { initProductsCarousel } from '../ui/initProductCarousel.js';

function createCardHTML(product, { prefix, buttonLabel }) {
    return `
        <div class="${prefix}" data-id="${product.id}">
            <div class="${prefix}__image">
                <img src="${product.imageUrl}" alt="${product.name}" />
            </div>
            <div class="${prefix}__info">
                ${
                    product.salesStatus
                        ? `<span class="${prefix}__sale-label">SALE</span>`
                        : ''
                }
                <p class="${prefix}__name">${product.name}</p>
                <p class="${prefix}__price">$${product.price}</p>
                <button class="button ${prefix}__btn">${buttonLabel}</button>
            </div>
        </div>
    `;
}

const CARD_TYPES = {
    products: { prefix: 'product', buttonLabel: 'Add To Cart' },
    'new-products': { prefix: 'new-product', buttonLabel: 'View product' },
    'you-may-also-like': { prefix: 'also-like', buttonLabel: 'Add to Cart' },
};

const CARD_ACTIONS = {
    products: (product) =>
        addToCart(
            product,
            product.size,
            product.color,
            product.category,
            1,
            product.salesStatus
        ),
    'new-products': (product) =>
        (window.location.href = `/src/pages/product-details-template.html?id=${product.id}`),
    'you-may-also-like': (product) =>
        addToCart(
            product,
            product.size,
            product.color,
            product.category,
            1,
            product.salesStatus
        ),
};

const CAROUSEL_SELECTORS = {
    products: ['.products', '.product'],
    'new-products': ['.new-products', '.new-product'],
    'you-may-also-like': ['.you-may-also-like', '.also-like'],
};

export function renderProductsSection({
    data,
    blockName,
    containerSelector,
    cardType,
}) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const filteredProducts = data.filter((item) =>
        item.blocks.includes(blockName)
    );
    container.innerHTML = '';

    let html = '';
    filteredProducts.forEach((product) => {
        html += createCardHTML(product, CARD_TYPES[cardType]);
    });
    container.innerHTML = html;

    container.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (btn) {
            const allBtns = [...container.querySelectorAll('button')];
            const index = allBtns.indexOf(btn);
            const product = filteredProducts[index];

            CARD_ACTIONS[cardType]?.(product);
        } else {
            const card = e.target.closest(`.${CARD_TYPES[cardType].prefix}`);
            if (card) {
                const productId = card.dataset.id;
                window.location.href = `/src/pages/product-details-template.html?id=${productId}`;
            }
        }
    });

    const selectors = CAROUSEL_SELECTORS[cardType];
    if (selectors) {
        initProductsCarousel(...selectors);
    }
}
