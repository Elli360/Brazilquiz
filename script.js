// HTML elements
var quizBody = document.getElementById("quiz");
var resutsElement= document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");
var endGameBtns = document.getElementById("endGameBtns");
var submitScoreBtn = document.getElementById("submitScore");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

// Questions object
var quizQuestions = [{
    question: "Where is the country of Brazil located?",
    choiceA: "Indiana",
    choiceB: "Asian Continent",
    choiceC: "South America",
    choiceD: "A block from my house",
    correctAnswer: "c"},
  {
    question: "What language is spoken in Brazil?",
    choiceA: "Portuguese",
    choiceB: "Spanish",
    choiceC: "A loud language",
    choiceD: "No language assigned",
    correctAnswer: "a"},
   {
    question: "Where does the name BRAZIL come from?",
    choiceA: "idk, I did not name it",
    choiceB: "A tree named brazilwood",
    choiceC: "Brazilans",
    choiceD: "Cabral cousin named it",
    correctAnswer: "b"},
    {
    question: "What have Brazil produced for over 150 years, and is very well known for?",
    choiceA: "Corn",
    choiceB: "Soy Beans",
    choiceC: "Cheetos",
    choiceD: "Coffee",
    correctAnswer: "d"},
    {
    question: "Where is the deadlist place in Brazil?",
    choiceA: "Snake Island in Queimada Grande",
    choiceB: "The whole country",
    choiceC: "Rio de Janeiro",
    choiceD: "I don't even want to know",
    correctAnswer: "a"},  
    {
    question: "What most cars in Brazil use as fuel?",
    choiceA: "Gasoline",
    choiceB: "Grass",
    choiceC: "Ethanol",
    choiceD: "Beans",
    correctAnswer: "c"},
    {
    question: "What does the word BOLO mean in Portuguese?",
    choiceA: "Head",
    choiceB: "Cake",
    choiceC: "Beautiful",
    choiceD: "Smart",
    correctAnswer: "b"},
        

    ];
// Global variables
var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 76;
var timerInterval;
var score = 0;
var correct;

// This function generate the questions and answers.
function generateQuizQuestion(){
    gameoverDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
    } 
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};

// Start Quiz function starts the TimeRanges, hides the start button, and displays the first quiz question.
function startQuiz(){
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();

    //Timer
    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Time left: " + timeLeft;
    
        if(timeLeft === 0) {
          clearInterval(timerInterval);
          showScore();
        }
      }, 1000);
    quizBody.style.display = "block";
}
// Function for displaying your score
function showScore(){
    quizBody.style.display = "none"
    gameoverDiv.style.display = "flex";
    clearInterval(timerInterval);
    finalScoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
}

// This function is to replay quiz
function replayQuiz(){
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "flex";
    timeLeft = 76;
    score = 0;
    currentQuestionIndex = 0;
}

// This function checks the response to each answer 
function checkAnswer(answer){
    correct = quizQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
        score++;
        alert("That Is Correct!");
        currentQuestionIndex++;
        generateQuizQuestion();
        //display in the results div that the answer is correct.
    }else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
        alert("That Is Incorrect.")
        currentQuestionIndex++;
        generateQuizQuestion();
        //display in the results div that the answer is wrong.
    }else{
        showScore();
    }
}

// This button starts the quiz!
startQuizButton.addEventListener("click",startQuiz);