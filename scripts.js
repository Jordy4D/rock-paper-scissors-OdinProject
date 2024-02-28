// psuedocode
//
// getUserChoice =  prompt 3 choices for a user to select: rock, paper, or scissors (none case-sensitive answers
//                  should work here)
// getComputerChoice = bot generates a random choice between rock, paper, or scissors
//                      (RNG and assign values 0-33, 34-66, 67-100)
// rock beats scissors
// paper beats rock
// scissors beats paper
// ^^^assign numerical value for easier comparison?
//
// playerSelection = getUserChoice
// computerSelection = getComputerChoice
//
// code compares both answers to make a decision on who wins
//  if user and bot guesses are equal, guess again
//  if user guesses rock and bot guesses scissors, user wins
//  if user guesses paper and bot guesses rock, user wins
//  if user guesses scissors and bot guesses paper, user wins
//  if user guesses rock and bot guesses paper, bot wins
//  if user guesses paper and bot guesses scissors, bot wins
//  if user guesses scissors and bot guesses rock, bot wins



function getUserChoice() {
    let userGuess = prompt('Choose your weapon: Rock, Paper, or Scissors. ').toLowerCase();
    
    do {
        if (userGuess === 'rock' || 
            userGuess === 'paper' || 
            userGuess === 'scissors') {
                return userGuess;
                break;
        } else {
            userGuess = prompt('Choose a REAL weapon: Rock, Paper, or Scissors. ').toLowerCase();
        }
    }
    while (userGuess !== 'rock' || userGuess !== 'paper' || userGuess !== 'scissors');
    }
    

function getComputerChoice() {
    let rng = Math.floor((Math.random()*100) + 1);
      if (rng < 34 && rng > 0) {
        return 'rock';
      } else if (rng >= 34 && rng <= 66) {
        return 'paper';
      } else {
        return 'scissors'
      }
  };
  
let computerChoice = getComputerChoice();
let userChoice = getUserChoice();


// comparison logic for rock, paper, scissors game
function rockPaperScissors() {
    if (userChoice === 'rock' && computerChoice === 'paper') {
        // console.log('You lose! Paper beats rock.');
        return computerChoice;
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        // console.log('You lose! Scissors beats paper.');
        return computerChoice;
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
        // console.log('You lose! Rock beats scissors.');
        return computerChoice;
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        // console.log('You win! Paper beats rock.');
        return userChoice;
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        // console.log('You win! Scissors beats paper.');
        return userChoice;
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        // console.log('You lose! Rock beats scissors.');
        return userChoice;
    } else {
        alert('Tie! Try again.');
   
    }
} 


// console.log(computerChoice);
// console.log(userChoice);

let userScore = 0;
let computerScore = 0;

rockPaperScissors();
rockPaperScissors();
rockPaperScissors();
rockPaperScissors();
rockPaperScissors();

// loop that runs the game 5 times, adds the game winner to the winning total
// for (let i = 0; i <= 5; i++) {
//     rockPaperScissors();
//     console.log(rockPaperScissors());
// };

