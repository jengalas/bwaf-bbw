document.querySelectorAll(".slideshow").forEach(function(slideshow) {

  let slideIndex = 1;
  const slides = slideshow.querySelectorAll(".slide");
  const prev = slideshow.querySelector(".prev");
  const next = slideshow.querySelector(".next");

  function showSlides(n) {
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    slides.forEach(slide => slide.style.display = "none");

    slides[slideIndex - 1].style.display = "block";
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Attach arrow events (no more inline onclick needed)
  if (prev) prev.addEventListener("click", () => plusSlides(-1));
  if (next) next.addEventListener("click", () => plusSlides(1));

  showSlides(slideIndex);

});