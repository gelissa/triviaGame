// set global variables
// allows me to set questions withing card
var card = $("#quiz-area");
// the timer will decrement from 30
var countStartNumber = 30;
// set timer 
var timer;

// question and answer objects
var questions = [
    {
    question: "",
    answer: ["1", "2", "3", "4"],
    correctAnswer: "",
    image: url(""),    
    }
    // repeat object {} for each question and answer pair
]

// make the game
var game = {
    question: questions,
    counter: countStartNumber,
    currentQuestion: 0,
    correct: 0, 
    incorrect: 0,
    countdown: function() {
        // decrement counter
        counter--; 
        // display counter to page using jquery

        // need to make timeUp function 
        timeUp(); 
        
    },
    loadQuestion: function() {
        // set timer variable 
        var timer = 
        // add question dynamically

        // for loop to go thru questions
        for (i = 0; i < questions.length; i++) {
            $("#quiz-area").text = questions[question]
        }
    },
    nextQuestion: function() {
        // set countdown
        this.countdown()
        // display counter

        // increment currentQuestion
        this.currentQuestion++;

        // run loadQuestion function 
        this.loadQuestion();
    },
    timeUp: function(){},
    results: function(){},
    // clicked functions activates other functions
    clicked: function(){}, 
    answerInCorrectly(){},
    answerCorrectly(){},
    reset: function(){} 
}

// document onclick (always jquery) for calling the game
$(document).on("click", )
// document onclick for calling the clicked function
$(document).on("click", )
// document onclick for calling the loadQuestion function
$(document).on("click", )