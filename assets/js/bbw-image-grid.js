let gridImgs = document.querySelectorAll(".bbw-image-grid img");
let captions = document.querySelectorAll(".bbw-image-grid + figcaption span");
let showCount = Math.min(6, gridImgs.length);
var arr = [];

function shuffleGrid() {

  arr = [];
  while (arr.length < showCount) {
    var r = Math.floor(Math.random() * gridImgs.length) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  for (let i = 0; i < gridImgs.length; i++) {
    captions[i].classList.remove("last");
    if (!arr.includes(i + 1)) {
      gridImgs[i].style.display = "none";
      captions[i].style.display = "none";
    } else {
      gridImgs[i].style.display = "block";
      captions[i].style.display = "inline-block";
      if (i + 1 == Math.max.apply(Math, arr)) {
        captions[i].classList.add("last");
      }
    }
  }

}
shuffleGrid();
setInterval(function () {
  shuffleGrid();
}, 3000)