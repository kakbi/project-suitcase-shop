export function initModal() {
    const modal = document.querySelector('.modal');
    const modalOverlay = modal?.querySelector('.modal__overlay');
    const userBtn = document.querySelector('.header__action');
    const eyeIcon = modal?.querySelector('.modal__eye-icon');
    const emailInput = modal?.querySelector('#modal-email');
    const passwordInput = modal?.querySelector('#modal-password');

    if (!modal || !userBtn) return;

    userBtn.addEventListener('click', () => {
        modal.classList.add('open');
    });

    modalOverlay?.addEventListener('click', () => {
        modal.classList.remove('open');
        passwordInput.value = '';
        emailInput.value = '';
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.classList.remove('open');
        }
    });

    eyeIcon?.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });
}
