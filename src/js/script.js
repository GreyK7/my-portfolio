window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
    menuItem = document.querySelectorAll('.nav-menu__item'),
    closeMenu = document.querySelector('.nav-menu__close');
    openMenu = document.querySelector('.promo__burger');

    openMenu.addEventListener('click', () => {
        menu.classList.toggle('nav-menu_active');
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.toggle('nav-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('nav-menu_active');
        })
    })
})