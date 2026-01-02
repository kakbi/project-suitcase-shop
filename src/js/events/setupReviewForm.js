export function handleReviewFormSubmit(e) {
    e.preventDefault();

    const name = document
        .getElementById('product-reviews__input-name')
        .value.trim();
    const email = document
        .getElementById('product-reviews__input-email')
        .value.trim();
    const review = document
        .getElementById('product-reviews__textarea')
        .value.trim();
    const messageEl = document.getElementById('formMessage');

    if (!name || !email || !review) {
        messageEl.textContent = 'Please fill in all required fields.';
        messageEl.style.color = 'red';
        return;
    }

    messageEl.textContent =
        'Thank you! Your review has been submitted successfully.';
    messageEl.style.color = 'green';

    e.target.reset();
}

export function setupReviewForm() {
    const form = document.getElementById('reviewForm');
    if (!form) return;
    form.addEventListener('submit', handleReviewFormSubmit);
}
