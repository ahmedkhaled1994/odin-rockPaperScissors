let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getHumanChoice () {
    const humanChoice = prompt('Please enter your choice');
    return humanChoice;
}

function getRoundResult(humanChoice, computerChoice) {
    let result = '';
    if (humanChoice === computerChoice) {
        result = 'It\'s a tie!';
    }
    else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            computerScore++;
            result = 'Computer wins!';
        } else {
            humanScore++;
            result = 'Human wins!';
        }
    }
    else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            computerScore++;
            result = 'Computer wins!';
        } else {
            humanScore++;
            result = 'Human wins!';
        }
    }
    else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore++;
            result = 'Computer wins!';
        } else {
            humanScore++;
            result = 'Human wins!';
        }
    }
    else {
        result = 'Invalid choice!';
    }
    return result
}

function getGameResult() {
    let gameResult = '';

    if (humanScore === 5 || computerScore === 5) {
        gameResult = 
            (humanScore > computerScore) ? 
            'Human wins the game!' : 
            'Computer wins the game!';
        humanScore = 0;
        computerScore = 0;
    }
    return gameResult;
}

function playRound(humanChoice)
{

    let computerChoice = getComputerChoice();

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    const selectionstDiv = document.getElementById('selections');
    const roundResultDiv = document.getElementById('roundResult');
    const scoreDiv = document.getElementById('score');
    const gameResultDiv = document.getElementById('gameResult');

    selectionstDiv.innerHTML = 'Human choice: ' + humanChoice 
    + ', Computer choice: ' + computerChoice;
    
    let roundResult = getRoundResult(humanChoice, computerChoice);

    roundResultDiv.innerHTML = roundResult.result;
    scoreDiv.innerHTML = 'Human: ' + humanScore + ', Computer: ' + computerScore;

        
    let gameResult = getGameResult(humanScore, computerScore);
    gameResultDiv.innerHTML = gameResult;
}