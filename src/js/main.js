import { setupLayout } from './layout/setupLayout.js';
import { setupData } from './data/setupData.js';
import { updateCartCounter } from './cart/cartManager.js';
import { initCartPage } from './cart/cartPage.js';
import { initModal } from './ui/modal.js';
import { initMenu } from './ui/initMenu.js';
import { setupFeedbackForm } from './events/setupFeedbackForm.js';

document.addEventListener('DOMContentLoaded', init);

async function init() {
    try {
        await setupLayout();
        await setupData();
        updateCartCounter();
        initMenu();
        initModal();

        if (document.querySelector('.cart')) {
            initCartPage();
        }

        if (document.querySelector('.feedback__form')) {
            setupFeedbackForm();
        }
    } catch (err) {
        console.error('App init error:', err);
    }
}
