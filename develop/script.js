var startbtn = document.querySelector("#start");

startbtn = addEventListener("click", generateQuestions);

function StartQuiz() {
  var quiz = generateQuestions();
  var quiztext = document.querySelector("#questionsarea");
  quiztext.value = quiz;
}

plength = "";

function generateQuestions() {
  console.log("working?");
  // CHANGE THIS OVBS TO TEXT BOX
  plength = parseInt(
    prompt("Which of the following is the correct way to create a function? ")
  );

  //   var choices = "123456";
  //   var pword = "";

  //   for (i = 0; i < plength; i++) {
  //     var random = choices.charAt(Math.floor(Math.random() * choices.length));
  //     pword.push(random);
  //   }
  //   return pword("");
}

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
