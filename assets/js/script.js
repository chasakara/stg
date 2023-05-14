let modalButtons = document.getElementsByClassName('modal-btn');
let modals = document.getElementsByClassName('modal');
let modalCloseButtons = document.getElementsByClassName('close');

/**
 * Modal for the rules
 */
for (let i = 0; i < modalButtons.length; i++) {
    modalButtons[i].addEventListener('click', function() {
        modals[i].style.display = 'block';
    });

    modalCloseButtons[i].addEventListener('click', function() {
        modals[i].style.display = 'none';
    });
}