export function renderStars(rating) {
    const value = Math.max(0, Math.min(5, Math.floor(Number(rating) || 0)));
    const fullStars = value;
    const emptyStars = 5 - fullStars;
    let starsHTML = '';

    for (let i = 0; i < fullStars; i++) {
        starsHTML += `<img src="/src/assets/img/icons/star-yellow.svg" alt="yellow-star"/>`;
    }

    for (let i = 0; i < emptyStars; i++) {
        starsHTML += `<img src="/src/assets/img/icons/star-grey.svg" alt="grey-star"/>`;
    }

    return starsHTML;
}
