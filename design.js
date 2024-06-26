/*=============================== toggle icon navbar ================================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
}

/*=============================== scroll section active link ================================*/

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

windows.onscroll = () => {
    sections.forEach(sec => {
        let top = windows.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });


/*=============================== sticky navbar ================================*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

/*=============================== remove toggle icon and navbar ================================*/
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
};
/*=============================== Scroll Reveal ================================*/
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
});


ScrollReveal().reveal('.Services-container', { origin: 'top' });
ScrollReveal().reveal('.home-img, .Services-container, .Portfolio-box, .Contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.Home-contact h1, .About-img', { origin: 'left' });
ScrollReveal().reveal('.Home-contact p, .About-content', { origin: 'right' });

/*=============================== typed js ================================*/
const typed = new Typed('.multiple-text', {
    strings: ['Front-End Devloper', 'Web-Designer', 'Video-Editor'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true, 
});