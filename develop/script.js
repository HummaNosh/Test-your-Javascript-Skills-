// Button ID
let startBtn = document.getElementById("start");
// Job of the button
startBtn.addEventListener("click", StartQuiz, displayquestions);

// ----------------------------------------------------------------
// OPTION BUTTONS

// MAKE SURE THE FUNCTION OF THE BUTTON WORKS......
let buttonA = document.createElement("button");
buttonA.innerHTML = "A";
buttonA.addEventListener("click", function () {
  console.log("clicked a");
});
document.body.appendChild(buttonA);

let buttonB = document.createElement("button");
buttonB.innerHTML = "B";
buttonB.addEventListener("click", function () {
  console.log("clicked b");
});
document.body.appendChild(buttonB);

let buttonC = document.createElement("button");
buttonC.innerHTML = "C";
buttonC.addEventListener("click", function () {
  console.log("clicked c");
});
document.body.appendChild(buttonC);

// -----------------------------------------------------------------
// QUESTIONS

let questions = [
  {
    Q1: "Which of the following is the correct way to create a function?",
    A: "function generatePassword(){}",
    B: "function name = generatePassword () {}",
    C: "function = generatePassword(){}",
    Answer: "A",
  },
];

function StartQuiz() {
  var quizing = generateQuestions();
  displayquestions();
}

function generateQuestions() {
  // -------------------------------------------------------------------
  // TIMER FUNCTION
  console.log("Button clicked, timer ON");
  var timeEl = document.getElementById("time");
  // how many seconds
  var secondsLeft = 50;
  // timer function
  function setTime() {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds remaining..";
      if (secondsLeft === 0) {
        timeEl.textContent = " YOUR TIME IS UP!!!";
      }
    }, 1000);
  }
  setTime();
  // -------------------------------------------------------------------------
}
let guess = [];

function displayquestions() {
  let quiz = questions;

  // which button is each option is linked to
  buttonA = questions.A;
  buttonB = questions.B;
  buttonC = questions.C;
  buttonD = questions.D;

  // in the main box - give me Q1 of the quiz(questions)
  // WORK ON THISS
  questionsarea.innerHTML = quiz.Q1;
  for (i = 0; i < questions.length; i++) {
    // const character = questions.charAt(i);
    // if (guess.indexOf(character) > 0) {
    return "";
  }
}

console.log(questions);

// FIND OUT WHY A IS NOT DEFINED....

// FIGURE OUT HOW TO CHANGE THE MINUS -NEEDS TO STOP ON 0

// -------------------------------------------------------------------------------

// 1.Which of the following is the correct way to create a function?
// function generatePassword(){}
// function name = generatePassword () {}
// function = generatePassword(){}

// 2; which way is the correct way to display an array?
// var food = "chips", "steak", "pasta", "pizza"
// var food = (chips, steak, pasta, pizza)
// var food = ["chips", "steak", "pasta", "pizza"]

// 3; how do you declare a variable?
// var food;
// variable food;
// v food;

// 4. which syntax is used when you want to link an external javascript file?
// <script href = "script.jss"></script>
// <script src = "script.jss"></script>
// <script name = "script.jss"></script>

// 5;which of the following is the correct way to write "I want food" in an alert box?
// alertBox("I want food");
// msgBox("I want food");
// alert("I want food");

// make sure this is responsive
