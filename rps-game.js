// Game Logic

const allChoices = ["rock", "paper", "scissors"];
let choice = ``;

let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * allChoices.length);
  return allChoices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = choice;
  console.log(playerSelection);  
  computerSelection = getComputerChoice(allChoices);
  console.log(computerSelection);
    
  if (playerSelection == computerSelection) {
    console.log("Round is tied!");
    return;
  }
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    console.log("Player wins!");
    roundWinner = "player";
    playerScore += 1;
  }
  if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    console.log("Computer wins!");
    roundWinner = "computer";
    computerScore += 1;
  }
  isGameOver(playerScore, computerScore);
}

function isGameOver(playerScore, computerScore) {
  if (playerScore === 5) {
    winnerMessage.textContent = `Player wins the game!`;
    console.log(`Player wins the game!`);
    resetGame();
  }
  if (computerScore === 5) {
    winnerMessage.textContent = `Computer wins the game!`;
    console.log(`Computer wins the game!`);
    resetGame();
  }
}

function resetGame() {
  playerScore = 0; 
  computerScore = 0;
}

// Game UI

const rockPlayerChoice = document.querySelector(`#rock`);
const paperPlayerChoice = document.querySelector(`#paper`);
const scissorsPlayerChoice = document.querySelector(`#scissors`);
const score = document.querySelector(`#score`);
const winnerMessage = document.querySelector(`#winnerMessage`);

rockPlayerChoice.addEventListener(`click`, () => {
  choice = `rock`;
  playRound();
  score.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
});
paperPlayerChoice.addEventListener(`click`, () => {
  choice = `paper`;
  playRound();
  score.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
});
scissorsPlayerChoice.addEventListener(`click`, () => {
  choice = `scissors`;
  playRound();
  score.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
});