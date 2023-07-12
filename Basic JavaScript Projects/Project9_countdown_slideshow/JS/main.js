function countdown() { 
    var seconds = document.getElementById("seconds").value;
    function tick() {
        seconds = seconds -1; //tick the seconds down by 1
        timer.innerHTML = seconds; //timer equlas the second
        var time = setTimeout(tick, 1000); //1 second tick down
        if (seconds == -1) { //if less than 1 alert
            alert("Time's up!");
            clearTimeout(time); //clear timer
            timer.innerHTML = "";
        }
    }
    tick();
}
// index number
let slideIndex = 1;
showSlides(slideIndex);

// Next or back controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); //all slide elemtents
  let dots = document.getElementsByClassName("dot"); //all dot elements
  if (n > slides.length) {slideIndex = 1} //if the index is higher than 3 return to 1
  if (n < 1) {slideIndex = slides.length} //if less than 1 go back to 3
  for (i = 0; i < slides.length; i++) { //hide slides
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {  //remove the active class
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //display the slide and the active dot for each slide
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}