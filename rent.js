let search = document.querySelector('.search-box');

document.querySelector('#search-box').onclick = () => {
    search.classList.toggle('active')
}

let menu = document.querySelector('.navbar');


document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
}