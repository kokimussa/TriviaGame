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
var unaswered = "";
if (question1 ==="1987") {
correct++;
}

if (question2 ==="Frances") {
correct++;
}
if (question3 ==="Penny") {
correct++;
}
if (question1 !=="1987") {
incorrect++;
}

if (question2 !=="Frances") {
incorrect++;
}
if (question3 !=="Penny") {
incorrect++;
}
if (question1 = "") {
unaswered++;
}

if (question2 = "") {
unaswered++;
}
if (question3 = "") {
unaswered++;
}
document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_correct").innerHTML = "Correct Answers: " + correct;
document.getElementById("number_incorrect").innerHTML = "Incorrect Answers: " + incorrect;
document.getElementById("number_unaswered").innerHTML = "Unanswered Answers: " + "";
}

