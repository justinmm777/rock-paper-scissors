// initializing the variables
let computerScore = 0;
let playerScore = 0;
let numberOfDraws = 0;
let message;
let winner;
let playerSelection;
let computerSelection;



// function computer play to return randomly Rock, Paper or Scissors
let selections = ['rock', 'paper', 'scissors'];
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * selections.length);
    let randomSelection = selections[randomNumber];
    return randomSelection; 
    }

// player selection function
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        playRound(playerSelection, computerSelection);
       
        let result = document.getElementById("result");
        let text = document.createTextNode(`${message}`);
        result.appendChild(text);
        let lineBreak = document.createElement('br');
        result.appendChild(lineBreak);      
    
        if (playerScore === 5 || computerScore === 5 || numberOfDraws === 5) {
            win(computerScore, playerScore);
            document.getElementById("finalResult").innerHTML = `${winner}`;
            console.log(winner);
            removeRefresh()
        }
    });
});
    

// function play with two parameters- playerSelection, computerSelection
// return a winner "You Lose! Paper beats Rock"
// Scissors beats Paper
// Paper beats Rock
// Rock beats Scissors
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = playerSelection;
    // Both select same
    if (playerSelection === computerSelection) {
        message = (`It is a draw, you both selected ${computerSelection}`);
        numberOfDraws++;
        document.getElementById("numberOfDraws").innerHTML = `Number of Draws: ${numberOfDraws}`;
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') || 
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

console.log(computerSelection);
console.log(playerSelection);
}

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

console.log(`Number of Draws: ${numberOfDraws}`);
console.log(`Computer Score: ${computerScore}`);
console.log(`Player Score: ${playerScore}`);

function resetGame(){
    const resetButton = document.createElement("BUTTON");
    resetButton.innerText = "Refresh";
    resetButton.className = "restBtn";
    document.querySelector(".btnRefresh").appendChild(resetButton);
    resetButton.addEventListener('click', () => {
        location.reload();
    })
};

function removeBtn() {
    document.getElementById("btnDiv").remove(); 
}

function removeRefresh() {
    removeBtn();
    resetGame();
}






