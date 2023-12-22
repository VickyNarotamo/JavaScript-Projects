function startCountdown() {
    var secondsInput = document.getElementById("seconds").value;
    var seconds = parseInt(secondsInput, 10);
    if (isNaN(seconds) || seconds <= 0) {
        alert("Please enter a valid positive number for seconds.");
        return;
    }
    countdown(seconds);
}

function countdown(seconds) {
    var timerElement = document.getElementById("timer");
    var currentSeconds = seconds;
    timerElement.textContent = currentSeconds;
    var countdownInterval = setInterval(function() {
        currentSeconds--;
        timerElement.textContent = currentSeconds;
        if (currentSeconds <= 0) {
            clearInterval(countdownInterval);
            timerElement.textContent = "Time's up!";
            alert("Time's up!");
        }
    }, 1000);
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (dots,length > 0) {
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";
    }
    slides[slideIndex - 1].style.display = "block";
}
