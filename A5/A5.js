let currentSlide = 1;
showSlide(currentSlide);

function changeSlide(n) {
  showSlide(currentSlide += n);
}

function showSlide(n) {
  let slides = document.getElementsByClassName("slideshow-image");
  let descriptions = document.getElementsByClassName("image-description");
  
  if (n > slides.length) {
    currentSlide = 1;
  }
  if (n < 1) {
    currentSlide = slides.length;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    descriptions[i].style.display = "none";
  }
  
  slides[currentSlide - 1].style.display = "block";
  descriptions[currentSlide - 1].style.display = "block";
}

setInterval(function() {changeSlide(1)}, 3000); 