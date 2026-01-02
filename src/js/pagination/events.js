import { renderCurrentPage } from './renderCurrentPage.js';
import { state } from './state.js';

export function onPageClick(e) {
    const btn = e.target.closest('button.pagination__page');
    if (!btn) return;
    const page = Number(btn.dataset.page);
    if (!Number.isFinite(page)) return;
    state.currentPage = page;
    renderCurrentPage();
}

export function onPrevClick() {
    state.currentPage =
        state.currentPage - 1 < 1 ? state.pageCount : state.currentPage - 1;
    renderCurrentPage();
}

export function onNextClick() {
    state.currentPage =
        state.currentPage + 1 > state.pageCount ? 1 : state.currentPage + 1;
    renderCurrentPage();
}

export function bindEventsOnce() {
    if (state.bound) return;
    if (state.elements.ul)
        state.elements.ul.addEventListener('click', onPageClick);
    if (state.elements.btnPrev)
        state.elements.btnPrev.addEventListener('click', onPrevClick);
    if (state.elements.btnNext)
        state.elements.btnNext.addEventListener('click', onNextClick);
    state.bound = true;
}
