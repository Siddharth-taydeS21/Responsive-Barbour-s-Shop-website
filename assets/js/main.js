/*========== toggle & close mobile nav menu ==========*/

const navToggle = document.getElementById('nav_toggle');
const navMenu = document.getElementById('nav_menu');
const navClose = document.getElementById('nav_close');
const navLink = document.querySelectorAll('.nav_link');

navToggle.addEventListener('click', () => {
    navMenu.classList.remove('-right-[120%]')
    navMenu.classList.add('right-0')
})

navClose.addEventListener('click', () => {
    navMenu.classList.remove('right-0')
    navMenu.classList.add('-right-[120%]')
})

/*========== REMOVE HAMBURGER MENU WHEN CLICK ON MENU KINKS ==========*/
navLink.forEach((link) => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('right-0')
        navMenu.classList.add('-right-[120%]')
    })
})

/*========== CHANGE HEADER STYLES ==========*/
const header = document.querySelector('header');
const navLogo = document.querySelector('#nav_logo');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        header.style.backgroundColor = 'white';
        navLogo.style.color = "black"
        navToggle.style.color = "black"

        // Change nav link colors on scroll down
        navLink.forEach(link => {
            link.style.color = 'black';
        });

        header.classList.add('shadow-2xl/100');

    } else {
        header.style.backgroundColor = 'transparent'
        navLogo.style.color = "white";
        navToggle.style.color = "white"
        // Change nav link colors on scroll up
        navLink.forEach(link => {
            if (window.screen.width < 1024) {
                link.style.color = 'black';
            } else {
                link.style.color = 'white';
            }
        });

        header.classList.remove('shadow-2xl/100');
    }
})

// =========================== WORK SWIPER JS ======================== //
var swiper = new Swiper(".work_swiper", {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 24,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.work_swiper .swiper-button-next',
        prevEl: '.work_swiper .swiper-button-prev',
    }
});

// =========================== TESTIMONIAL SWIPER JS ======================== //
var swiperTestimonial = new Swiper(".service_swiper", {
    loop: true,
    slidesPerView: '1',
    spaceBetween: 56,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.service_swiper .swiper-button-next',
        prevEl: '.service_swiper .swiper-button-prev',
    }
});