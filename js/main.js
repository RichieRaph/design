let menuIcon = document.querySelector('#menu-icon');

let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');

let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scroll;
        let offset = sec.offsetTop - 1000;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top <= offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    
    let nav = document.querySelector('header');

    nav.classList.toggle('sticky', window.scroll >= 1000);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.content h3', { origin: 'top'});
ScrollReveal().reveal('.content h4', { origin: 'left'});
ScrollReveal().reveal('.content h5', { origin: 'right'});

let 