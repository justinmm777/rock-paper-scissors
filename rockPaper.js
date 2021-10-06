// function computer play to return randomly Rock, Paper or Scissors
function computerPlay() {
    let selections = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * selections.length);
    let randomSelection = selections[randomNumber];
    return randomSelection;
}

// function play with two parameters- playerSelection, computerSelection
// return a winner "You Lose! Paper beats Rock"
// Scissors beats Paper
// Paper beats Rock
// Rock beats Scissors
function playRound(playerSelection, computerSelection) {
    let message;
    // Both select same
    function gameDraw(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            message = (`It is a draw, you both selected ${computerSelection}`);
        }
    }

    // Player selects rock
    function playerSelectRock(playerSelection, computerSelection) {
        if (playerSelection === 'rock' && computerSelection === 'paper') {
            message =(`You lost, Computer selected ${computerSelection}`);
        } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
            message =(`You won!!, Computer selected ${computerSelection}`)
        }
    }
    
    // player selects paper
    function playerSelectPaper(playerSelection, computerSelection) {
        if (playerSelection === 'paper' && computerSelection === 'rock') {
            message =(`You won!!, Computer selected ${computerSelection}`);
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            message =(`You lost, Computer selected ${computerSelection}`);
        }
    }

    // player selects scissors
    function playerSelectScissors(playerSelection, computerSelection) {
        if (playerSelection === 'scissors' && computerSelection === 'rock') {
            message =(`You lost, Computer selected ${computerSelection}`);
        } else if (playerSelection === 'scissors' && computerSelection === 'papper') {
            message =(`You won!!, Computer selected ${computerSelection}`);
        }
    }

    // calling all subfunctions
    gameDraw(playerSelection, computerSelection);
    playerSelectRock(playerSelection, computerSelection);
    playerSelectPaper(playerSelection, computerSelection);
    playerSelectScissors(playerSelection, computerSelection);

    return(message);
}

let playerSelection;
const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));


// main function to play 5 rounds
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your choice").toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();







