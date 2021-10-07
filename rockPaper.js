// initializing the variables
let computerScore = 0;
let playerScore = 0;
let numberOfDraws = 0;
let winner;


function game() {
    // function computer play to return randomly Rock, Paper or Scissors
    function computerPlay() {
        let selections = ['rock', 'paper', 'scissors'];
        let randomNumber = Math.floor(Math.random() * selections.length);
        let randomSelection = selections[randomNumber];
        return randomSelection; 
    }

    // player selection function
    function playerInput() {
        let input = prompt("Enter your choice Rock, Paper, Scissors").toLowerCase();
        return input;
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
                numberOfDraws++;
            }
        }

        // Player selects rock
        function playerSelectRock(playerSelection, computerSelection) {
            if (playerSelection === 'rock' && computerSelection === 'paper') {
                message =(`You lost, ${computerSelection} beats ${playerSelection}`);
                computerScore++;
            } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
                message =(`You won!!, ${playerSelection} beats ${computerSelection}`);
                playerScore++;
            }
        }
        
        // player selects paper
        function playerSelectPaper(playerSelection, computerSelection) {
            if (playerSelection === 'paper' && computerSelection === 'rock') {
                message =(`You won!!, ${playerSelection} beats ${computerSelection}`);
                playerScore++;
            } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
                message =(`You lost, ${computerSelection} beats ${playerSelection}`);
                computerScore++;
            }
        }

        // player selects scissors
        function playerSelectScissors(playerSelection, computerSelection) {
            if (playerSelection === 'scissors' && computerSelection === 'rock') {
                message =(`You lost, ${computerSelection} beats ${playerSelection}`);
                computerScore++;
            } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
                message =(`You won!!, ${playerSelection} beats ${computerSelection}`);
                playerScore++;
            }
        }

        // calling all subfunctions
        gameDraw(playerSelection, computerSelection);
        playerSelectRock(playerSelection, computerSelection);
        playerSelectPaper(playerSelection, computerSelection);
        playerSelectScissors(playerSelection, computerSelection);
        return message;
    }

    const playerSelection = playerInput();
    const computerSelection = computerPlay();
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));

}


for (let i = 0; i < 5; i++) {
    game();
}


   

// function to decide the winner 
function win(computerScore, playerScore) {
    if (computerScore > playerScore) {
        winner = "Bot won the game";
    } else if (computerScore < playerScore) {
        winner = "You won the game!!"
    } else {
        winner = "It is a draw loo!!!"
    }
    return winner;
}

console.log(`Number of Draws: ${numberOfDraws}`);
document.getElementById("numberOfDraws").innerHTML = `Number of Draws: ${numberOfDraws}`;
console.log(`Computer Score: ${computerScore}`);
document.getElementById("computerScore").innerHTML = `Computer Score: ${computerScore}`;
console.log(`Player Score: ${playerScore}`);
document.getElementById("playerScore").innerHTML = `Player Score: ${playerScore}`;
document.getElementById("finalResult") = winner;


// could not validate the input}
// if (playerSelection === ' '|| playerSelection !== 'rock' || playerSelection !== 'paper' || playerSelection !== 'scissors') {
// playerInput();







