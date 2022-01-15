// Button ID
let startBtn = document.getElementById("start");
// Job of the button
startBtn.addEventListener("click", function () {
  StartQuiz();
});

// ALL VARIABLES AND ELEMENTS.....

let questionsarea = document.getElementById("questionsarea");
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let Options = document.querySelectorAll(".option");
let Pick = document.querySelector("#pick");
let checker = document.querySelector("#check");
let initialEl = document.getElementById("userInitial");
let challengeEl = document.getElementById("challenge");
let resultsEl = document.getElementById("results");
var finalScoreEl = document.querySelector(".finalScore");
let submitBtnEl = document.querySelector("#submitBtn");
let scorePercentage = "";

// MULTI CHOICE QUESTIONS
let questions = [
  {
    question:
      "Q1. Which of the following is the correct way to create a function?",

    A: "A. function generatePassword(){}",
    B: "B. function name = generatePassword () {}",
    C: "C. function = generatePassword(){}",
    ans: "A. function generatePassword(){}",
  },

  {
    question:
      "Q2. Which of the below is the correct way to declare a variable?",
    A: "A. var food;",
    B: "B. variable food;",
    C: "C. v food;",
    ans: "A. var food;",
  },
  {
    question: "Q3. Is Javascript a case sensitive language? ",
    A: "A. No",
    B: "B. Yes",
    C: "C. Depends on the word",
    ans: "B. Yes",
  },
  {
    question:
      "Q4. Which of the below is the correct way to comment in Javascript?",
    A: "A. #....This is a comment....#",
    B: "B. \\....This is a comment...\\",
    C: "C. //....This is a comment...//",
    ans: "C. //....This is a comment...//",
  },

  {
    question:
      "Q5. Which of the following event occurs when a HTML element is clicked by the user?",
    A: "A. onmouseclick",
    B: "B. onclick",
    C: "C. onmouseClick",
    ans: "B. onclick",
  },

  {
    question: "Q6. How do you select a HTML element by ID in Javascript?",
    A: "A. document.getElementById()",
    B: "B. window.getElementById()",
    C: "C. pullHTMLpage.getElementById()",
    ans: "A. document.getElementById()",
  },

  {
    question:
      "Q7. Which of the below is used to identify the type of data type?",
    A: "A. isarrayType",
    B: "B. dataisTypeOf",
    C: "C. typeof",
    ans: "C. typeof",
  },

  {
    question: "Q8. Which of the below TAG <> is used to put Javascript inside?",
    A: "A. scripting",
    B: "B. javascript",
    C: "C. script",
    ans: "C. script",
  },

  {
    question: "Q9. How do you write 'Hello Suckers!' in an alert box?",
    A: "A. msg('Hello Suckers!')",
    B: "B. alert('Hello Suckers!')",
    C: "C. alertBox('Hello Suckers!')",
    ans: "B. alert('Hello Suckers!')",
  },

  {
    question: "Q10. How do you create a function? Pick on from the below",
    A: "A. function Hello()",
    B: "B. function.Hello()",
    C: "C. function = Hello()",
    ans: "A. function Hello()",
  },
];

// -----------------------------------------------------------------
// Start...

// TIMER JOB..
console.log("Button clicked, timer ON");
var timeEl = document.getElementById("time");

// how many seconds
var secondsLeft = 50;

function StartQuiz() {
  displayquestions();
  setTime();

  // -------------------------------------------------------------------

  // THIS GOES TO MINUS

  // Timer function
  function setTime() {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds remaining..";
      if (secondsLeft === 0) {
        timeEl.textContent = " YOUR TIME IS UP!!!";
        clearInterval(timerInterval);
        gameOver();
      }
    }, 1000);
  }

  setTime();
}
// -------------------------------------------------------------------------

let questionNumber = 0;
let lastQuestion = questions.length - 1;
let result = 0;

function displayquestions() {
  let quiz = questions;

  // BRING UP THE QUESTIONS...

  questionsarea.innerHTML = quiz[questionNumber].question;

  // BRING UP THE OPTIONS..
  a.innerHTML = quiz[questionNumber].A;
  b.innerHTML = quiz[questionNumber].B;
  c.innerHTML = quiz[questionNumber].C;
}
// var randomSelection =

// BRING UP THE OPTIONS AND CHECK IF THE ANSWER IS CORRECT
Options.forEach((optionButton) => {
  optionButton.addEventListener("click", function () {
    let selectedbyuser = optionButton.textContent;
    checkAns(selectedbyuser);
  });

  // ----------------------------------------------------------------------------------

  // ----------------------------------------------------------------------------------

  // WHEN THE CORRECT ANSWER IS CLICKED.....
  function correctAns() {
    Pick.className = "addedStyle";
    checker.className = "comment";
    checker.innerHTML = "<div>" + "CORRECT! KEEP IT UP!" + "</div>";
    console.log("CORRECT MATE!");

    setTimeout(function () {
      clearCheck();
    }, 2000);
  }

  // WHEN THE WRONG ANSWER IS CLICKED TAKE AWAY 10 SECONDS...
  function wrongAns() {
    secondsLeft -= 10;
    Pick.className = "addedStyle";
    checker.className = "comment";
    checker.innerHTML = "<div>" + "WRONG! YOU LOSE 10 SECONDS! " + "</div>";

    setTimeout(function () {
      clearCheck();
    }, 2000);
  }

  // THIS CLEARS THE CORRECT/WRONG COMMENTS ONCE ANSWERED
  function clearCheck() {
    Pick.classList.remove("addedStyle");
    checker.classList.remove("comment");
    checker.innerHTML = "<div>" + "" + "</div>";
  }

  // -----------------------------------------------------------------
  function checkAns(ans) {
    console.log(ans);

    if (questionNumber === lastQuestion) {
      gameOver();
    }
    if (questions[questionNumber].ans === ans) {
      result++;
      questionNumber++;
      correctAns();
      displayquestions();
      console.log("correct answer selected");
    } else {
      questionNumber++;
      wrongAns();
      displayquestions();
    }
  }

  function gameOver() {
    checker.innerHTML = challengeEl.style.display = "none";
    resultsEl.style.display = "block";

    scorePercentage = secondsLeft;

    const span = document.createElement("span");
    span.textContent = scorePercentage + " points!";
    finalScoreEl.appendChild(span);

    submitBtnEl.addEventListener("click", submitInitials);
    console.log("submit button clicked");
  }
});

function submitInitials(event) {
  event.preventDefault();
  var userInput = initialEl.value.trim();
  if (!userInput) {
    alert("Please enter your initials first.");
    return false;
  }
  var highScoreObject = {
    name: userInput,
    score: scorePercentage,
  };
  save(highScoreObject);
  window.location.href = "highscore.html";
}

// MAKE SURE OPTION BUTTONS WWORK
// MAKE SURE YOU DEFINE THE QS IN THE BOX

// FIND OUT HOW TO STORE HIGHSCORES-INITIALS
// HOW TO ADD CORRECT AND INCORRECT
