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

/*========== CHANGE HEADER STYLES ==========*/
const header = document.querySelector('header');
const navLink = document.querySelectorAll('.nav_link');
const navLogo =  document.querySelector('#nav_logo');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        header.style.backgroundColor = 'white';
        navLogo.style.color = "black"
        navToggle.style.color = "black"

        // Change nav link colors on scroll down
        navLink.forEach(link => {
            link.style.color = 'black';
        });

    } else {
        header.style.backgroundColor = 'transparent'
        navLogo.style.color = "white";
        navToggle.style.color = "white"
        // Change nav link colors on scroll up
        navLink.forEach(link => {
            if (window.screen.width < 1024) {
                link.style.color = 'black';
            }else{
                link.style.color = 'white';
            }
        });
    }
})