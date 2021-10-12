// initializing the variables
let computerScore = 0;
let playerScore = 0;
let numberOfDraws = 0;
let message;
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
        // Both select same
        function gameDraw(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                message = (`It is a draw, you both selected ${computerSelection}`);
                numberOfDraws++;
                document.getElementById("numberOfDraws").innerHTML = `Number of Draws: ${numberOfDraws}`;
            }
        }

        // comparing the player and computer selections
        function winLose(playerSelection, computerSelection) {
            if ((playerSelection === 'rock' && computerSelection === 'paper') || 
            (playerSelection === 'paper' && computerSelection === 'scissors') || 
            (playerSelection === 'scissors' && computerSelection === 'rock')) {
                message =(`You lost, ${computerSelection} beats ${playerSelection}`);
                computerScore++;
                document.getElementById("computerScore").innerHTML = `Computer Score: ${computerScore}`;
            } else if((playerSelection === 'rock' && computerSelection === 'scissors') ||  
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper')) {
                message =(`You won!!, ${playerSelection} beats ${computerSelection}`);
                playerScore++;
                document.getElementById("playerScore").innerHTML = `Player Score: ${playerScore}`;
            }
        }
        // calling all subfunctions
        gameDraw(playerSelection, computerSelection);
        winLose(playerSelection, computerSelection);
        return message;
        
    }

    const playerSelection = playerInput();
    const computerSelection = computerPlay();
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection)); 
}

text = "<ul>";
for (let i = 0; i < 5; i++) {
    game();
    text += "<li>" + `${message}` + "</li>";
    document.getElementById("result").innerHTML = text;
    // document.getElementById("result").innerHTML = `Round Result: ${message}`;
}
text += "</ul>";


// function to decide the winner 
function win(computerScore, playerScore) {
    if (computerScore > playerScore) {
        winner = "Bot won the game!!";
    } else if (computerScore < playerScore) {
        winner = "You won the game!!"
    } else {
        winner = "It is a draw loo!!!"
    }
    return winner;
}

win(computerScore, playerScore);

console.log(`Number of Draws: ${numberOfDraws}`);
console.log(`Computer Score: ${computerScore}`);
console.log(`Player Score: ${playerScore}`);
console.log(winner);
document.getElementById("finalResult").innerHTML = `${winner}`;





