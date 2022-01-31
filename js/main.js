let burger = document.getElementsByClassName('header__burger-btn')
let menu = document.getElementsByClassName('header__nav-wrap')
let overlay = document.getElementsByClassName('header__overlay')



function toggleMenu(){
    burger[0].classList.toggle('header__burger-btn--close')
    menu[0].classList.toggle('header__nav-wrap--close')
    overlay[0].classList.toggle('header__overlay--open')
}

burger[0].addEventListener("click", toggleMenu)

