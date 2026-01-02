import { loadHTML } from '../utils/loadHTML.js';
import { setActiveLink } from '../utils/setActiveLink.js';

export async function setupLayout() {
    await loadHTML('header', '/src/components/header.html');
    setActiveLink();
    await loadHTML('footer', '/src/components/footer.html');

    const productDetails = document.querySelector('.product-details');
    if (!productDetails) return;
    await loadHTML('.product-details', '/src/components/product-card.html');
}
