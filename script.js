window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu_items'),
    menuItem = document.querySelectorAll('.navigation-button'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_items_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_items_active');
        });
    });
});