document.querySelectorAll(".slideshow").forEach(function (slideshow) {

  let slideIndex = 1;
  let interval = null;

  const slides = slideshow.querySelectorAll(".slide");
  const prev = slideshow.querySelector(".prev");
  const next = slideshow.querySelector(".next");

  const automatic = slideshow.dataset.automatic === "true";

  function showSlides(n) {
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex - 1].style.display = "block";
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function startAuto() {
    if (!automatic) return;

    interval = setInterval(function () {
      plusSlides(1);
    }, 5000); // 5 seconds (change if desired)
  }

  function stopAuto() {
    if (interval) clearInterval(interval);
  }

  // Arrow events
  if (prev) prev.addEventListener("click", function () {
    plusSlides(-1);
    stopAuto();
  });

  if (next) next.addEventListener("click", function () {
    plusSlides(1);
    stopAuto();
  });

  showSlides(slideIndex);
  startAuto();

});