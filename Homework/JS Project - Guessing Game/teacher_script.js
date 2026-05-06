/*  *** Hints ***
---Consider the steps required...
---Start by getting inputed value (guess) 
---Generate random number (try output to console to see value)
---Compare these 2 values
---Add event listener for click-event on button
---Update message and scores etc
*/

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let randNum = getRandomIntInclusive(1, 20); //start w Rand #
console.log(randNum);
let messageObj = document.querySelector(".message");

let score = 20; // GLOBAL variable (accessible by all functions)
let highscore = 0; // GLOBAL variable
let scoreObj = document.querySelector(".score");

function check() {
  let guess = Number(document.querySelector(".guess").value);
  if (guess === randNum) {
    //alert('win')
    messageObj.textContent = "You win!";
    document.body.style.backgroundColor = "green";
    document.querySelector(".number").textContent = randNum;

    if (score > highscore) {
      //highscore check
      highscore = score; // update highscore with current score
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess < randNum) {
    //guess too low
    messageObj.textContent = "Too low.";
    score -= 1;
    scoreObj.textContent = score;
  } else if (guess > randNum) {
    //guess too high
    messageObj.textContent = "Too high.";
    score -= 1;
    scoreObj.textContent = score;
  }
}

const box = document.querySelector(".number");
let isAnimating = false;

function animate_box() {
  box.addEventListener("click", () => {
    if (!isAnimating) {
      isAnimating = true;
      box.style.transform = "translateX(200px)";

      setTimeout(() => {
        isAnimating = false;
        box.style.transform = "translateX(0)";
      }, 1000);
    }
  });
}

function again() {
  //add onClick to again button
  alert("start over");

  //recalculate randNum
  //background back to black
  //change number box to ?
  //change score variable to 20, score message to score
  //message "start guessing"
  //change guess box back to 0
}

//document.querySelector(".again").addEventListener("click", again);
