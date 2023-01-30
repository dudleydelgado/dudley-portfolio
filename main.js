const menuHamContainer = document.querySelector('.menuContainer');
const menuHamIcon = document.querySelector('.menuContainer__icon');

menuHamIcon.addEventListener('click', () => {
    menuHamContainer.classList.toggle('inactive');
})