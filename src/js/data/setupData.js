import { fetchData } from '../utils/fetchData.js';
import { renderMiniatures } from '../render/renderMiniatures.js';
import { initFilters } from '../filters/filterManager.js';
import { initProductDetails } from '../render/renderProductDetails.js';
import { renderProductsSection } from '../render/renderProductsSection.js';

export async function setupData() {
    const catalogProducts = document.getElementById('products-grid');
    const miniBestListProducts = document.getElementById(
        'cotalog-products__list'
    );
    const productDetailsContainer = document.querySelector(
        '.product-details__container'
    );

    const selectedProductsList = document.querySelector('.products__list');
    const newProductsList = document.querySelector('.new-products__list');
    const youMayAlsoLikeList = document.querySelector(
        '.you-may-also-like__list'
    );

    if (
        !catalogProducts &&
        !miniBestListProducts &&
        !productDetailsContainer &&
        !selectedProductsList &&
        !newProductsList &&
        !youMayAlsoLikeList
    )
        return;

    const json = await fetchData('/src/assets/data.json');
    if (!json?.data) return;

    if (catalogProducts) initFilters(json.data);
    if (miniBestListProducts) renderMiniatures(json.data);
    if (productDetailsContainer) initProductDetails(json.data);

    if (selectedProductsList) {
        renderProductsSection({
            data: json.data,
            blockName: 'Selected Products',
            containerSelector: '.products__list',
            cardType: 'products',
        });
    }

    if (newProductsList) {
        renderProductsSection({
            data: json.data,
            blockName: 'New Products Arrival',
            containerSelector: '.new-products__list',
            cardType: 'new-products',
        });
    }

    if (youMayAlsoLikeList) {
        renderProductsSection({
            data: json.data,
            blockName: 'You May Also Like',
            containerSelector: '.you-may-also-like__list',
            cardType: 'you-may-also-like',
        });
    }
}
