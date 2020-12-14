// computerPlay function 
//randomly return rock, paper or scissors
//define items in array
// generate a random number to choose from the array 


function computerPlay() {
    let item = ['rock', 'paper', 'scissors'];
    let selection = Math.floor(Math.random() * item.length);
    // console.log(`computer: ${item[selection]}`);
    return item[selection];
}


function playerPrompt() {
    return prompt('rock, paper or scissors?').toLowerCase();
}


// game() function to play a 5 round game that keeps score 
function playGame() {
    
    let playerScore = 0;
    let computerScore = 0;
    let totalScore = playerScore + computerScore;
    let totalGames = 0;
    let i;
    
    
    for(i = 0; i < 5; i++) { //while the game number is less than 5 reapeat the function call play round + prompt again and run computer selectoin again
        console.log(`total games: ${totalGames}`);

        let playerSelection = playerPrompt();
        console.log(`player: ${playerSelection}`);

        let computerSelection = computerPlay();
        console.log(`computer: ${computerSelection}`);
        
        
        playRound(playerSelection, computerSelection);
        console.log(`player: ${playerScore}`);
        console.log(`computer: ${computerScore}`);
    }

    

    function playRound(computer, player) {
        if(computer === player) {
            i--;
            console.log( 'Tie! - rematch');
        } else if ((player === 'rock' && computer === 'paper') || 
            (player === 'paper' && computer === 'scissors') || 
            (player === 'scissors' && computer === 'rock')) {
                ++computerScore;
                console.log('You lose!') ;
        } else if ((player === 'rock' && computer === 'scissors') || 
            (player === 'scissors' && computer === 'paper') || 
            (player === 'paper' && computer === 'rock')) {
                ++playerScore;
                console.log('You Win!');
        } else {
            console.log('error');
        }
        ++totalGames;
    }
    
    console.log(`total: ${totalScore}`);

    if (computerScore > playerScore) {
        return 'From five games Computer Wins';
    }   else if (computerScore < playerScore) {
        return 'From five games You win!';
    }   else if (computerScore === playerScore) {
        return 'from five games Tie!';
    }   else { 
        return 'error..';
    }
}

console.log(playGame());
