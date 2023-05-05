let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('./icon/close.png');
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

    menuIcon.classList.remove('./icon/close.png');
    navbar.classList.remove('active');
};


const previewImage = (event) => {
    const imageFiles = event.target.files;
    const imageFilesLength = imageFiles.length;
    if (imageFilesLength > 0) {
        const imageSrc = URL.createObjectURL(imageFiles[0]);
        const imagePreviewElement = document.querySelector("#preview-selected-image");
        imagePreviewElement.src = imageSrc;
        imagePreviewElement.style.display = "block";
    }
};