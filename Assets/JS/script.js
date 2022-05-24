//variables that relate to HTML document===============
let startButton = document.getElementById("start-btn")
let nextButton = document.getElementById("next-button")
let startScreen = document.getElementById("starting-page")

let questionContainer = document.getElementById("question-container")
let questionElement = document.getElementById("question")
let answerButtonsElement = document.getElementById("answer-buttons")

let yourScore= document.getElementById("your-score")
let highScores= document.getElementById("high-scores")
let highScoreList = document.getElementById('highScoreList')

let shuffledQuestions, currentQuestionIndex

let timeLeft = document.getElementById("time-left")
let countDownEl = document.getElementById('count-down')
let finalScore = document.getElementById('finalScore')
let totalTime = 60
let initSubmit = document.getElementById('initialsBtn')
let goBackBtn = document.getElementById('Go-Back-Button')
let highScoreLink = document.getElementById('high-score-header')

//header High Score link clicked
highScoreLink.addEventListener('click', displayHighScores)

//go Back Clicked = start screen
goBackBtn.addEventListener('click', resetQuiz)

//Start button clicked
startButton.addEventListener('click', startGame)

//initals submit button clicked
initSubmit.addEventListener('click', endGame)

function startGame(){
    totalTime=60
    console.log('started')
    startScreen.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random () - .5 )
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide')
    setNextQuestion()

    
    timeLeft.innerText= totalTime
    startTimer()
   
}


//timer Functions
var timeInterval
function startTimer(){
     timeInterval = setInterval(function (){
        if (totalTime>0) {
            timeLeft.innerText = totalTime;
            totalTime--;
        }
        else {
            endGame()
        }
    }, 1000)
}

//shuffling questions
function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}


function showQuestion(question){
    //displays question
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        let button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('button')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })  
}

function resetState(){
    while(answerButtonsElement.firstChild){
         answerButtonsElement.removeChild
         (answerButtonsElement.firstChild)
    }

}

function selectAnswer (e){
    let selectedButton = e.target
    let correct = selectedButton.dataset.correct
    setStatusClass(selectedButton, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    if (!correct) {
        totalTime -= 10
    }

    if (questions.length < currentQuestionIndex +2){
        endGame ()
    }else{
        currentQuestionIndex++
        setNextQuestion()
    }
    
}

function setStatusClass(element, correct){
    clearStatusClass(element)
        if(correct){
            element.classList.add('correct')
        } else{
            element.classList.add('wrong')
        }       
    
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}





//add event listener function for form element selector .value
const initForm = document.getElementById('inputInit')
let userInit = initForm.value;


//end game function - displays initials input screen
function endGame(){
    yourScore.classList.remove('hide')
    questionContainer.classList.add('hide')
    highScores.classList.add('hide')
    clearInterval(timeInterval)

    finalScore.innerText = totalTime
 
    initSubmit.addEventListener('click', displayHighScores)
}





//display your scores
function displayHighScores(event){
    event.preventDefault();
    let userInit = initForm.value;

    yourScore.classList.add('hide')
    highScores.classList.remove('hide')
    startScreen.classList.add('hide')
    questionContainer.classList.add('hide')

    if (initForm.value === ""){
        alert("Please Input Initials");
        endGame();
    }

    // 2. Store initial & score in localStorage
    let userScore = {
        initial: userInit,
        score: totalTime
    }
    localStorage.setItem("highScore", JSON.stringify(userScore))
    
  
    //gets stored values as previousScore
    let previousScore = JSON.parse(localStorage.getItem("highScore"));
    //repeats displaying element of previous scores
    for (let i=0; i< previousScore.length; i++){
        let displayedScore = document.createElement("li")
        displayedScore.innerHTML = previousScore[i].initials+ ": " + previousScore[i].score;
        highScoreList.appendChild(displayedScore)
    }

    clearInterval(timeInterval)
}




   //inside for loop create new element
   //text content will be previous high [i] initial:score
   // append child inside for loop append newly created line element
   // call displayHighScore event, where to call function ie on click
    // display values on element, 


//Reset quiz for when Go Back button is clicked
function resetQuiz (){
     startScreen.classList.remove('hide')
     highScores.classList.add('hide')
     questionContainer.classList.add('hide')
     
     clearInterval(timeInterval)

     totalTime=60
 }






//Questions Array==================================================
var questions = [
    {
        question: "What must you do to a function to make it run in JavaScript?",
        answers: [
            {text: 'a. Close it', correct: false},
            {text: 'b. Open it', correct: false},
            {text: 'c. call it', correct: true},
            {text: 'd. Drop it like it is hot', correct: false},
        ] 
    },
    {
        question: "what do you use to store objects or arrays in local storage",
        answers: [
            {text: 'a. JSON.parse', correct: false},
            {text: 'b. JSON.stringify', correct: true},
            {text: 'c. JASON.spotify', correct: false},
            {text: 'd. JAMON.rastify', correct:false},
        ]
    }, 
    {
        question: "What javascript rule gets Id's from the HTML document?",
        answers: [
            {text: 'a. .getElementById', correct: true},
            {text: 'b. .getAttribute', correct: false },
            {text: 'c. .gitPull', correct: false },
            {text: 'd. the retreive from HTML function', correct: false },
        ]
    },
    {
        question: "What HTML element do you use to link a JS file?",
        answers: [
            {text: 'a. <link>', correct: false},
            {text: 'b. <script>', correct: true},
            {text: 'c. <alert>"', correct:false},
            {text: 'd. <source>', correct:false},
        ]
    },
];