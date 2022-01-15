// ALL VARIABLES AND ELEMENTS.....

let questionsarea = document.getElementById("questionsarea");
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let Options = document.querySelectorAll(".option");
let Pick = document.querySelector("#pick");
let checker = document.querySelector("#check");

// MULTI CHOICE QUESTIONS
let questions = [
  {
    question: "Which of the following is the correct way to create a function?",

    A: "A. function generatePassword(){}",
    B: "B. function name = generatePassword () {}",
    C: "C. function = generatePassword(){}",
    ans: "A. function generatePassword(){}",
  },

  {
    question: "Which of the below is the correct way to declare a variable?",
    A: "var food;",
    B: "variable food;",
    C: "v food;",
    ans: "var food;",
  },

  {
    question:
      "Which syntax of the below is used when you want to link an external javascript file?",
    A: "<script href = script.jss></script>",
    B: "<script src = script.jss></script>",
    C: "<script name = script.jss></script>",
    ans: "<script src = script.jss></script>",
  },
];

// Button ID
let startBtn = document.getElementById("start");
// Job of the button
startBtn.addEventListener("click", function () {
  StartQuiz, displayquestions();
});

// -----------------------------------------------------------------
// Start...
function StartQuiz() {
  displayquestions();
  setTime();
}

// -------------------------------------------------------------------
// TIMER JOB..
console.log("Button clicked, timer ON");
var timeEl = document.getElementById("time");
// how many seconds
var secondsLeft = 50;

// Timer function
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

let Q1 = 0;
let Q5 = questions.length - 1;
let result = 0;

function displayquestions() {
  let quiz = questions;

  // BRING UP THE QUESTIONS...
  questionsarea.innerHTML = quiz[0].question;

  // BRING UP THE OPTIONS..
  a.innerHTML = quiz[0].A;
  b.innerHTML = quiz[0].B;
  c.innerHTML = quiz[0].C;

  // var randomSelection =
  // for (var i = 0, length = questionsarea.length; i < length; i++) {}

  // BRING UP THE OPTIONS AND CHECK IF THE ANSWER IS CORRECT
  Options.forEach((optionButton) => {
    optionButton.addEventListener("click", function () {
      let selectedbyuser = optionButton.textContent;
      checkAns(selectedbyuser);
    });

    // ----------------------------------------------------------------------------------
    // next BUTTON

    // WORK ON THISSSSSSSS
    let NextEl = document.createElement("button");
    NextEl.innerHTML = "NEXT";
    NextEl.addEventListener("click", function () {
      console.log("clicked NEXT");
    });
    document.body.appendChild(NextEl);

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

      if (Q1 === Q5) {
        gameOver();
      }
      if (questions[Q1].ans === ans) {
        result++;
        Q1++;
        correctAns();
        displayquestions();
        console.log("correct answer worked");
      } else {
        Q1++;
        wrongAns();
        displayquestions();
      }
    }

    function gameOver() {
      checker.innerHTML =
        "<div>" +
        "YOU LOSE!!! GAME OVER! HEAD OVER TO KENNYS WORKSHOP TO LEARN MORE ABOUT JAVASCRIPT " +
        "</div>";
    }

    //     var randomSelection =
    // for (var i = 0, length = questionsarea.length; i < length; i++) {}
    // questionsarea.innerHTML =
    //   quiz[1].question + quiz[1].A + quiz[1].B + quiz[1].C;

    // do a for loop - var = 0...something somehing fig ure out
    // then for buttons you need to clear buttons after every answer

    // MAKE SURE OPTION BUTTONS WWORK
    // MAKE SURE YOU DEFINE THE QS IN THE BOX

    // FIND OUT HOW TO STORE HIGHSCORES-INITIALS
    // HOW TO ADD CORRECT AND INCORRECT

    // WHEN TIMER REACHES 0 -GAME OVER
    // -------------------------------------------------------------------------------

    // 5;which of the following is the correct way to write "I want food" in an alert box?
    // alertBox("I want food");
    // msgBox("I want food");
    // alert("I want food");

    // make sure this is responsive
  });
}
