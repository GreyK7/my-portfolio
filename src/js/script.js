window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuArea = document.querySelector('.menu__area'),
    menuItem = document.querySelectorAll('.menu__item'),
    closeMenu = document.querySelector('.menu__close'),
    hamburger = document.querySelector('.hamburger');


    hamburger.addEventListener('click', () => {
        menu.classList.add('menu_active');
        menuArea.classList.add('menu__area_active');;
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('menu_active');
        menuArea.classList.remove('menu__area_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('menu_active');
        })
    })
})

const counters = document.querySelectorAll('.tools__usage-count'),
      lines = document.querySelectorAll('.tools__usage-range');

counters.forEach ( (item, i) => {
    lines[i].style.width = item.innerHTML;
})