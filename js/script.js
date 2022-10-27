let menuMobile = document.querySelector('.menuMobile')
let hamburger = document.querySelector('.hamburger')

let menuOpen = false

function activeMenu(){
    if(menuOpen === false){
        menuMobile.classList.add('open')
        hamburger.classList.add('active')
        menuOpen = true
    }else{
        menuMobile.classList.remove('open')
        hamburger.classList.remove('active')
        menuOpen = false
    }
}

hamburger.addEventListener('click', activeMenu)