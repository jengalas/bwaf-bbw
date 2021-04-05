let navBtns = document.querySelectorAll("nav button");
let nav = document.querySelector("nav");
let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
let footer = document.querySelector("footer");

for (btn of navBtns){
    btn.addEventListener("click", function(){
        let activeBtn = document.querySelector("nav button.active");
        if (activeBtn != null && activeBtn != this){
            document.querySelector("nav button.active").classList.remove("active");
            nav.classList.remove("subnav-open");
        }
        this.classList.toggle("active");
        nav.classList.toggle("subnav-open");

        if(nav.querySelectorAll("button.active").length == 1){
            nav.classList.remove("lg");
        } else if (scrollTop < 100){
            nav.classList.add("lg");
        }

    })
}



// HOMEPAGE

if (document.body.id == "homepage"){

    let randomPattern = Math.ceil(Math.random()*3);
    document.getElementById("custom").style.backgroundImage="url(/assets/img/pattern"+randomPattern+".jpg)";

    // scroll nav
    window.onscroll=function(){
        scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        if (scrollTop >=100){
            nav.classList.remove("lg");
        } else {
            nav.classList.add("lg");
        }
    }

} else {
        
    nav.classList.remove("lg");

}


// LAZY LOAD PATTERNS

let scrollpos = window.scrollY + window.innerHeight*3/4;

let imgContainers = document.querySelectorAll(".image-container");
for (let imgContainer of imgContainers){
    imgContainer.style.backgroundImage = "url('/assets/img/pattern-sm-"+Math.ceil(Math.random() * 3)+".png')";
    fadeInImage(imgContainer);
    imgContainer.onclick=function(e){e.preventDefault();console.log(imgContainer.offsetTop)}
}

// scroll to load image
function fadeInImage(element){
    if (scrollpos >= element.offsetTop) { element.classList.add("fade-in") }
    else { element.classList.remove("fade-in") }
}

window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY + window.innerHeight*3/4;
    for (let imgContainer of imgContainers){
        fadeInImage(imgContainer);
    }
})



// EASTER EGG

let numPatterns = 3;
let randomPattern = Math.ceil(Math.random() * numPatterns);
document.querySelector("#pattern" + randomPattern).style.display = "block";

// PATTERN 1

function createPattern1(){
  let quantity = (window.innerWidth+200)/110 * (window.innerHeight+200)/110;
  for (let i=0;i<quantity;i++){
    let mark = document.createElement("DIV");
    mark.classList.add("mark-container");
    mark.innerHTML = "<div class='mark'></div>";
    mark.addEventListener("mouseenter", function(){
      mark.classList.remove("animate");
      void mark.offsetWidth;
      mark.classList.add("animate");
    })
    document.getElementById("pattern1").append(mark);
  }
}

// PATTERN 2 & 3

function createPattern2_3(){
  for (let i=0;i<(window.innerHeight+200)/90;i++){
    let row = document.createElement("DIV");
    row.classList.add("row");
    for (let i=0;i<(window.innerWidth+200)/118 - 1;i++){
      let mark = document.createElement("IMG");
      mark.src = "https://i.ibb.co/n10b5ZH/Group-1.png";
      mark.addEventListener("mouseenter", function(){
        mark.classList.remove("animate");
        void mark.offsetWidth;
        mark.classList.add("animate");
      })
      row.append(mark);
    }
    if (randomPattern == 2){
        document.getElementById("pattern2").append(row);
    } else if (randomPattern == 3){
        document.getElementById("pattern3").append(row);
    }
  }
}

// generate, and resize

if (randomPattern == 2){
  createPattern2_3();
  window.addEventListener("resize", function(){
    document.getElementById("pattern2").innerHTML = '';
    createPattern2_3();
  })
} else if (randomPattern == 1){
  createPattern1();
  window.addEventListener("resize", function(){
    document.getElementById("pattern1").innerHTML = '';
    createPattern1();
  })
} else if (randomPattern == 3){
  createPattern2_3();
  window.addEventListener("resize", function(){
    document.getElementById("pattern3").innerHTML = '';
    createPattern2_3();
  })
}


// Unhide easter egg when scroll to bottom
window.addEventListener("scroll", function(){
    scrollpos = window.scrollY;
    if (scrollpos+window.innerHeight >= footer.offsetTop + footer.offsetHeight){
        setTimeout(function(){
            document.body.classList.add("view-easter-egg");
        },300);
    } else {
        document.body.classList.remove("view-easter-egg");
    }
})