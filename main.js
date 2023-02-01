const menuHamContainer = document.querySelector('.menuContainer');
const menuBars = document.querySelector('.menu-bars');
let lineBarsOne = document.querySelector(".line1__bars-menu");
let lineBarsTwo = document.querySelector(".line2__bars-menu");
let lineBarsThree = document.querySelector(".line3__bars-menu");

menuBars.addEventListener("click", () => {
    lineBarsOne.classList.toggle("activeline1__bars-menu");
    lineBarsTwo.classList.toggle("activeline2__bars-menu");
    lineBarsThree.classList.toggle("activeline3__bars-menu");
    menuHamContainer.classList.toggle('inactive');
});