// set global variables
// allows me to set questions within card
var card = $("#quiz-area");
// the timer will decrement from 30
var countStartNumber = 30;
// set timer 
var timer;

// question and answer objects
var questions = [
    {
    question: "What does HTML stand for?",
    answer: ["1", "2", "3", "4"],
    correctAnswer: "1",
    // image: url("#"),    
    },
    {
    question: "What does CSS stand for?",
    answer: ["1", "2", "3", "4"],
    correctAnswer: "2",
    // image: url(""),    
    },
    {
    question: "What does JS stand for?",
    answer: ["1", "2", "3", "4"],
    correctAnswer: "3",
    // image: url(""),    
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
        $("#sub-wrapper").text("<p> Time Left: " + this.counter + "</p>")
        // need to make timeUp function 
        timeUp(); 
        
    },
    loadQuestion: function() {
        // set timer variable 
        timer = setInterval(countStartNumber, 3000 * 10);
        // for loop to go thru questions
        for (qIndex = 0; qIndex < this.question.length; qIndex++) {
        // add question dynamically
        $("#quiz-area").text(this.question.questions)
        $("#quiz-area").append("<p>" + qIndex + "</p>");
        
        }
    },
    nextQuestion: function() {
        // set countdown
        this.countdown()
        // display counter
        this.counter;
        // increment currentQuestion
        this.currentQuestion++;
        // run loadQuestion function 
        this.loadQuestion();
    },
    timeUp: function(){
        // clearInterval
        clearInterval(timer);
        // display on page
        $("#quiz-area").text("times up!");
        // if/else for current question or next question
        if (questions[i] === true || counter === 0) {
            this.nextQuestion();
        } 
        // do i need an else?
        
    },
    // clicked functions activates other functions
    results: function(){
        // clearInterval
        clearInterval(timer);
        // display results
        
    },
    
    clicked: function(){
        // clear timer
        clearInterval(timer);
        // display results

    }, 
    answerInCorrectly(){
        if (questions[i] === correctAnswer -1){
            $("quiz-area").text("wrong!");
            this.incorrect++;
            this.nextQuestion();
        }
    },
    answerCorrectly(){
        if (questions[i] === correctAnswer){
            $("quiz-area").text("correct!");
            this.correct++;
        }
    },
    reset: function(){
        clearInterval(timer);

    } 
}

// document onclick (always jquery) for calling the game
$(document).on("click", game.reset());
// document onclick for calling the clicked function
$(document).on("click", game.clicked())
// document onclick for calling the loadQuestion function
$(document).on("click", game.loadQuestion());