var startButton = document.querySelector("#startButton");
var submitButton = document.querySelector("#subButton");
var nextButton = document.querySelector("#nextButton");
var choices = document.querySelector("#choices");
var questionNum = document.querySelector("#questionNum");
var questionField = document.querySelector("#questionField");

var questions=["Test Question 1","Test Question 2","Test Question 3","Test Question 4"];
var questionCount = ["Question 1","Question 2","Question 3","Question 4"];

startButton.addEventListener("click", function(){
    startButton.style.visibility = "hidden";
    choices.style.visibility = "visible";

    //Initializes Question texts
    questionNum.textContent = questionCount[0];
    questionField.textContent = questions[0];
});

nextButton.addEventListener("click",function (){
    var count = 1;
    questionNum.textContent = questionCount[count];
    questionField.textContent = questions[count];
    count++;
});
