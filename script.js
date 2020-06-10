var startButton = document.querySelector("#startButton");
var endPageButton = document.querySelector("#viewHS");
var submitButton = document.querySelector("#subButton");
var nextButton = document.querySelector("#nextButton");
var choices = document.querySelector("#choices");
var questionNum = document.querySelector("#questionNum");
var questionField = document.querySelector("#questionField");
//Choice
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
//Stores our questions, question options, and user answers
var questions=["Test Question 1","Test Question 2","Test Question 3","Test Question 4","Test Question 5","Test Question 6","Test Question 7","Test Question 8","Test Question 9","Test Question 10"];
var questionCount = ["Question 1","Question 2","Question 3","Question 4","Question 5","Question 6","Question 7","Question 8","Question 9","Question 10"];
var userChoice = ["","","","","","","","","",""];
var answers = ["choice-A","choice-A","choice-A","choice-A","choice-A","choice-A","choice-A","choice-A","choice-A","choice-A"];
//Keeps track of what question we're on
var currentIndex= 1;
//Time in seconds of quiz length
var time = 120;
//Keeps track of how many answers user got correct
var numRight=0;
//Get's set to true when last question of quiz completed
var quizFinished = false;

startButton.addEventListener("click", function(){
    setInterval(function(){
        if(time > -1 && !quizFinished){
        document.querySelector("#insertTime").textContent = time + " sec";
        time--;
        }
        else{
            //
            questionNum.textContent = "The quiz has been completed. Let's see how you did!";
            questionField.style.textAlign = "center";
            questionField.textContent = "You got " + numRight + "/10 questions right.\nThat's a score of "+((numRight/10)*100)+"%. It only took you "+ (120-time) + " seconds!";
            choices.style.visibility = "hidden";
            endPageButton.style.display = "block";
            
        }
    }, 1000);
    startButton.style.visibility = "hidden";
    choices.style.visibility = "visible";

    //Initializes Question texts
    questionNum.textContent = questionCount[0];
    questionField.textContent = questions[0];
});

submitButton.addEventListener("click", function(){
    event.preventDefault();
    //On clicking submit we store the choice of user
    userChoice = checkRadio();
    if(userChoice == answers[currentIndex] && numRight >= currentIndex)
    numRight++;
});

//When user clicks nextButton the next question data will populate
nextButton.addEventListener("click",function (){
    event.preventDefault();
    uncheckRadio();
    questionNum.textContent = questionCount[currentIndex];
    questionField.textContent = questions[currentIndex];
    if(currentIndex < questions.length)
    currentIndex++;
    else{
        quizFinished = true;
    }
});

//Checks to see which radio was chosen
function checkRadio(){
    if(choice1.checked)
    return choice1.value;
    if(choice2.checked)
    return choice2.value;
    if(choice3.checked)
    return choice3.value;
    if(choice4.checked)
    return choice4.value;
    else
        return false;
}

//Unchecks whichever radio selected on previous question
function uncheckRadio(){
    if(choice1.checked)
        choice1.checked = false;
    if(choice2.checked)
        choice2.checked = false;
    if(choice3.checked)
        choice3.checked = false;
    if(choice4.checked)
        choice4.checked = false;
}