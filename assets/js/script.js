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
    counter: 5,
    currentQuestion: 0,
    correct: 0, 
    incorrect: 0,
    countdown: function() {
        // decrement counter
        
        // display counter to page using jquery

        // need to make timeUp function 
        console.log(game.counter)
        game.counter--; 
        
        if (game.counter === 0){

            game.timeUp();
            game.counter = 5;
    }    
    $("#timer").html("<p> Time Left: " + game.counter + "</p>") 
        
    },
    loadQuestion: function() {
        // set timer variable 
        
        // for loop to go thru questions
        // for (qIndex = 0; qIndex < game.question.length; qIndex++) {
        // add question dynamically
        $("#quiz-area").text(game.question[game.currentQuestion].question)
         timer = setInterval(game.countdown, 1000);
        // $("#quiz-area").append("<p>" + qIndex + "</p>");
        for (let i = 0; i < game.question[game.currentQuestion].answer.length; i++) {
            // append answers to quiz area
            // $(this)
            
        }

        
       
    },
    nextQuestion: function() {
        // set countdown
        // game.countdown()
        // display counter
        // $("#quiz-area").text(this.counter);
        // this.counter;
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
       
            this.nextQuestion();
        
        // do i need an else?
        
    },
    // clicked functions activates other functions
    results: function(){
        // clearInterval
        clearInterval(timer);
        // display results
        let results = "You got " + counter + "out of 3 correct.";
        $("#quiz-area").append(results);
        
    },
    
    clicked: function(){
        // clear timer
        clearInterval(timer);
        // display results
        $("#quiz-area").append(timer);

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
$(document).on("click", "#start", function() {
    console.log("start");
    game.countdown();
    game.loadQuestion();
    

});
// document onclick for calling the clicked function
$(document).on("click", game.clicked);
// document onclick for calling the loadQuestion function
$(document).on("click", game.loadQuestion);