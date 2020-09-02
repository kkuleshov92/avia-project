window.addEventListener('DOMContentLoaded', function() {
    const bars = document.querySelector('.bars'),
        mobMenu = document.querySelector('.header__menu-wrapper');

    if(!bars) {
        return false;
    }

    bars.addEventListener('click', function() {
        this.classList.toggle('is-active');
        mobMenu.classList.toggle('is-active');
    })
})