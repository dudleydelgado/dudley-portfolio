const menuHamContainer = document.querySelector('.menuContainer');
const menuBars = document.querySelector('.menu-bars');
const menuLinks = document.querySelectorAll('.menuContainer__link')
//Transform menuLinks nodelist in array
let menuElementsLinks = [...menuLinks];
//menuHamburguerBars variables
let lineBarsOne = document.querySelector(".line1__bars-menu");
let lineBarsTwo = document.querySelector(".line2__bars-menu");
let lineBarsThree = document.querySelector(".line3__bars-menu");
//Scroll arrow-Up
const btnScroll = document.getElementById('btn__scrollTop')

window.onscroll = () => {
    add_btn_scrolltop()
  }

  const add_btn_scrolltop = () => {
    if(window.scrollY < 400){
      btnScroll.classList.remove('btn__scrollOn')
    } else {
      btnScroll.classList.add('btn__scrollOn')
    }
  }

  btnScroll.addEventListener('click', () => {
    window.scrollTo(0, 0)
  })


menuBars.addEventListener("click", toggleElementsDom)

menuElementsLinks.forEach((e) => {
    e.addEventListener('click', toggleElementsDom)
})

function toggleElementsDom(){
    menuHamContainer.classList.toggle('inactive');
    lineBarsOne.classList.toggle("activeline1__bars-menu");
    lineBarsTwo.classList.toggle("activeline2__bars-menu");
    lineBarsThree.classList.toggle("activeline3__bars-menu");
}