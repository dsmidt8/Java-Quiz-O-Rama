//variables that relate to HTML document===============
let startButton = document.getElementById("start-btn")
let nextButton = document.getElementById("next-button")
let startScreen = document.getElementById("starting-page")

let questionContainer = document.getElementById("question-container")
let questionElement = document.getElementById("question")
let answerButtonsElement = document.getElementById("answer-buttons")

let yourScore= document.getElementById("your-score")
let highScores= document.getElementById("high-scores")

let shuffledQuestions, currentQuestionIndex

let timeLeft = document.getElementById("time-left")
let countDownEl = document.getElementById('count-down')
let finalScore = document.getElementById('finalScore')
let totalTime = 60
let initSubmit = document.getElementById('initialsBtn')
let goBackBtn = document.getElementById('Go-Back-Button')

//Start button clicked
startButton.addEventListener('click', startGame)

//initals submit button clicked
initSubmit.addEventListener('click', endGame)

function startGame(){
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


    console.log (currentQuestionIndex)
    console.log (questions.length)
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


//end game function
function endGame(){
    yourScore.classList.remove('hide')
    questionContainer.classList.add('hide')
    clearInterval(timeInterval)
    finalScore.innerText = totalTime


    let userInit = initForm.value;
    // 2. Store initial & score in localStorage
    let userScore = {
        initial: userInit,
        score: totalTime
    }

    let previousHigh = JSON.parse(localStorage.getItem("highScore")); // Get previous highScore and convert string into object.

    localStorage.setItem("highScore", JSON.stringify(userScore))


    initSubmit.addEventListener('click', displayHighScores)
}




var highScoreList = document.getElementById('highScoreList')
//display your scores
function displayHighScores(event){
    event.preventDefault();

    yourScore.classList.add('hide')
    highScores.classList.remove('hide')


    let previousHigh = JSON.parse(localStorage.getItem("highScore"));
    // display values on element, 
    highScoreList.innertext = previousHigh.score + previousHigh.initial

    highScoreList.appendChild(previousHigh)
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
        question: "How many times does this class make my anus burn",
        answers: [
            {text: 'a. once', correct: false},
            {text: 'b. all the times', correct: true},
            {text: 'c. my anus is cool as a cucumber', correct: false},
            {text: 'd. once to twice a week', correct:false},
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