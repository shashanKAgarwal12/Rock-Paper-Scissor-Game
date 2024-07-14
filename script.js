let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreNo = document.querySelector("#user-score");
const compScoreNo = document.querySelector("#comp-score");

const genCompChoise = () => {
  const options = ["Rock", "Paper", "Scissor"];
  const randInd = Math.floor(Math.random() * 3);
  return options[randInd];
};

const drawGame = () => {
  msg.innerText = "The Game was Draw, Play Again!";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoise) => {
  if (userWin) {
    userScore++;
    userScoreNo.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoise}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScoreNo.innerText = compScore;
    msg.innerText = `You Lose! ${compChoise} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user Choise = ", userChoice);
  //Generating Computer Choise.
  const compChoise = genCompChoise();
  console.log("Comp Choise = ", compChoise);

  if (userChoice === compChoise) {
    //Draw Condition.
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "Rock") {
      //Scissor , Paper
      userWin = compChoise === "Paper" ? false : true;
    } else if (userChoice === "paper") {
      //Rock, Scissor
      userWin = compChoise === "Scissor" ? false : true;
    } else {
      //Rock , Paper
      userWin = compChoise === "Rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoise);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
