let navBtns = document.querySelectorAll("nav button");
let nav = document.querySelector("nav");
let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
let footer = document.querySelector("footer");

for (btn of navBtns){
    btn.addEventListener("click", function(event){
        event.stopPropagation();
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

// Close the dropdown menu if the user clicks outside of it
window.addEventListener("click", function(){
  nav.classList.remove("subnav-open");
  if (document.querySelector("nav button.active")!=null){
    document.querySelector("nav button.active").classList.remove("active");
  }
});



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

let imgContainers = document.querySelectorAll(".image-container, .pretty-load");
for (let imgContainer of imgContainers){
    imgContainer.style.backgroundImage = "url('/assets/img/pattern-sm-"+Math.ceil(Math.random() * 3)+".png')";
    fadeInImage(imgContainer);
}

// scroll to load image
function fadeInImage(element){
    if (scrollpos >= element.offsetTop) { 
      element.classList.add("fade-in");
      setTimeout(function(){
        element.style.display = "inline";
      },500)
    }
    else { 
      element.classList.remove("fade-in");
      element.style.display = "inline-block";
    }
}

window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY + window.innerHeight*3/4;
    for (let imgContainer of imgContainers){
        fadeInImage(imgContainer);
    }
})


// SCREENSAVER
let timer = 0;
//logo width 50px, logo height 46px, margin right 7px;
let quantityX = Math.floor(window.innerWidth/(50+7));
let quantityY = Math.floor(window.innerHeight/42);

for (let i=0;i<quantityY;i++){
  for (let j=0;j<quantityX;j++){
    let ss_img = document.createElement("IMG");
    ss_img.style.top = i*42 + "px";
    ss_img.style.left = j*60 + "px";
    if (i%2==0){
      ss_img.style.left = j*60 - 30 + "px";
    }
    ss_img.src = "/assets/img/logo-sm.svg";
    document.getElementById("screensaver").appendChild(ss_img);
  }
}

setInterval(function(){
  timer+=2;
  var ssImgs = document.querySelectorAll('#screensaver img');
  let randomImg = ssImgs[Math.floor((Math.random() * ssImgs.length))];
  randomImg.style.opacity = 1;
  if (timer >= 16){
    document.body.classList.add("screensaver");
  }
  // console.log(timer);
},2000)

document.addEventListener("mousemove", function(){stopScreensaver()});
window.addEventListener("scroll", function(){stopScreensaver()});
document.addEventListener("click", function(){stopScreensaver()});

function stopScreensaver(){
    timer = 0;
    document.body.classList.remove("screensaver");
    setTimeout(function(){
      for (let img of document.querySelectorAll('#screensaver img')){img.style.opacity=0}
    })
}


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