export function setupQuantity(initialValue = 1) {
    let quantity = Number(initialValue) || 1;
    const quantityEl = document.getElementById('quantity');
    const btnDec = document.querySelector(
        '.product-details__quantity-decrease'
    );
    const btnInc = document.querySelector(
        '.product-details__quantity-increase'
    );

    if (!quantityEl || !btnDec || !btnInc) {
        console.warn(`setupQuantity: expected elements not found`);
        return {
            getValue: () => quantity,
        };
    }

    const updateQuantity = () => {
        quantityEl.textContent = String(quantity);
    };

    btnDec.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            updateQuantity();
        }
    });

    btnInc.addEventListener('click', () => {
        quantity++;
        updateQuantity();
    });

    updateQuantity();

    return {
        getValue: () => quantity,
        setValue: (v) => {
            quantity = Math.max(1, Number(v) || 1);
            updateQuantity();
        },
    };
}
