//get our buttons from the DOM
const toggleItem = document.querySelectorAll('.toggle-item');

//add an eventListener to each of the buttons
toggleItem.forEach(item => {
  item.addEventListener('click', () => { 
    
    //reset the classes
    toggleItem.forEach(tag => {
            tag.classList.remove('select')
        })
    
    item.classList.toggle('select')

  })
})

//storing pages
const notes = document.querySelector(".drawer-notes");
const about = document.querySelector(".about");

//storing buttons

const noteButton = document.querySelector(".notes-button");
const aboutButton = document.querySelector(".about-button");


//click notes remove hide for notes, add it for others
noteButton.addEventListener('click', () => {
    notes.classList.remove('hide')
    about.classList.add('hide')
})

//click about remove hide for about and add it for others
aboutButton.addEventListener('click', () => {  
    about.classList.remove('hide')
    notes.classList.add('hide')
})