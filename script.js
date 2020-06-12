//Assigning selector values for buttons and fields to replace
var startButton = document.querySelector("#startButton");
var lockInButton = document.querySelector("#subButton");
var nextButton = document.querySelector("#nextButton");
var choices = document.querySelector("#choices");
var questionNum = document.querySelector("#questionNum");
var questionField = document.querySelector("#questionField");
//Choices and Choice Texts
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
var choice1Field = document.querySelector("#choice1Field");
var choice2Field = document.querySelector("#choice2Field");
var choice3Field = document.querySelector("#choice3Field");
var choice4Field = document.querySelector("#choice4Field");
//Points to our ordered list in highscores html
var hsList = document.querySelector("#hsList");
//Keeps track of what question we're on
//Starts at 1 because we're initializing our first question as soon as we start the quiz
var currentIndex= 1;
//Time in seconds of quiz length
var time = 120;
//Keeps track of how many answers user got correct
var numRight=0;
//Get's set to true when last question of quiz completed
var quizFinished = false;
//Gives us current time
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var hMs = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()+")";
var dateTime = date+'('+hMs;
//Stores our questions, question options, and user answers
var quizInfo = [
    {
        questionNum: "Question 1",
        question:"Which is not a true statement about variables in JavaScript Programs?",
        optionA: "A. Are used for storing numbers, dates, or other values",
        optionB: "B. Used for problem-solving",
        optionC: "C. Variables can store up to 2 values",
        optionD: "D. All are true",
        answer: "C",
        userAnswer: ""
    },
    {
        questionNum: "Question 2",
        question: "What should appear at the very end of your JavaScript in HTML?",
        optionA: "A. </script>",
        optionB: "B. <script>",
        optionC: "C. The END statement",
        optionD: "D. JavaScript has no closing tag",
        answer: "A",
        userAnswer: ""
    },
    {
        questionNum: "Question 3",
        question: "Which of the following is not a valid JavaScript variable name?",
        optionA: "VARIABLE",
        optionB: "_first_and_last_names",
        optionC: "FirstAndLast",
        optionD: "2names",
        answer: "D",
        userAnswer: ""
    },
    {
        questionNum: "Question 4",
        question: "What is the correct syntax for referring to an external script called \" abc.js\"?",
        optionA: "A. <script href=\"abc.js\">",
        optionB: "B. <script name=\" abc.js\">",
        optionC: "C. <script src=\" abc.js\">",
        optionD: "D. None of the above",
        answer: "C",
        userAnswer: ""
    },
    {
        questionNum: "Question 5",
        question: "Which of the following is not considered a JavaScript operator?",
        optionA: "A. typeof",
        optionB: "B. new",
        optionC: "C. delete",
        optionD: "D. this",
        answer: "D",
        userAnswer: ""
    },
    {
        questionNum: "Question 6",
        question: "Using _______ statement is how you test for a specific condition",
        optionA: "A. Select",
        optionB: "B. If",
        optionC: "C. Switch",
        optionD: "D. For",
        answer: "B",
        userAnswer: ""
    },
    {
        questionNum: "Question 7",
        question: "How do you write \"Hello World\" in an alert box?",
        optionA: "A. alertBox(\"Hello World\");",
        optionB: "B. msg(\"Hello World\")';",
        optionC: "C. alert(\"Hello World\");",
        optionD: "D. msgBox(\"Hello World\");",
        answer: "C",
        userAnswer: ""
    },
    {
        questionNum: "Question 8",
        question: "How to insert a comment that has more than one line?",
        optionA: "A. // This comment has \nmore than one line//",
        optionB: "B. /*This comment has \nmore than one line*/",
        optionC: "C. <!--This comment has \nmore than one line -->",
        optionD: "D. ////This comment has \nmore than one line",
        answer: "B",
        userAnswer: ""
    },
    {
        questionNum: "Question 9",
        question: "How do you find the number with the highest value of x and y?",
        optionA: "A. ceil(x,y);",
        optionB: "B. Math.ceil(x,y)",
        optionC: "C. top(x,y)",
        optionD: "D. Math.max(x,y)",
        answer: "D",
        userAnswer: ""
    },
    {
        questionNum: "Question 10",
        question: "Which event occurs when the user clicks on an HTML element?",
        optionA: "A. onclick",
        optionB: "B. onchange",
        optionC: "C. onmouseclick",
        optionD: "D. onmouseover",
        answer: "A",
        userAnswer: ""
    },
]
//We check to see if element exists on page
if(eleExists(startButton)){
    startButton.addEventListener("click", function(){
        var timer = setInterval(function(){
            //Time only ticks down if 
            if(time > 0 && !quizFinished){
            document.querySelector("#insertTime").textContent = time;
            time--;
            } 
            else {
                //Stops Timer
                clearInterval(timer);
                console.log("Done");
                //When time runs out or user finishes quiz, the page gets reformatted and a button to HS page appears
                //Initial textbox appears as well
                questionNum.textContent = "The quiz has been completed. Let's see how you did!";
                questionField.style.textAlign = "center";
                questionField.textContent = "You got " + numRight + "/10 questions right.\nYou got a time score of "+time+"!";
                choices.style.visibility = "hidden";
                document.querySelector("#submitScore").style.display = "block";
                document.querySelector("#hsButton").style.display = "block";
                //When submit button appears user can click submit to save score
                //When user clicks they'll save their score and page redirects to highscores page
                document.querySelector("#subHS").addEventListener("click", function(){
                    event.preventDefault();
                    var userName = document.querySelector("#name").value;
                    var temp = userName+" "+dateTime;
                    localStorage.setItem(temp, time);
                    });
            }
        }, 1000);
        startButton.style.visibility = "hidden";
        choices.style.visibility = "visible";

        //Initializes question information when start button clicked 
        questionNum.textContent = quizInfo[0].questionNum;
        questionField.textContent = quizInfo[0].question;
        choice1Field.textContent = quizInfo[0].optionA;
        choice2Field.textContent = quizInfo[0].optionB;
        choice3Field.textContent = quizInfo[0].optionC;
        choice4Field.textContent = quizInfo[0].optionD;
    });
}
//We check to see if element exists on page
if(eleExists(lockInButton)){
    lockInButton.addEventListener("click", function(){
        event.preventDefault();
        //On clicking lockIn we store the choice of user
        quizInfo[currentIndex - 1].userAnswer = checkRadio();
        //Shows chosenText on click for user to see
        document.querySelector("#chosenText").style.visibility = "visible";
        //Shows what choice user selected
        document.querySelector("#chosen").textContent = quizInfo[currentIndex - 1].userAnswer;
    });
}
//We check to see if element exists on page
if(eleExists(nextButton)){
    //When user clicks nextButton the next question data will populate
    nextButton.addEventListener("click",function (){
        event.preventDefault();
        //Checks if previous answer was answered correctly and counts how many user has right
        if(quizInfo[currentIndex-1].userAnswer === quizInfo[currentIndex-1].answer)
            numRight++;
        else{
            //time goes down if user gets question wrong, adjusted for no negative times
            if(time >= 10)
                time -= 10;
            else
                time = 0;
        }
        //Unchecks previously checked radio input
        uncheckRadio();
        //Refeshes answer chosen and hides chosen field
        document.querySelector("#chosen").textContent = "";
        document.querySelector("#chosenText").style.visibility = "hidden";
        //Grabs the next question fields
        //When currentIndex becomes equal to the length of questions, we no longer try to access our quizInfo and quiz is finished
        //quizInfo length is subtracted because we already initialized question 1 when the quiz started
        if(currentIndex <= quizInfo.length - 1){
        questionNum.textContent = quizInfo[currentIndex].questionNum;
        questionField.textContent = quizInfo[currentIndex].question;
        choice1Field.textContent = quizInfo[currentIndex].optionA;
        choice2Field.textContent = quizInfo[currentIndex].optionB;
        choice3Field.textContent = quizInfo[currentIndex].optionC;
        choice4Field.textContent = quizInfo[currentIndex].optionD;
        currentIndex++;
        }
        else{
            //If there are no further questions the quiz is finished
            quizFinished = true;
        }
    });
}
//Checks to see if hsList exists on page
if(eleExists(hsList))
{
    var arrayIndices = 0;
    var keyValArray=[];
    //Loops through localstorage and sorts values into create an array
    for(var i = 0; i < localStorage.length;i++){
        //Creates a new object in our array for the next key pair
        keyValArray.push({Name:"",Score:"", Time:""});
        //Assigns object properties for name and score
        keyValArray[i].Score = localStorage.getItem(localStorage.key(i));
        var nameAndTime = (localStorage.key(i));
        var temp = nameAndTime.split(" ");
        console.log(temp);
        keyValArray[i].Name = temp[0];
        keyValArray[i].Time = temp[1];
        //Keeps track of new index created
        arrayIndices++;
        }
    
    // console.log(keyValArray);
    //Sorts by swapping indices when score[x] < score[later index], we want the highest score at index 0
    //We also want our paid
    for(var x=0; x < keyValArray.length; x++){
        for(var i=x+1; i < keyValArray.length;i++){
            if(parseInt(keyValArray[x].Score) < parseInt(keyValArray[i].Score)){
                var temp1 = keyValArray[x].Score;
                var temp2 = keyValArray[i].Score;
                var temp3 = keyValArray[x].Name;
                var temp4 = keyValArray[i].Name;
                var temp5 = keyValArray[x].Time;
                var temp6 = keyValArray[i].Time;

                keyValArray[x].Score = temp2;
                keyValArray[i].Score = temp1;
                keyValArray[x].Name = temp4;
                keyValArray[i].Name = temp3;
                keyValArray[x].Time = temp6;
                keyValArray[i].Time = temp5;
            }
        }
    }
    //Appends each element to display up to top 10 entries (Won't display 10 if there aren't 10 indicies)
    if(localStorage.length !== 0){
        for(var i=0; i < arrayIndices  && i < 10; i++){
            var newLi = document.createElement("li");
            newLi.textContent = keyValArray[i].Name+" | "+keyValArray[i].Score+" seconds left | Date: "+keyValArray[i].Time;
            hsList.appendChild(newLi);
        }
    }
}

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

//Unchecks whichever radio selected
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
//Checks to see if the element exists on the current page
function eleExists(arg1){
    if(arg1 !== null)
        return true;
    else
        return false;
};