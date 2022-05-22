//variables that relate to HTML document
let startButton = document.getElementById("start-btn")
let nextButton = document.getElementById("next-button")
let startScreen = document.getElementById("starting-page")

let questionContainer = document.getElementById("question-container")
let questionElement = document.getElementById("question")
let answerButtonsElement = document.getElementById("answer-buttons")



let shuffledQuestions, currentQuestionIndex



//Start button clicked
startButton.addEventListener('click', startGame)


function startGame(){
    console.log('started')
    startScreen.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random () - .5 )
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide')
    setNextQuestion()
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
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
         answerButtonsElement.removeChild
         (answerButtonsElement.firstChild)
    }

}

function selectAnswer (e){
    let selectedButton = e.target
    let correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    currentQuestionIndex++
    setNextQuestion()
    
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
//timer 


//high scores


//Questions Array
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
