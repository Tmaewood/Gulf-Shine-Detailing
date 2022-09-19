// Collapse navbar on click
const links = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar-collapse');

links.forEach(link => {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('show')) navbar.classList.remove('show');
    })
})


