// Button ID
let startBtn = document.getElementById("start");
// Job of the button
startBtn.addEventListener("click", function () {
  StartQuiz();
  $("#start").remove();
});

// ALL VARIABLES AND ELEMENTS.....

let questionsarea = document.getElementById("questionsarea");
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let Options = document.querySelectorAll(".option");
let Pick = document.querySelector("#pick");
let checker = document.querySelector("#check");
let InitialEl = document.getElementById("userInitial");
let challenge = document.getElementById("challenge");
let Results = document.getElementById("results");
var FinalScore = document.querySelector(".finalScore");
let SubmitBtn = document.querySelector("#submitBtn");
let highscores = document.querySelector("scores");
let ScorePoints = "";

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

// TIMER JOB..
console.log("Button clicked, timer ON");
var timeEl = document.getElementById("time");

// how many seconds
var secondsLeft = 50;

// Start...

function StartQuiz() {
  // why does the button not remove?
  startBtn.removeAttribute("startbutton");
  displayquestions();
  setTime();

  // -------------------------------------------------------------------

  // THIS GOES TO MINUS changeeee

  // Timer function
  function setTime() {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds remaining..";
      if (secondsLeft === 0 || questionNumber === lastQuestion) {
        timeEl.textContent = "GAME OVER! YOUR TIME IS UP!!!";
        clearInterval(timerInterval);
      }
    }, 1000);
  }
}

// -------------------------------------------------------------------------
// Value per question number...

let questionNumber = 0;
let lastQuestion = questions.length - 0;
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

// BRING UP THE OPTIONS AND CHECK IF THE ANSWER IS CORRECT
Options.forEach((optionButton) => {
  optionButton.addEventListener("click", function () {
    let selectedbyuser = optionButton.textContent;
    checkAns(selectedbyuser);
  });

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
  // Checking the answer is correct,if so do the below...
  function checkAns(ans) {
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

  // Game over function gives me ...
  function gameOver() {
    checker.innerHTML = challenge.style.display =
      "Quiz over! Check your results out..";
    Results.style.display = "block";

    // Final score is seconds left but as points...
    ScorePoints = secondsLeft;

    let pointssection = document.createElement("span");
    pointssection.textContent = "is: " + ScorePoints + " points!";
    FinalScore.appendChild(pointssection);

    // Submitting initials
    SubmitBtn.addEventListener("click", submitInitials);
    console.log("submit button clicked");
  }

  // Submit initials and save on scores html
  function submitInitials(event) {
    event.preventDefault();

    // when the user puts something in the initials box..
    var userInput = InitialEl.value.trim();

    var ScoreBox = {
      name: userInput,
      score: ScorePoints,
    };
    SaveData(ScoreBox);
    window.location.href = "/develop/scores.html";
  }

  // Shove all submitted data to scores html
  function SaveData(data) {
    let storage = JSON.parse(localStorage.getItem("scores")) || [];
    storage.push(data);
    localStorage.setItem("scores", JSON.stringify(storage));
  }
});
