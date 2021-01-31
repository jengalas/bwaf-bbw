document.addEventListener("scroll", function(){
    let top = document.querySelector(".nav-bbw").getBoundingClientRect().top;
    if (top < -100){
        document.querySelector(".nav-bbw").classList.add("small")
    } else {
        document.querySelector(".nav-bbw").classList.remove("small")
    }
})