export function setActiveLink() {
    const links = document.querySelectorAll('.nav__link');
    const currentPath = window.location.pathname;

    links.forEach((link) => {
        link.classList.remove('nav__link--active');

        if (link.getAttribute('href') === currentPath) {
            link.classList.add('nav__link--active');
        }

        link.addEventListener('click', () => {
            links.forEach((l) => l.classList.remove('nav__link--active'));
            link.classList.add('nav__link--active');
        });
    });
}
