import { getCart } from './cartStorage.js';

export function getCartTotal() {
    return getCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function getCartDiscount() {
    const cart = getCart();

    // сумма скидок на отдельные товары
    const itemDiscount = cart.reduce((sum, item) => {
        if (item.salesStatus && item.discount > 0) {
            return sum + (item.price * item.quantity * item.discount) / 100;
        }
        return sum;
    }, 0);

    // общая сумма корзины
    const subtotal = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    // если сумма >= 3000, добавляю 10% от общей суммы
    const bulkDiscount = subtotal >= 3000 ? (subtotal * 10) / 100 : 0;

    return itemDiscount + bulkDiscount;
}

export function getCartItemsCount() {
    return getCart().reduce((sum, item) => sum + item.quantity, 0);
}
