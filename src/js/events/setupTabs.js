export function setupTabs() {
    const navItems = document.querySelectorAll('.product-tabs__nav-item');
    const panels = document.querySelectorAll('.product-tabs__panel');

    navItems.forEach((item) => {
        item.addEventListener('click', () => {
            navItems.forEach((el) =>
                el.classList.remove('product-tabs__nav-item--active')
            );
            panels.forEach((el) =>
                el.classList.remove('product-tabs__panel--active')
            );

            item.classList.add('product-tabs__nav-item--active');
            const tab = item.dataset.tab;
            document
                .querySelector(`.product-tabs__panel[data-tab="${tab}"]`)
                .classList.add('product-tabs__panel--active');
        });
    });
}
