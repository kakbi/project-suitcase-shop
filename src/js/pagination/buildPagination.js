import { state } from './state.js';

export function buildPagination() {
    const ul = state.elements.ul;
    if (!ul) return;

    ul.innerHTML = '';
    state.pageCount = Math.max(
        1,
        Math.ceil(state.products.length / state.itemsPerPage)
    );

    for (let i = 1; i <= state.pageCount; i++) {
        const li = document.createElement('li');
        li.className = 'pagination__item';

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'pagination__page';
        button.dataset.page = String(i);
        button.textContent = String(i);

        if (i === state.currentPage) {
            button.classList.add('pagination__page--active');
        }

        li.appendChild(button);
        ul.appendChild(li);
    }

    if (state.elements.pagination) {
        state.elements.pagination.classList.toggle(
            'hidden',
            state.pageCount <= 1
        );
    }
}
