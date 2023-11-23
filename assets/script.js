// toggle class active
const navbarNav = document.querySelector ('.navbar-nav');
// muncul menu
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik luar sidebar untuk hilangkan nav
const menu = document.querySelector('#menu');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})