var blackslider = document.querySelectorAll("#blackslider .slide");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 8000);
function nextSlide() {
  blackslider[currentSlide].className = "slide";
  currentSlide = (currentSlide + 1) % blackslider.length;
  blackslider[currentSlide].className = "slide showing";
}
