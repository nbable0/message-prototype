const input = document.querySelector('.three-dot-sel');
const content = document.querySelector(".dropdown-content")

//toggle 
input.addEventListener("click", function() {
  content.classList.toggle("show")
})

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.three-dot-sel')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}