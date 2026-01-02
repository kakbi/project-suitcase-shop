export function initProductsCarousel(sectionSelector, itemSelector) {
    const section = document.querySelector(sectionSelector);
    if (!section) return;

    const list = section.querySelector(`${sectionSelector}__list`);
    const items = list ? list.querySelectorAll(itemSelector) : [];
    const prevBtn = section.querySelector(`${sectionSelector}__arrow--prev`);
    const nextBtn = section.querySelector(`${sectionSelector}__arrow--next`);

    if (!list || !items.length || !prevBtn || !nextBtn) return;

    let currentIndex = 0;

    function getVisibleCount() {
        const containerWidth = section.querySelector(
            `${sectionSelector}__list-wrapper`
        ).offsetWidth;
        const card = list.querySelector(itemSelector);
        return card ? Math.floor(containerWidth / card.offsetWidth) : 1;
    }

    function updateCarousel() {
        const card = list.querySelector(itemSelector);
        if (!card) return;

        const gap = 40;
        const cardWidth = card.offsetWidth + gap;

        list.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    function showNext() {
        const visibleCount = getVisibleCount();
        if (currentIndex < items.length - visibleCount) {
            currentIndex++;
            updateCarousel();
        }
    }

    function showPrev() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }

    nextBtn.addEventListener('click', () => {
        const visibleCount = getVisibleCount();
        if (currentIndex < items.length - visibleCount) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    window.addEventListener('resize', () => {
        const visibleCount = getVisibleCount();
        if (currentIndex > items.length - visibleCount) {
            currentIndex = Math.max(0, items.length - visibleCount);
        }
        updateCarousel();
    });

    let startX = 0;
    let endX = 0;

    list.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    list.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    });

    list.addEventListener('touchend', () => {
        const diff = startX - endX;
        if (Math.abs(diff) > 50) {
            // порог в 50px
            if (diff > 0) {
                showNext();
            } else {
                showPrev();
            }
        }
        startX = 0;
        endX = 0;
    });
}
