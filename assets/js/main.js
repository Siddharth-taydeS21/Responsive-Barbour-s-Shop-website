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

// =========================== SHOW SCROLL UP ======================== //
const scrollUp = document.getElementById('scrollup');
window.addEventListener('scroll', () => {
    if (this.scrollY >= 350) {
        scrollUp.classList.remove('-bottom-12');
        scrollUp.classList.add('bottom-12');
    } else {
        scrollUp.classList.remove('bottom-12');
        scrollUp.classList.add('-bottom-12');
    }
})

// =========================== ACTIVE SECTION LINK ======================== //

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.scrollY;
    sections.forEach(section => {
        const id = section.id;
        const top = section.offsetTop - 50;
        const height = section.offsetHeight;
        const link = document.querySelector('#nav_list a[href*=' + id + ']')

        if (!link) return

        if (scrollY > top && scrollY <= top + height) {
            link.style.color = 'orange';

            if (link.id === 'nav_button') {
                link.style.color = 'black'
            }

        }
        else {
            link.style.color = 'black';
            if (window.scrollY <= 50) {
                navLink.forEach(l => {
                    l.style.color = 'white';
                    if (l.id === 'nav_button') {
                        l.style.color = 'black'
                    } else if (window.screen.width < 1024) {
                        l.style.color = 'black';
                    } else {
                        link.style.color = 'white';
                    }
                });
                navLink[0].style.color = 'orange';
            }
        }
    })
}

window.addEventListener('scroll', scrollActive)

//<!--=============== GSAP ANIMATIONS ===============-->

const reveal = (selector, options = {}) => {
    gsap.from(selector, {
        scrollTrigger: selector,
        opacity: 0,
        duration: 1,
        y: 100,
        delay: .3,
        ease: 'power2.out',
        ...options
    })
}

// ======== Home animation ============= //

const tl = gsap.timeline({})
tl.fromTo(
    '.home-bg',
    {
        y: -800,
        scale: .3,
        opacity: 0
    },
    {
        y: 0,
        scale: .3,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
    }
)
tl.to(
    '.home-bg',
    {
        scale: 1,
        duration: 1,
        ease: 'back.out(0.5)'
    }
)

//// ======== Home bg going backwards animation ============= //
tl.to(
    '.home-bg',
    {
        scale: 1.08,
        duration: 8,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
        transformOrigin: 'center center'
    }
)

reveal('.home_logo', { y: 0, scale: .3, delay: 1.9, ease: 'elastic. out (0.8,0.5)' })
reveal('#home_title', { delay: 2.2 })
reveal('#home_discription', { delay: 2.5 })
reveal('#home_button', { delay: 2.8 })

// ================= Nav and header animation ================ //
// it should only work in home section :- 
if (window.scrollY < 100) {
    reveal('.nav > *', { delay: 1.6, y: -30 })
} else {
    gsap.set('.nav > *', { opacity: 1, y: 0 })
}

// ======== About section animation =========
reveal('.about_data > *', { stagger: .2 });
reveal('.about_img', { delay: .9 });

const aboutCounter = document.querySelectorAll('.about_counter');
aboutCounter.forEach(el => {

    gsap.from(el, {
        textContent: 0,
        duration: 3,
        ease: 'power1.out',
        snap: {textContent: 1},
        scrollTrigger: {trigger: el, once: true }
    })

})

// =========== Work section animations ============= 

reveal('.Work_title', {});
reveal('.work_discription', {delay: .6});
reveal('#work_data', {delay: .6});
reveal('.work_swiper .swiper-pagination', {delay: .9});
reveal('.work_swiper swiper-button-next, swiper-button-prev', {delay: 1.2});
reveal('.work_swiper', {delay: .9});

//// =========== Service section animations ============= 

reveal('#services_title', {})
reveal('.service_prices', {delay: .6, stagger: .2})
reveal('.service_swiper', {delay: .9, stagger: .2})

//// =========== Expert section animations ============= 

reveal('#experts .section_title', {})
reveal('.expert_discription', {delay: .6})
reveal('.expert-card', {delay: .9, stagger: .2})

//// =========== Contact section animations ============= 

reveal('.contact_data .section_title', {})
reveal('.contact_discription', {delay: .6})
reveal('.contact_button', {delay: .9, y: 0, scale: 0})
reveal('.contact_map', {delay: .9})
reveal('.contact_card', {delay: 1.2, stagger: .2})

//// =========== Footer animations ============= 

reveal('.footer .container', {})

