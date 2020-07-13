const toggleTag = document.querySelector(".info")
const navTag = document.querySelector(".right-box")
const messCont = document.querySelector(".inner-message-container")
const messType = document.querySelector(".write")
const typer = document.querySelector(".type-container")

// when click toggle tag = toggle class of open on main tag
// if open make toggleTag say "close" if shut make toggleTag say "menu"
toggleTag.addEventListener('click', function () {

    navTag.classList.toggle("open")
    messCont.classList.toggle("expand")
    messType.classList.toggle("expand")
    typer.classList.toggle("type-expand")
   
    toggleTag.classList.toggle("selected")
   
    if (toggleTag.classList.contains("selected")) {
        toggleTag.innerHTML = `<img src="assets/Info -  Tool tip.svg">`
       } else {
           toggleTag.innerHTML = `<img src="assets/Info - gray.svg">`
       }

})