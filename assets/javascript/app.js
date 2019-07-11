const quizQuestions = [
   
    {
        question: "Which of the following is not a computer language?",
        choices: ["Basic", "C", "Fast", "Fortran"],
        correctAnswer: "Fast"
    },

    {
        question: "Which country is the largest producer of coffee in the World?",
        choices: ["Vietnam", "Brazil", "Colombia", "Mexico"],
        correctAnswer: "Brazil"
    },

    {
        question: " Which one is the largest ocean in the World?",
        choices: ["Pacific", "Indian", "Atlantic", "Arctic"],
        correctAnswer: "Pacific"
    },

    {
        question: "Which country is sushi from ?",
        choices: ["Thailand", "Japan", "India", "France"],
        correctAnswer: "Japan"
    }
];

let counter = 30;
let currentQuestion = 0;
let score = 0;
let lost = 0;
let timer;

function nextQues () {

    if (isQuesOver = (quizQuestions.length - 1) === currentQuestion){

    } else {
    
    currentQuestion++;
    loadQues();

    }
}

function timeUp() {
    clearInterval(timer);
    lost++;
    nextQues();
}

function countDown(){
    counter--;
    $('#time').html('Timer: ' + counter);

    if (counter ===0) {
        timeUp();
    }
}

function loadQues() {
    
    counter = 30;
    timer = setInterval(countDown, 1000);

    const question = quizQuestions[currentQuestion].question;
    const choices = quizQuestions[currentQuestion].choices;
    
    $('#time').html('Timer: ' + counter);
    $('#game').html(`<h4>${question}</h4> ${loadChoices(choices)}`);
    
}

function loadChoices(choices) {
    let result = '';

    for (let i = 0; i < choices.length; i++) {
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
    }

    return result;
}

$(document).on('click', '.choice', function(){
    const selectedAns = $(this).attr('data-answer');
});

loadQues();