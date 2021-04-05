let h = document.getElementById("hamburger");

h.addEventListener("click", function(){
    h.parentElement.classList.toggle("expanded");
})