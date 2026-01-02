import { renderProductCard } from '../render/renderProductCard.js';
import { state } from './state.js';

export function renderCurrentPage() {
    const container = state.elements.productContainer;
    if (!container) return;

    container.innerHTML = '';
    const start = (state.currentPage - 1) * state.itemsPerPage;
    const end = start + state.itemsPerPage;
    const pageProducts = state.products.slice(start, end);

    const productsResults = state.elements.productsResults;

    productsResults.innerHTML = '';

    if (!state.products.length) {
        productsResults.innerHTML = `
        <p class="cotalog-products__results">Product not found</p>`;
        return;
    }

    const endIndex = Math.min(end, state.products.length);

    productsResults.innerHTML = `
        <p class="cotalog-products__results">Showing ${
            start + 1
        }-${endIndex} Of ${state.products.length} Results</p>`;

    pageProducts.forEach((p) => {
        const card = renderProductCard(p);
        container.appendChild(card);
    });

    const prevActive = state.elements.ul?.querySelector(
        '.pagination__page--active'
    );
    if (prevActive) prevActive.classList.remove('pagination__page--active');

    const newActive = state.elements.ul?.querySelector(
        `button[data-page="${state.currentPage}"]`
    );
    if (newActive) newActive.classList.add('pagination__page--active');

    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}
