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


// Generates random computer choice
function getComputerChoice() {
    let rng = Math.floor((Math.random()*100) + 1);
    if (rng < 34 && rng > 0) {
        return 'rock';
    } else if (rng >= 34 && rng <= 66) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

let computerChoice = getComputerChoice(); // sets computer choice function to a variable for easy calling

// comparison logic for Rock, Paper, Scissors
function playRound(userChoice, computerChoice) {
    let winner;
    if (userChoice == 'rock' && computerChoice == 'paper') {
        winner = 'You lose! Paper beats rock.';
    } else if (userChoice == 'paper' && computerChoice == 'scissors') {
        winner = 'You lose! Scissors beats paper.';
    } else if (userChoice == 'scissors' && computerChoice == 'rock') {
        winner = 'You lose! Rock beats scissors.';
    } else if (userChoice == 'paper' && computerChoice == 'rock') {
        winner = 'You win! Paper beats rock.';
    } else if (userChoice == 'scissors' && computerChoice == 'paper') {
        winner = 'You win! Scissors beats paper.';
    } else if (userChoice == 'rock' && computerChoice == 'scissors') {
        winner = 'You win! Rock beats scissors.';
    } else {
        winner = 'Tie! Try again.';
    } 
    return winner;
} 

// sets starting wins to zero for user and computer, along with total ties.
let userScore = 0;
let computerScore = 0;
let tieGame = 0;

// game function
function playGame() {
    
    
    getComputerChoice();
    let compChoiceLoop = getComputerChoice();
    let userChoice = prompt('Choose your weapon: Rock, Paper, or Scissors. ').toLowerCase(); //gets user's input for game
    
    console.log('The Computer Chose: ' + compChoiceLoop);
    console.log('You Chose: ' + userChoice);
    console.log(playRound(userChoice, compChoiceLoop));
    


    function score() {
    let result = playRound(userChoice, compChoiceLoop);


    if ( result.includes('win') == true) {
            return userScore += 1;
        } else if ( result.includes('lose') == true ) {
            return computerScore += 1;
        } else {
            return tieGame += 1;
        }
    }
    score();
    console.log('Your Score: ' + userScore);
    console.log("Computer's Score: " + computerScore);
    console.log("There have been " + tieGame + " ties!");
}

// loops the game 5 times
for (let i = 0; i < 5; i++) {
    playGame();
}


// TO BE USED AT A LATER DATE
// prompts user for their choice of rock, paper, scissors, repeats question if they don't respond correctly.
// function getUserChoice() {
//     let userGuess = prompt('Choose your weapon: Rock, Paper, or Scissors. ').toLowerCase();
    
//     do {
//         if (userGuess === 'rock' || 
//             userGuess === 'paper' || 
//             userGuess === 'scissors') {
//                 return userGuess;
//                 break;
//         } else {
//             userGuess = prompt('Choose a REAL weapon: Rock, Paper, or Scissors. ').toLowerCase();
//         }
//     }
//     while (userGuess !== 'rock' || userGuess !== 'paper' || userGuess !== 'scissors');
// }