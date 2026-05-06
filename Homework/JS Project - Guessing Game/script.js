/*  *** Hints ***
---Consider the steps required...
---Start by getting inputed value (guess) 
---Generate random number (try output to console to see value)
---Compare these 2 values
---Add event listener for click-event on button
---Update message and scores etc
*/

//Helper Functions
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); // maximum and minimum are inclusive
}

// ON LOAD
let randNum = getRandomIntInclusive(1, 20);

// ELEMENTS
let guessObj = document.querySelector(".guess");
let messageObj = document.querySelector(".message");
let scoreObj = document.querySelector(".score");
//......

// Variables
let score = 20; // global variable
let highScore = 0; // global variable

//onClick GUESS
function guess() {
  let userGuess = Number(guessObj.value);
  if (userGuess == randNum) {
    document.querySelector(".check").removeEventListener("click", guess);
    messageObj.textContent = "You win!";
    document.body.style.backgroundColor = "green";
    document.querySelector(".number").textContent = randNum;
    // check if score beats previous high score
    if (score > highScore) {
      highScore = score; // update high score with current score
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (userGuess > randNum) {
    messageObj.textContent = "Too High!";
    score -= 1;
    scoreObj.textContent = score;
  } else {
    messageObj.textContent = "Too Low!";
    score -= 1;
    scoreObj.textContent = score;
  }
}
document.querySelector(".check").addEventListener("click", guess);

const input = document.querySelector(".guess"); // Replace with your input element selector

// Add event listener for keyboard keydown
input.addEventListener("keydown", function (event) {
  // Check if the pressed key is "Enter"
  if (event.key === "Enter") {
    // Optional: Prevent default behavior (like form submission)
    event.preventDefault();

    // Trigger your action (e.g., click a button or run a function)
    document.querySelector(".check").click();
  }
});
