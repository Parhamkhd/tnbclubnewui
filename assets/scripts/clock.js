
// Set the date we're counting down to
var countDownDate = new Date("Apr 30, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("days-num").innerText = days;

  document.getElementById("hours-num").innerHTML = hours;

  document.getElementById("minutes-num").innerHTML = minutes;

  document.getElementById("seconds-num").innerHTML = seconds;



    
 // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days-num").innerHTML = 'Expired';

    document.getElementById("hours-num").innerHTML = "Expired";
  
    document.getElementById("minutes-num").innerHTML = "Expired";

    document.getElementById("seconds-num").innerHTML = "Expired";

  }
}, 1000);


$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});