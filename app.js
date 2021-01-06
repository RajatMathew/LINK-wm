var countDownDate = new Date("January 21 2021 10:00").getTime();

window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 100)
  })




// Update the count down every 1 second
var x = setInterval(function() {


  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
  // Display the result in the element with id="demo"
  document.getElementById("day").innerText = days;
  document.getElementById("hr").innerText = hours;
  document.getElementById("min").innerText = minutes;
  document.getElementById("sec").innerText = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "&nbsp;";
  }
}, 1000);
