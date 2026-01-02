import { paginate } from '../pagination/index.js';

let allProducts = [];
let filteredProducts = [];

export function initFilters(products) {
    allProducts = products;
    filteredProducts = [...allProducts];

    const sortSelect = document.getElementById('sort-select');
    const sizeFilter = document.getElementById('filter-size');
    const colorFilter = document.getElementById('filter-color');
    const categoryFilter = document.getElementById('filter-category');
    const saleAll = document.getElementById('sale-all');
    const resetBtn = document.getElementById('reset-filters');
    const hideBtn = document.getElementById('hide-filters');
    const searchInput = document.querySelector(
        '.cotalog-products__search input'
    );

    sortSelect.addEventListener('change', applyFilters);
    sizeFilter.addEventListener('change', applyFilters);
    colorFilter.addEventListener('change', applyFilters);
    categoryFilter.addEventListener('change', applyFilters);
    searchInput.addEventListener('input', applyFilters);
    resetBtn.addEventListener('click', resetFilters);
    hideBtn.addEventListener('click', toggleFilters);
    saleAll.addEventListener('change', toggleSaleFilter);

    applyFilters();
}

function applyFilters() {
    const sortValue = document.getElementById('sort-select').value;
    const sizeValue = document.getElementById('filter-size').value;
    const colorValue = document.getElementById('filter-color').value;
    const categoryValue = document.getElementById('filter-category').value;
    const isSale = document.getElementById('sale-all').checked;
    const searchValue = document
        .querySelector('.cotalog-products__search input')
        .value.toLowerCase();

    filteredProducts = allProducts.filter((p) => {
        let match = true;

        if (sizeValue && p.size !== sizeValue) match = false;
        if (colorValue && p.color !== colorValue) match = false;
        if (categoryValue && p.category !== categoryValue) match = false;
        if (searchValue && !p.name.toLowerCase().includes(searchValue))
            match = false;
        if (isSale && (!p.salesStatus || p.salesStatus === false)) {
            match = false;
        }

        return match;
    });

    if (sortValue === 'price-asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'rating') {
        filteredProducts.sort((a, b) => b.rating - a.rating);
    } else if (sortValue === 'popularity') {
        filteredProducts.sort((a, b) => b.popularity - a.popularity);
    }

    paginate(filteredProducts);
}

function resetFilters() {
    document.getElementById('sort-select').value = 'default';
    document.getElementById('filter-size').value = '';
    document.getElementById('filter-color').value = '';
    document.getElementById('filter-category').value = '';
    document.getElementById('sale-all').checked = false;
    document.querySelector('.cotalog-products__search input').value = '';

    filteredProducts = [...allProducts];
    paginate(filteredProducts);
}

function toggleFilters() {
    const hideBtn = document.getElementById('hide-filters');
    const filters = document.querySelector('.cotalog-products__filters');

    filters.classList.toggle('hidden');

    if (filters.classList.contains('hidden')) {
        hideBtn.textContent = 'SHOW FILTERS';
    } else {
        hideBtn.textContent = 'HIDE FILTERS';
    }
}
function toggleSaleFilter() {
    applyFilters();
}
