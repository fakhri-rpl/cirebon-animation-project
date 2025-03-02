const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    hamburger.innerHTML = menu.style.display === 'block' ? '&#9553;' : '&#9776;';
});