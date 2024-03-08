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
let userChoice;

const startGame = document.querySelectorAll('button');
startGame.forEach((button) => {
    button.addEventListener('click', () => {
        playGame();
    });
});

// function testAlert() {
//     alert('yay!');
// }

const rock = document.getElementById('rock');

rock.addEventListener('click', () {
});


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
    // let userGameChoice = prompt('Choose your weapon: Rock, Paper, or Scissors. ').toLowerCase(); //gets user's input for game
    let userGameChoice = userChoice;    

    console.log('The Computer Chose: ' + compChoiceLoop);
    console.log('You Chose: ' + userGameChoice);
    console.log(playRound(userGameChoice, compChoiceLoop));
    


    function score() {
    let result = playRound(userGameChoice, compChoiceLoop);


    if ( result.includes('win') == true) {
            return userGameChoice += 1;
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
// for (let i = 0; i < 5; i++) {
//     playGame();
// }


