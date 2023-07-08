// elements from HTML
const quizBtn = document.querySelector("#startBTN");
const questionsContainerEl = document.querySelector(".quizbox");
const scoreEl = document.querySelector("#score");
const numScoreEl = document.querySelector("#numScore");
const timerTxtEl = document.querySelector("#timer_txt");
const timerSecEl = document.querySelector("#timerSec");
const questionTextEl = document.querySelector(".questionText");
const optionListEl = document.querySelector(".optionList");
const nextBtn = document.querySelector("#next");
const doneEl = document.querySelector(".done");
const scorefinalEl = document.querySelector("#scoreFinal");
const scorefinalNumEl = document.querySelector("#scoreFinalNum");
const initalEl = document.querySelector("#inital");
const submitBtn = document.querySelector("#submit");

quizBtn.onclick = () => {
  quizBox.classList.add("activeQuiz"); //show quiz
  showQuestion(0);
  queCounter(1);
  StartTimer(15);
};
let timeValue = 15;
let que_count = 0;
let userScore = 0;
let counter;
let widthvalue = 0;

nextBtn.onclick = () => {};
// Timer
// var secondLeft = 15;

// function setTime() {
//   var timerInterval = setInterval(function () {
//     secondsLeft--;
//     timerSecEl.textContent = secondLeft;

//     if (secondLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       StopQuiz();
//     }
//   }, 1500);
// }
