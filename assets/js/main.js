// ================= Show and close menu ======================= //
const navMenu = document.getElementById('nav_menu'),
    navToggle = document.getElementById('nav_toggle'),
    navClose = document.getElementById('nav_close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.className += ' ';
        //the .show class in written in the input.css file in utilities layer
        navMenu.classList.toggle('show');
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        let className = navMenu.className;
        if (className.includes("show")) {
            className = className.replace("show", '')
            navMenu.className = className;
        }
    })
}

// ================= close mobile menu ======================= //
const navlinks = document.querySelectorAll('.nav_link');

const linkAction = () => {
    const navMenu = document.getElementById('nav_menu');
    let className = navMenu.className;
    if (className.includes("show")) {
        className = className.replace("show", '')
        navMenu.className = className;
    }
}

navlinks.forEach((n) => { n.addEventListener('click', linkAction) })

// ================= change header style  ======================= //
const scrollHeader = () => {
    const header = document.getElementById('header')
    // Add the .scroll-header class if the bottom scroll of the vie
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header')
    }else{
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader)