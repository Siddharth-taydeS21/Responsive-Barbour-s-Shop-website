/*========== toggle & close mobile nav menu ==========*/

const navToggle = document.getElementById('nav_toggle');
const navMenu = document.getElementById('nav_menu');
const navClose = document.getElementById('nav_close');

navToggle.addEventListener('click', () => {
navMenu.classList.remove('-right-[120%]')
navMenu.classList.add('right-0')
})

navClose.addEventListener('click', () => {
    navMenu.classList.remove('right-0')
    navMenu.classList.add('-right-[120%]')
})