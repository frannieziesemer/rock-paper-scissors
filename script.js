// computerPlay function 
//randomly return rock, paper or scissors
//define items in array
// generate a random number to choose from the array 
function computerPlay() {
    let item = ['rock', 'paper', 'scissors'];
    let selection = Math.floor(Math.random() * item.length);
    console.log(item[selection]);
}

computerPlay();
// user will input a selection which will be played against the computer 
// function will take two inputs - comptuerSelection + playerSelection 
// if selections match print - "You Lose!! Paper beats rock "
//must be case sensitive 
