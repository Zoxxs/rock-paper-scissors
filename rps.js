// Rock Paper Scissors
//
// Player roll vs Computer roll
//  play 5 rounds, store score until those 5 rounds were played
//  display result 
//
// Player roll
//   prompt for choice
//   input should be case insensitive 
//
// Computer roll
//   random generation



// Computer roll 

const getRandomChoice = (strings) => {
  const choice = Math.floor(Math.random() * strings.length);
  return strings[choice];
};

const strings = ["rock", "paper", "scissors"];


// Player roll

const checkPlayerChoice = (strings) => {
  let playerChoicePrompt;
  let playerChoiceCheck;

  do {
    playerChoicePrompt = prompt("Choose between rock, paper, scissors");
    playerChoiceCheck = playerChoicePrompt.toLowerCase();
  } while (!strings.includes(playerChoiceCheck));

  return playerChoiceCheck;
};

const getPlayerChoice = checkPlayerChoice(strings);


// Play RPS

function decideOutcome (randomChoice, playerChoice) {
  switch (playerChoice) {
    case "rock":
      switch (randomChoice){
        case "rock":
          gameIsTied();
          break;
        case "paper":
          gameComputerWin();
          break;
        case "scissors":
          gamePlayerWin();
          break;
      }
    case "paper":
      switch (randomChoice){
        case "rock":
          gamePlayerWin();
          break;
        case "paper":
          gameIsTied();
          break;
        case "scissors":
          gameComputerWin();
          break;
      }
    case "scissors":
      switch (randomChoice) {
        case "rock":
          gameComputerWin();
          break;
        case "paper":
          gamePlayerWin();
          break;
        case "scissors":
          gameIsTied();
          break;
      }
  }
}

function gameIsTied () {
  console.log("Game is tied!");
}

function gamePlayerWin () {
  console.log("Player win!");
}

function gameComputerWin () {
  console.log("Computer Win!");
}

let playRound = decideOutcome(getComputerChoice, getPlayerChoice);