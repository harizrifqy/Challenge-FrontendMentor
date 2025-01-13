const navLinks = document.querySelector('.nav-links');
// ketika hamburger menu dikilik
document.querySelector('.hamburger-menu').onclick = () => {
    navLinks.classList.toggle('active');
}
// klik diluar sidebar untuk menghilangkan navbar
const hamburger = document.querySelector('.hamburger-menu');

document.addEventListener('click', function(e) {
    if( !hamburger.contains(e.target) && !navLinks.contains(e.target)){
        navLinks.classList.remove('active');
    }
}) 