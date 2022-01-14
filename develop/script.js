// Button ID
let startBtn = document.getElementById("start");
// Job of the button
startBtn.addEventListener("click", StartQuiz, displayquestions, selectAnswer);

let questionsarea = document.getElementById("questionsarea");

let checkAns = document.getElementById("checkAns");

let Ans = document.getElementById("Ans");
// ----------------------------------------------------------------

// -----------------------------------------------------------------

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
        clearInterval(timerInterval);
      }
    }, 1000);
  }
  setTime();

  // -------------------------------------------------------------------------
}

// ----------------------------------------------------------------------------

// QUESTIONS
let questions = [
  {
    question: "Which of the following is the correct way to create a function?",

    A: "A. function generatePassword(){}",
    correct: true,
    B: "B. function name = generatePassword () {}",
    correct: false,
    C: "C. function = generatePassword(){}",
    correct: false,
  },
];

let options = document.getElementById("options");
let optiona = document.getElementById("optiona");

function displayquestions() {
  let quiz = questions;

  // ----------------------------------------------------------------------------------
  // OPTION BUTTONS

  let Nextbtn = document.createElement("button");
  Nextbtn.innerHTML = "NEXT";
  Nextbtn.addEventListener("click", NEXT(), function () {
    console.log("clicked NEXT");
  });
  document.body.appendChild(Nextbtn);

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

  // ----------------------------------------------------------------------------------

  function NEXT() {
    questionsarea.innerHTML =
      quiz[0].question + quiz[0].A + quiz[0].B + quiz[0].C;
  }

  // do a for loop - var = 0...something somehing fig ure out
  // then for buttons you need to clear buttons after every answer
  buttonA = quiz.A;
  buttonB = quiz.B;

  if ((quiz[0].correct = true)) {
    checkAns.innerHTML = "CORRECT! Nice one!";
  } else {
    checkAns.innerHTML = "Wrong! Try again!";
  }

  var allAnswers = Ans.querySelectorAll(".answer");
  for (var i = 0; i < allAnswers.length; i++) {
    allAnswers[i].setAttribute("onclick", "selectAnswer");
  }

  console.log(quiz[0].correct);
  console.log(checkAns);
  console.log(quiz[0].A);
  console.log(quiz[0].B);
}

console.log(questions);

// MAKE CORRECT SHOW UP IN H2
function selectAnswer(ans) {
  var select = ans.target;
  var correct = select.dataset.correct;

  checkAns.classList.remove("hide");
  if (correct) {
    checkAns.innerHTML = "CORRECT! Nice one!";
  } else {
    checkAns.innerHTML = "Wrong! Try again!";
    if (timeLeft <= 10) {
      timeLeft = 0;
    } else {
      timeLeft -= 10;
    }
  }
}

// MAKE SURE OPTION BUTTONS WWORK
// MAKE SURE YOU DEFINE THE QS IN THE BOX

// FIND OUT HOW TO STORE HIGHSCORES-INITIALS
// HOW TO ADD CORRECT AND INCORRECT
// SUBTRACT CLOCK IF INCORRECT
// WHEN TIMER REACHES 0 -GAME OVER
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
