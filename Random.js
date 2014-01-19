$(document).ready(function() {
	//produce random number
	var answer = (Math.floor(Math.random() * 100) + 1);
	$("#enter").click(function() {
    var guess=$("#field").val();
    var diff = Math.abs(guess-answer);
	
	
	//set default background
    if (isNaN(guess)) {$("body").css("background-image", "url(backgrounds/start.png)");} 
    //check to see if letters, signs or anything over 100 will result as a WRONG input message.
	else if (guess<1 || guess>100) {$("body").css("background-image", "url(backgrounds/wrong.png)");}
    
	//compare and check for answers pending on which background shows
    else if (diff == 0) {$("body").css("background-image", "url(backgrounds/win.png)");}
	else if (diff<1 && diff>100) {$("body").css("background-image", "url(backgrounds/wrong.png)");}
	else if (diff >=1 && diff <= 10) {$("body").css("background-image", "url(backgrounds/hot.png)");}
	else if (diff >=11 && diff <= 20) {$("body").css("background-image", "url(backgrounds/almosthot.png)");}
	else if (diff >=21 && diff <= 30) {$("body").css("background-image", "url(backgrounds/kindahot.png)");}
	else if (diff >=31 && diff <= 40) {$("body").css("background-image", "url(backgrounds/warmer.png)");}
	else if (diff >=41 && diff <= 50) {$("body").css("background-image", "url(backgrounds/almostwarm.png)");}
	else if (diff >=51 && diff <= 60) {$("body").css("background-image", "url(backgrounds/kindawarm.png)");}
	else if (diff >=61 && diff <= 70) {$("body").css("background-image", "url(backgrounds/cooler.png)");}
	else if (diff >=71 && diff <= 80) {$("body").css("background-image", "url(backgrounds/kindacold.png)");}
	else if (diff >=81 && diff <= 90) {$("body").css("background-image", "url(backgrounds/coldasice.png)");}
	else if (diff >=91 && diff <= 100) {$("body").css("background-image", "url(backgrounds/FREEZING.png)");}
	});
	
	//reset button
	$("#restart").click(function(){
  	location.reload();
	});
});