// elements from HTML
const quizBtn = document.querySelector(".startBTN");
const quizBoxEl = document.querySelector("#quizBox");
const scoreEl = document.querySelector("#score");
const numScoreEl = document.querySelector("#numScore");
const timerTxtEl = document.querySelector("#timer_txt");
const timerSecEl = document.querySelector("#timerSec");
const questionTextEl = document.querySelector(".questionText");
const optionListEl = document.querySelector(".optionList");
const option = document.querySelector(".option");
const nextBtn = document.querySelector("#next");
const doneEl = document.querySelector(".done");
const scorefinalEl = document.querySelector("#scoreFinal");
const scorefinalNumEl = document.querySelector("#scoreFinalNum");
const initalEl = document.querySelector("#inital");
const submitBtn = document.querySelector("#submit");

// Created an array passing through different value
let questions = [
  {
    number: 1,
    question: "What is HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Markup Language",
      "Hyper Text Markup Language",
      "Hyper Text Markup Language",
      "Hyper Text Markup Language",
    ],
  },
  {
    number: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheets",
    options: [
      "Cascading Style Sheets",
      "Coding Style Sheets",
      "Cascading Stylish Sheets",
      "Cascading Structure Sheets",
    ],
  },
  {
    number: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext programming",
      "Hypertext preprogramming",
      "Hypertext Preprocessor",
      "Hometext Preprocesssor",
    ],
  },
  {
    number: 4,
    question: "What does SQL stand for",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language",
    ],
  },
  {
    number: 5,
    question: "What does XML stand for",
    answer: "Extensible Markup Language",
    options: [
      "Extensible Markup Language",
      "Executable Multiple Language",
      "Extra Multi-Program Language",
      "Examine Mutliple Language",
    ],
  },
];
// To start Quiz
var startQuiz = () => {
  console.log("click");
  console.log(quizBoxEl);
  quizBoxEl.classList.add("activeQuiz"); //show quiz (DOESNT WORK)
  showQuestion(0);
  setTime(15);
};
let timeValue = 15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;

// Next Button ( DONT SEE BUTTON :(( )
var nextQuestion = () => {
  console.log("click");
  console.log(questions[1]);
  nextBtn.classList.add(questions[1]);

  if (que_count < questions.length - 1) {
    que_count++;
    que_numb++;
    showQuestion(que_count);
    clearInterval(counter);
    starTimer(timeValue);
    timeText.textContent = "Time Left";
    nextBtn.classList.remove(question[0]);
  } else {
    clearInterval(counter);
    showResult();
  }
};
//selecting questions from questions.js
function showQuestion(index) {
  const que_text = document.querySelector(".questionText");
  let que_tag =
    "<span>" +
    questions[index].number +
    " ." +
    questions[index].question +
    "</span>";
  let option_tag =
    '<div class = "option"><span>' +
    questions[index].options[0] +
    "</span></div>" +
    +'<div class="option"><span>' +
    questions[index].options[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[3] +
    "</span></div>";
  que_text.innerHTML = que_tag;
  optionListEl.innerHTML = option_tag;
}

// NOT WORKING LOL

//   //making click for all options
//   const option = optionListEl.querySelector(".option");
//   for (i = 0; i < option.length; i++) {
//     option[i].addEventListener("click", "optionSelected"(this));
//   }
// }
// //  if user click on an option
// function optionSelected(answer) {
//   clearInterval(counter);
//   let userAns = answer.textContent;
//   let correctAns = questions[que_count].answer;
//   const allOptions = optionListEl.children.length;

//   if (userAns == correctAns) {
//     userScore += 1;
//     answer.classList.add("correct");
//     console.log("correct Answer");
//     console.log(" Your correct answers = " + userScore);
//   } else {
//     answer.classList.add("incorrect");
//     console.log("Wrong Answer");

//     for (i = 0; i < allOptions; i++) {
//       if (optionListEl.children[i].textContent == correctAns) {
//         optionListEl.children[i].setAttribute("class", "option correct");
//         console.log("Auto selected correct answer.");
//       }
//     }
//   }
//   for (i = 0; i < allOptions; i++) {
//     optionListEl.children[i].classList.add("disable");
//   }
//   nextBtn.classList.add("show");
// }
// // to show the result at the end (NEED HELP)
// function showResult() {
//   quizBoxEl.remove("activeQuiz");
//   doneEl.classList.add("activeDone");
//   const scoreFinal = quizBoxEl.querySelector("#finalScore");

//   if (userScore >= 0) {
//     let scoreTag = "Final Score:" + userScore;
//     scorefinalEl.innerHTML = scoreTag;
//   }
// }

// NEED SOMETHING FOR FORM INPUT

// Timer
var secondsLeft = 15;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerSecEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      StopQuiz();
    }
  }, 1500);
}

quizBtn.addEventListener("click", startQuiz);

nextBtn.addEventListener("click", nextQuestion);
