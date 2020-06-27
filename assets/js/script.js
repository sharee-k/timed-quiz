// WHEN I click the start button, a timer starts and I am presented with a question
// WHEN I answer a question, I am presented with another question
// WHEN I answer a question incorrectly, time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0, the game is over
// WHEN the game is over, I can save my initials and score

var startButtonEl = document.querySelector("#start-btn");
var timerEl = document.querySelector("#timer");
var questionsEl = document.querySelector("#question");
var answersEl = document.querySelector("#answer-btn");

let timer = 200

var questions = [
    {
        q: "How do you delcare a JavaScript variable?",
        a: [
            {text: "variable", correct: false},
            {text: "declare", correct: false},
            {text: "var", correct: true},
            {text: "Hey, JavaScript", correct: false}
        ]
    },
    {
        q: "Which one is NOT an example of an operator?",
        a: [
            {text: "+", correct: false},
            {text: "()", correct: true},
            {text: "++", correct: false},
            {text: "--", correct: false}
        ]
    },
    {
        q: "What is the correct way to set the variable num to 10?",
        a: [
            {text: "var number = 10", correct: true},
            {text: "var number = ten", correct: false},
            {text: "var number = '10'", correct: false},
            {text: "All of the above", correct: false}
        ]
    },
    {
        q: "What is the correct way to write an array?",
        a: [
            {text: 'var myArray = "Item1, Item2, Item3"', correct: false},
            {text: 'var myArray = ["Item1, Item2, Item3"]', correct: false},
            {text: 'var myArray = ["Item1", "Item2", "Item3"]', correct: true},
            {text: 'None of the above'}
        ]
    },
    {
        q: "What is the correct way to initiate a for loop?",
        a: [
            {text: 'for (i = 0, i < myLoop.length, i++)', correct: false},
            {text: 'for (i = 0; i < myLoop.length; i)', correct: false},
            {text: 'for (i = 0; i < myLooplength; i++)', correct: false},
            {text: 'for (i = 0; i < myLoop.length; i++)', correct: true}
        ]
    }
];

var startQuiz = function() {
    console.log("Quiz Started")
    displayQuestion();
    startTimer();
};


var displayQuestion = function() {
    for (var i = 0; i < questions.length; i++); {
        console.log(questions);   
    }

};

var startTimer = function() {
    setInterval(function() {
        if(timer <= 0 ) {
            clearInterval(timer=0)
        }
        timerEl.innerHTML = timer
        timer -=1
    }, 1000)
}

var selectAnswer = function() {
    console.log("You are correct");

}


startButtonEl.addEventListener("click", startQuiz);
answersEl.addEventListener("click", selectAnswer);