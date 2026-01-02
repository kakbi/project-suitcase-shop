export function setupFeedbackForm() {
    const form = document.querySelector('.feedback__form');
    if (!form) return;

    const inputs = form.querySelectorAll('input[required], textarea[required]');

    function showError(input, message) {
        let error = input.nextElementSibling;
        if (!error?.classList.contains('feedback__error')) {
            error = document.createElement('div');
            error.className = 'feedback__error';
            input.insertAdjacentElement('afterend', error);
        }
        error.textContent = message;
        input.classList.add('invalid');
    }

    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            if (!input.value.trim()) {
                showError(input, 'This field is required');
            } else if (input.id === 'email' && !validateEmail(input.value)) {
                showError(input, 'Invalid email format');
            } else {
                clearError(input);
            }
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        inputs.forEach((input) => {
            if (!input.value.trim()) {
                showError(input, 'This field is required');
                isValid = false;
            } else if (input.id === 'email' && !validateEmail(input.value)) {
                showError(input, 'Invalid email format');
                isValid = false;
            } else {
                clearError(input);
            }
        });

        form.querySelector('.feedback__status')?.remove();

        const status = document.createElement('div');
        status.className = 'feedback__status';

        if (isValid) {
            status.textContent = 'Thank you! Your message has been sent.';
            status.classList.add('success');
            form.reset();
        } else {
            status.textContent = 'Please fix the errors before submitting.';
            status.classList.add('error');
        }

        form.appendChild(status);
    });
}

function clearError(input) {
    const error = input.nextElementSibling;
    if (error?.classList.contains('feedback__error')) {
        error.textContent = '';
    }
    input.classList.remove('invalid');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
