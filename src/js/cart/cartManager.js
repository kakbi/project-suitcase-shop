import { getCart, saveCart } from './cartStorage.js';
import { getCartItemsCount } from './cartUtils.js';

export function addToCart(
    product,
    size,
    color,
    category,
    quantity,
    salesStatus,
    discount = 0
) {
    const cart = getCart();

    const existing = cart.find(
        (item) =>
            item.id === product.id && item.size === size && item.color === color
    );

    if (existing) {
        existing.quantity += quantity || 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            imageUrl: product.imageUrl,
            size: size || null,
            color: color || null,
            category: category || null,
            quantity: quantity || 1,
            salesStatus: product.salesStatus || salesStatus,
            discount: product.discount || discount,
        });
    }

    saveCart(cart);
    updateCartCounter();
}

export function removeFromCart(id, size = null, color = null) {
    let cart = getCart().filter(
        (item) =>
            !(item.id === id && item.size === size && item.color === color)
    );
    saveCart(cart);
    updateCartCounter();
}

export function updateQuantity(id, size, color, delta) {
    const cart = getCart();
    const item = cart.find(
        (i) => i.id === id && i.size === size && i.color === color
    );

    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            return removeFromCart(id, size, color);
        }
    }

    saveCart(cart);
    updateCartCounter();
}

export function clearCart() {
    saveCart([]);
    updateCartCounter();
}

export function updateCartCounter() {
    const counter = document.querySelector('.header-cart-counter');
    if (!counter) return;

    const totalItems = getCartItemsCount();
    if (totalItems > 0) {
        counter.textContent = totalItems;
        counter.style.display = 'flex';
    } else {
        counter.style.display = 'none';
    }
}
