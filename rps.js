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

// const playerChoicePrompt = prompt("Choose between rock, paper and scissors");

// const playerChoiceCheck = playerChoicePrompt.toLowerCase();
// if (!strings.includes(playerChoiceCheck)) {
//    alert("Choice can only be rock, paper or scissors!");
// }


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
console.log(getPlayerChoice);
console.log(getRandomChoice(strings));