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

function score() {
    result = winner;

    if ( winner.includes('win') == true) {
        return userScore += 1;
    } else if ( winner.includes('lose') == true ) {
        return computerScore += 1;
    } else {
        return tieGame += 1;
    }
}



const choices = document.querySelectorAll('.choices');
// const button = document.querySelector('');

choices.forEach(button => {
    button.addEventListener('click', () => {
        userChoice = button.innerHTML.toLowerCase();
        let computerRoundChoice = getComputerChoice();
        
        playRound(button.innerHTML.toLowerCase(), computerRoundChoice);
        score();

        userRes.textContent = 'You chose: ' + `${button.innerHTML}`;
        computerRes.textContent = 'The Computer chose: ' + `${computerRoundChoice.toUpperCase()}`;
        userScoreboard.textContent = 'Your Score: ' + `${userScore}`; //add text to resContainer
        compScoreboard.textContent = 'Computer Score: ' + `${computerScore}`;
        tieScoreboard.textContent = "Ties: " + `${tieGame}`;
        winnerScoreboard.textContent = 'Result: '+ `${winner}`
        
        if (userScore === 5) {
            winnerRes.textContent = "You win!";
            stopGame();
        } else if (computerScore === 5) {
            winnerRes.textContent = "Computer wins!"
            stopGame();

        }  

    })
})

//disables buttons to stop the game after a winner is declared
function stopGame() {
    choices.forEach(button => {
        button.disabled = true
    })
}

const results = document.querySelector('.results'); // .results div in html doc

//creates the container for the scoreboard
const resContainer = document.createElement('div'); //creating new div 'resContainer'
resContainer.classList.add('resContainer'); // add class name resContainer

//display user's choice to scoreboard
const userRes = document.createElement('div'); //creating new div 'resContainer'
userRes.classList.add('userRes'); // add class name resContainer

//display computer's choice to scoreboard
const computerRes = document.createElement('div'); //creating new div 'resContainer'
computerRes.classList.add('computerRes'); // add class name resContainer

//display who won
const winnerScoreboard = document.createElement('div'); //creating new div 'resContainer'
winnerScoreboard.classList.add('winnerScoreboard'); // add class name resContainer

//display user's score
const userScoreboard = document.createElement('div'); //creating new div 'resContainer'
userScoreboard.classList.add('userScoreboard'); // add class name resContainer

//display ties
const tieScoreboard = document.createElement('div'); //creating new div 'resContainer'
tieScoreboard.classList.add('tieScoreboard'); // add class name resContainer

//display computer's score
const compScoreboard = document.createElement('div'); //creating new div 'resContainer'
compScoreboard.classList.add('compScoreboard'); // add class name resContainer

//display winner announcement
const winnerRes = document.createElement('div'); //creating new div 'resContainer'
winnerRes.classList.add('winnerRes'); // add class name resContainer

userRes.textContent = 'You Chose: ';
computerRes.textContent = 'The Computer chose: ';
winnerScoreboard.textContent = 'Result: ';
userScoreboard.textContent = 'Your Score:'; //add text to resContainer
compScoreboard.textContent = 'Computer Score: ';
tieScoreboard.textContent = 'Ties: ';

results.appendChild(userRes);
results.appendChild(computerRes);
results.appendChild(winnerScoreboard);
results.appendChild(userScoreboard);
results.appendChild(compScoreboard);
results.appendChild(tieScoreboard);
results.appendChild(winnerRes);


// Generates random computer choice


let computerChoice = getComputerChoice(); // sets computer choice function to a variable for easy calling
let winner;

// comparison logic for Rock, Paper, Scissors
function playRound(userChoice, computerChoice) {
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
let result;
