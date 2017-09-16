$("#start").on("click", function(){
$(".hide").css({"display":"block"});
$("#start, .Trivia, .text-center ").css({"display":"none"});
var counter = 15;


var timer = setInterval(function () {
// fire
counter--;
if(counter === 0){
clearInterval(timer);
$(".hide").css({"display":"none"});
check()
}
$("#display").html(counter)

}, 1000)
});

$("#done").on("click", function(){
$(".hide").css({"display":"none"});
check()
})
// setInterval
function check(){
var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

if (question1 ==="1987") {
	correct++;
} else if (question1 ==="") {
	unanswered++; 
} else {
	incorrect++;
}


if (question2 ==="Frances") {
	correct++;
} else if (question2 ==="") {
	unanswered++; 
} else {
	incorrect++;
}


if (question3 ==="Penny") {
	correct++;
} else if (question3 ==="") {
	unanswered++; 
} else {
	incorrect++;
}



document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_correct").innerHTML = "Correct Answers: " + correct;
document.getElementById("number_incorrect").innerHTML = "Incorrect Answers: " + incorrect;
document.getElementById("number_unanswered").innerHTML = "Unanswered Answers: " + unanswered;
}

