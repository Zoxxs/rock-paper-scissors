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