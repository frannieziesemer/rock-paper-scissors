// computerPlay function 
//randomly return rock, paper or scissors
//define items in array
// generate a random number to choose from the array 
function computerPlay() {
    let item = ['rock', 'paper', 'scissors'];
    let selection = Math.floor(Math.random() * item.length);
    return item[selection];
}

// user will input a selection which will be played against the computer 
// function will take two inputs - comptuerSelection + playerSelection 
// covert input to lower case
// if comptuer selection matches player selection print - "tie!"
// if computer selection is 'paper' && player selection is 'rock' - print "You lose! Paper beats rock"
// if computer is 'paper
//must be case sensitive 

const playerSelection = prompt('rock, paper or scissors?').toLocaleLowerCase();
console.log(`player: ${playerSelection}`);
const computerSelection = computerPlay();

function playRound(computer, player) {
    console.log(`computer: ${computer}`);
    if(computer === player) {
        return 'Tie!';
    } else if (player === 'rock' && computer === 'paper') {
        return 'You lose!';
    } else if (player === 'rock' && computer === 'scissors') {
        return 'You Win!';
    } else if (player === 'paper' && computer === 'rock') {
        return 'You Win!'; 
    } else if (player === 'paper' && computer === 'scissors') {
        return 'You lose!';
    } else if (player === 'scissors' && computer === 'paper') {
        return 'You Win!';
    } else if (player === 'scissors' && computer === 'rock') {
        return 'You Lose!';
    } else {
        return 'error';
    }
}

//console.log(playRound(comptuerSelection, playerSelection));




// game() function to play a 5 round game that keeps score 
// if computer wins 3 or mor times 'you lose'
// if player wins 3 or more time 'you win'
// if it is a tie 3 or more times ' tie! '

function game() {
    console.log(playRound(computerSelection, playerSelection));
    console.log(playRound(computerSelection, playerSelection));
    console.log(playRound(computerSelection, playerSelection));
    console.log(playRound(computerSelection, playerSelection));
    console.log(playRound(computerSelection, playerSelection));
    // if('You Win!' >= 3) {
    //     console.log('you win out of three');
    // }

}
   
console.log(game());
