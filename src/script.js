// computerPlay function 
//randomly return rock, paper or scissors
//define items in array
// generate a random number to choose from the array 
let playerScore = 0;
let computerScore = 0;
let totalGames = 0;

// select buttons 
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const computerScoreDisplay = document.querySelector('.computerScore');
const playerScoreDisplay = document.querySelector('.playerScore');
const resultsDisplay = document.querySelector('.results');
const gameCount = document.querySelector('.gameCount');
const gameStatus = document.querySelector('.gameStatus');
const computerSelection = document.querySelector('.computerSelection');


function computerPlay() {
    let item = ['rock', 'paper', 'scissors'];
    let selection = Math.floor(Math.random() * item.length);
    return item[selection];
}


function playRound(computer, player) {
    if(computer === player) {
        gameStatus.textContent = 'Tie';
    } else if ((player === 'rock' && computer === 'paper') || 
        (player === 'paper' && computer === 'scissors') || 
        (player === 'scissors' && computer === 'rock')) {
            ++computerScore;
            gameStatus.textContent = 'Computer wins';
    } else if ((player === 'rock' && computer === 'scissors') || 
        (player === 'scissors' && computer === 'paper') || 
        (player === 'paper' && computer === 'rock')) {
            ++playerScore;
            gameStatus.textContent = 'You win!';
    } else {
        console.log('error');
    }
    ++totalGames;
    displayScore(computerScore, playerScore, totalGames);
    keepScore(computerScore, playerScore, totalGames);
    displayComputerSelection(computer);
}

function displayScore(computerScore, playerScore, totalGames) {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    gameCount.textContent = totalGames;
}

function displayComputerSelection(computer) {
    if (computer === 'rock') {
        computerSelection.style.backgroundImage = 'url("src/images/rock.png")';   
        console.log('displayRock');
    } else if (computer === 'paper') {
        console.log('display paper');
        computerSelection.style.backgroundImage = 'url("src/images/paper.png")';   
    } else {
        console.log('display scissors');  
        computerSelection.style.backgroundImage = 'url("src/images/scissors.png")';   
    }
}

function keepScore(computerScore, playerScore, totalGames) {
    if(totalGames === 5) {
        resetScores();
        if (computerScore > playerScore) {
            resultsDisplay.textContent = 'Computer Wins';
            resultsDisplay.style.color = 'red';
        }   else if (computerScore < playerScore) {
            resultsDisplay.textContent = 'You win!';
            resultsDisplay.style.color = 'magenta';
        }   else if (computerScore === playerScore) {
            resultsDisplay.textContent = 'Tie!';
            resultsDisplay.style.color = 'green';
        }   
    } else { 
        resultsDisplay.textContent = ' ';
    };
    
}

function resetScores(){
    playerScore = 0;
    computerScore = 0;
    totalGames = 0;
}



rockButton.addEventListener('click', function (event) {
    playRound(computerPlay(), event.target.innerHTML);
})
paperButton.addEventListener('click', function (event) {
    playRound(computerPlay(), event.target.innerHTML);
})
scissorsButton.addEventListener('click', function (event) {
    playRound(computerPlay(), event.target.innerHTML);
})
