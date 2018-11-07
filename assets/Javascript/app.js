
    

// Declare main variables
var numCorrect = 0;
var timerSeconds = 15;
var intervalId = "1000";


var windowTimeout = setTimeout(function() {
  timerSeconds--;
  $("#timeRemaining").html = (timerSeconds);
}, 1000);
if (timerSeconds < 0) {
  showResults();
  alert(timerSeconds);
}




//Non working timer?
/*setTimeout(fiveSeconds, 1000 * 15);

function fiveSeconds() {
    
  document.getElementById("#timeRemaining").innerHTML = timerSeconds;
    timerSeconds--
if (timerSeconds < 0) {
  showResults();
  alert(timerSeconds);
}
}
function stop() {
   clearInterval(intervalId);
}
*/

(function() {
function buildQuiz() {

const output = [];

// for each question...
myQuestions.forEach((currentQuestion, questionNumber) => {

 const answers = [];

 for (letter in currentQuestion.answers) {
   // Not working without radio button?
   answers.push(
     `<label>
       <input type="radio" name="question${questionNumber}" value="${letter}">
       ${letter} :
       ${currentQuestion.answers[letter]}
     </label>`
   );
 }


 output.push(
   `<div class="question"> ${currentQuestion.question} </div>
   <div class="answers"> ${answers.join("")} </div>`
 );
});

//Put our output on screen
triviaBodyContainer.innerHTML = output.join("");
}

function showResults() {

var answerContainers = triviaBodyContainer.querySelectorAll(".answers");



// for each loop to determine answers
myQuestions.forEach((currentQuestion, questionNumber) => {
 
 var answerContainer = answerContainers[questionNumber];
 var selector = `input[name=question${questionNumber}]:checked`;
 var userAnswer = (answerContainer.querySelector(selector) || {}).value;

 
 if (userAnswer === currentQuestion.correctAnswer) {
  
   numCorrect++;

  
   answerContainers[questionNumber].style.color = "green";
 } else {
   
   answerContainers[questionNumber].style.color = "red";
 }
});


resultsContainer.innerHTML = `${numCorrect}  of ${myQuestions.length}`;
}

var triviaBodyContainer = document.getElementById("triviaBody");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var myQuestions = [
{
question: "What drink do Warlocks drink?",
answers: {
 a: "Death in the Afternoon",
 b: "Coronation",  
 c: "Shade of The Evening",
 d: "White Lady"
},
correctAnswer: "c"
},
{
question: "What is the name of the Warlock who kidnapped Daenarys and her dragons?",
answers: {
 a: "Pyat Pree",  
 b: "Wolf",
 c:  "Wun Weg Wun Dar Wun",
 d: "Styr"
},
correctAnswer: "a"
},
{
question: "What is the name of the Warlock compound in Quarth?",
answers: {
 a: "House of Black and White",   
 b: "Duskendale",
 c: "House of the Undying",
 d: "Longclaw"
},
correctAnswer: "d"
},
{
question: "What is the name of the dragon who saves Daenyrs from the Warlocks at Quarth?",
answers: {
 a: "Rhaegal",     
 b: "Viserion",
 c: "Viserys",
 d: "Drogon" 
},
correctAnswer: "d"
}
];


buildQuiz();

//  Show results
submitButton.addEventListener("click", showResults);
})();

