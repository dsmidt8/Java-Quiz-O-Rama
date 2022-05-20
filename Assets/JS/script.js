//variables that relate to HTML document
var timer = document.getElementById("timer");
var startBtn = document.getElementById("startBtn");
var choiceA = document.getElementById("answer1");
var choiceB = document.getElementById("answer2");
var choiceC = document.getElementById("answer3");
var choiceD = document.getElementById("answer4");

//Questions Array

var questions = [
    {
        question: "What must you do to a function to make it run in JavaScript?",
        choices: ["a. Close it", "b. Open it", "c. call it", "d. Drop it like it's hot"],
        answer: "c. call it"
    },
    {
        question: "How many times does this class make my anus burn",
        choices: ["a. once", "b. all the times", "c. my anus is cool as a cucumber", "d. once to twice a week"],
        answer: "b. all the times"
    }, 
    {
        question: "What javascript rule gets Id's from the HTML document?",
        choices: ["a. .getElementById", "b. .getAttribute", "c. .gitPull", "d. the retreive from HTML function" ],
        answer: "a. .getElementById"
    },
    {
        question: "What HTML element do you use to link a JS file?",
        choices: ["a. <link>", "b. <script>", "c. <alert>", "d. <source>"],
        answer: "b. <script>"
    },
];

//Timer Function???
function countdown() {

    //starting time on clock
    var timeLeft = 60

    var timeInterval = setInterval(function (){

       //time still on clock
        if (timeLeft >= 1){
            timerEl.textContent = timeLeft;
            timeLeft--;
        } //When countdown reaches zero display initials prompt
        else {
            timerEl.textContent = ""
        }

    }, 1000 )

}