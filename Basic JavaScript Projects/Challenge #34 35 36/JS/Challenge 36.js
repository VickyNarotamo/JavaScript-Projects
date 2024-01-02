$(document).ready(function() {
    $("#slideshow > div:gt(0)").hide();
  
    setInterval(function() {
      $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    }, 3000);
  });

function openContactForm() {
  document.getElementById("contactForm").style.display = "block";
}

function closeContactForm() {
  document.getElementById("contactForm").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    // Any additional initialization code can go here, if needed.
});