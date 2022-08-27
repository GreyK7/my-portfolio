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


$( ".contacts__form" ).validate( {
    rules: {
        name: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        message: {
            required: true
        },
        accept: {
            required: true
        }
    },
    messages: {
        name: {
            required: "Це поле обов'язкове"
        },
        email: {
            required: "Це поле обов'язкове",
            email: "Неправильний формат email"
        },
        message: {
            required: "Це поле обов'язкове"
        },
        accept: {
            required: "Прийміть політику конфіденційності"
        }
    }
});

//SmoothScroll
$(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
        $('.back-link').fadeIn('slow');
    } else {
        $('.back-link').fadeOut('slow');
    };
});

$("a.back-link").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

