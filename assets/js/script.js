// WHEN I click the start button, a timer starts and I am presented with a question
// WHEN I answer a question, I am presented with another question
// WHEN I answer a question incorrectly, time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0, the game is over
// WHEN the game is over, I can save my initials and score

var startButtonEl = document.querySelector("#start-btn");
var timerEl = document.querySelector(".timer");
var scoreEl = document.querySelector(".score");
var questionsEl = document.querySelector("#question");
var optionButtonEl = document.querySelector(".option-btn");
var options = Array.from(document.getElementsByClassName("option-text"));

var timer = 100;
var scoreBonus = 10;

var currentQuestion = {};
var questionCounter = 0;
var availableQuestions = [];

var questions = [
    {
        question: "How do you delcare a JavaScript variable?",
        option1: "variable",
        option2: "declare",
        option3: "var",
        option4: "Hey, JavaScript",
        answer: 3
    },
    {
        question: "Which one is NOT an example of an operator?",
        option1: "+",
        option2: "()",
        option3: "++",
        option4: "--",
        answer: 2
    },
    {
        question: "What is the correct way to set the variable num to 10?",
        option1: "var number = 10",
        option2: "var number = ten",
        option3: "var number = '10'",
        option4: "All of the above",
        answer: 1
    },
    {
        question: "What is the correct way to write an array?",
        option1: 'var myArray = "Item1, Item2, Item3"',
        option2: 'var myArray = ["Item1, Item2, Item3"]',
        option3: 'var myArray = ["Item1", "Item2", "Item3"]',
        option4: 'None of the above',
        answer: 3
    },
    {
        question: "What is the correct way to write a for loop?",
        option1: 'for (i = 0, i < myLoop.length, i++)',
        option2: 'for (i = 0; i < myLoop.length; i)',
        option3: 'for (i = 0; i < myLooplength; i++)',
        option4: 'for (i = 0; i < myLoop.length; i++)',
        answer: 4
    },
];

var startQuiz = function() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    startTimer();
    getQuestion();
};

var startTimer = function() {
    var timerInterval = setInterval(function() {
        if(timer <= 0 ) {
            clearInterval(timerInterval)
            //endGame();
        }
        timerEl.innerHTML = timer
        timer -=1
    }, 1000)
};

var getQuestion = function() {
    if (availableQuestions.length === 0 || timer === 0) {
        return endGame();
    };
    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    questionsEl.innerHTML = currentQuestion.question;
    options.forEach((option) => {
        var number = option.dataset["number"];
        option.innerHTML = currentQuestion["option" + number];
    });
    availableQuestions.splice(questionIndex, 1);
};

var selectAnswer = function(answer) {
    if (answer === currentQuestion.answer) {
    addScore(scoreBonus);
    } else {
        timer -= 10;
    }
    setTimeout(getQuestion, 1000);
};

var addScore = function(num) {
    score += num;
    scoreEl.innerHTML = score;
};

var endGame = function() {

};

startButtonEl.addEventListener("click", startQuiz);