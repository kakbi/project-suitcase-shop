import { state } from './state.js';

export function resolveElements(options = {}) {
    state.elements.productContainer = document.getElementById(
        options.containerId || 'products-grid'
    );
    state.elements.pagination = document.querySelector(
        options.paginationSelector || '.pagination'
    );
    state.elements.ul = document.getElementById(
        options.paginationListId || 'paginationList'
    );
    state.elements.btnPrev = document.getElementById(
        options.prevId || 'prevPage'
    );
    state.elements.btnNext = document.getElementById(
        options.nextId || 'nextPage'
    );
    state.elements.productsResults = document.querySelector(
        '.cotalog-products__results'
    );
}
