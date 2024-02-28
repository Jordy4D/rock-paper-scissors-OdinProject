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


// prompts user for their choice of rock, paper, scissors
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
    

// generates computer choice for rock, paper, scissors
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



function playRound(userChoice, computerChoice) {
    if (userChoice === 'rock' && computerChoice === 'paper') {
        return 'You lose! Paper beats rock.';
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return 'You lose! Scissors beats paper.';
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
        return 'You lose! Rock beats scissors.';
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        return 'You win! Paper beats rock.';
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return 'You win! Scissors beats paper.';
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return 'You win! Rock beats scissors.';
    } else {
        alert('Tie! Try again.');
    }
} 

let userScore = 0;
let computerScore = 0;
let tieGame = 0;

let computerChoice = getComputerChoice();
let userChoice = getUserChoice();

// plays one game and returns the winner plus adds 1 to the winner's score.
function playGame() {
    let roundResult = playRound(userChoice, computerChoice);
    if ( roundResult.includes('win') === true) {
        return userScore += 1;
    } else if ( roundResult.includes('lose') === true ) {
        return computerScore += 1;
    } else {
        return tieGame += 1;
    }
}

// runs the playgame function, prints the winner and displays the winner's total games won.
playGame();
console.log(playRound(userChoice, computerChoice));
console.log('Your Score: ' + userScore);
console.log("Computer's Score: " + computerScore);




// function playGame() {

//     let result = playRound(userChoice, computerChoice);



//     for (let i = 0; i <= 5; i++) {
//         playRound(userChoice, computerChoice);
//     }
// }


// loop that runs the game 5 times, adds the game winner to the winning total
// for (let i = 0; i <= 5; i++) {
//     rockPaperScissors();
//     console.log(rockPaperScissors());
// };

