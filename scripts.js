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
const resContainer = document.createElement('div'); 
resContainer.classList.add('resContainer'); 

//display user's choice to scoreboard
const userRes = document.createElement('div'); 
userRes.classList.add('userRes'); 

//display computer's choice to scoreboard
const computerRes = document.createElement('div'); 
computerRes.classList.add('computerRes'); 

//display who won
const winnerScoreboard = document.createElement('div'); 
winnerScoreboard.classList.add('winnerScoreboard'); 

//display user's score
const userScoreboard = document.createElement('div'); 
userScoreboard.classList.add('userScoreboard'); 

//display ties
const tieScoreboard = document.createElement('div'); 
tieScoreboard.classList.add('tieScoreboard'); 

//display computer's score
const compScoreboard = document.createElement('div'); 
compScoreboard.classList.add('compScoreboard'); 

//display winner announcement
const winnerRes = document.createElement('div'); 
winnerRes.classList.add('winnerRes'); 

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
