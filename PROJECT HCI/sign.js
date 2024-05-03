const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup'); // Corrected selector
const iconClose = document.querySelector('.icon-close'); // Corrected selector

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

iconClose.addEventListener('click', () => {
    window.location.href = 'index.html'; // Redirect to the home page
});