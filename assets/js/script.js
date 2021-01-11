let navBtns = document.querySelectorAll("nav button");
let nav = document.querySelector("nav");
let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

for (btn of navBtns){
    btn.addEventListener("click", function(){
        let activeBtn = document.querySelector("nav button.active");
        if (activeBtn != null && activeBtn != this){
            document.querySelector("nav button.active").classList.remove("active")
        }
        this.classList.toggle("active");

        if(nav.querySelectorAll("button.active").length == 1){
            nav.classList.remove("lg")
        } else if (scrollTop < 100){
            nav.classList.add("lg")
        }

    })
}

window.onscroll=function(){
    scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (scrollTop >=100){
        nav.classList.remove("lg");
    } else {
        nav.classList.add("lg");
    }
}

let randomPattern = Math.ceil(Math.random()*3);
document.getElementById("custom").style.backgroundImage="url(/assets/img/pattern"+randomPattern+".jpg)";