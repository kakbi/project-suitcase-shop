export function initMenu() {
    const iconMenu = document.querySelector('.menu__icon');
    const menuBody = document.querySelector('.menu__body');

    if (iconMenu && menuBody) {
        iconMenu.addEventListener('click', function () {
            const isExpanded =
                iconMenu.getAttribute('aria-expanded') === 'true';

            document.body.classList.toggle('lock');
            iconMenu.classList.toggle('active');
            menuBody.classList.toggle('active');

            iconMenu.setAttribute('aria-expanded', String(!isExpanded));
        });
    }
}
