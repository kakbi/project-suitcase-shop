import { state } from './state.js';
import { resolveElements } from './resolveElements.js';
import { buildPagination } from './buildPagination.js';
import { renderCurrentPage } from './renderCurrentPage.js';
import { bindEventsOnce } from './events.js';

export const paginate = (products = [], options = {}) => {
    state.products = Array.isArray(products) ? products : [];
    state.itemsPerPage = options.itemsPerPage || 12;
    state.currentPage = 1;

    resolveElements(options);
    buildPagination();
    renderCurrentPage();
    bindEventsOnce();
};
