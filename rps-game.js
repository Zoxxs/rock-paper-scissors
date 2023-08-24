const allChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * allChoices.length);
  return allChoices[randomNumber];
}

function getPlayerChoice() {
  let playerInput;
  do {
    playerInput = prompt("Please choose between rock, paper and scissors").toLowerCase();
  } while (!allChoices.includes(playerInput));
  return playerInput;
}

let computerSelection;
let playerSelection;

let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice(allChoices);
  console.log(computerSelection);
  playerSelection = getPlayerChoice();
  console.log(playerSelection);
  
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
    return playerScore += 1;
  }
  if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    console.log("Computer wins!");
    roundWinner = "computer";
    return computerScore += 1;
  }
}

isGameOver();

function isGameOver() {
  do {
    playRound(playerSelection, computerSelection);
  } while (playerScore < 2 && computerScore < 2);  
}

console.log(`Player: ${playerScore} - Computer: ${computerScore}`);