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

function playRound(humanChoice, computerChoice)
{
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    console.log('Human choice: ' + humanChoice, 'and computer choice: ' + computerChoice);
    if (humanChoice === computerChoice) {
        return 'It\'s a tie!';
    }
    else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            computerScore++;
            return 'Computer wins!';
        } else {
            humanScore++;
            return 'Human wins!';
        }
    }
    else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            computerScore++;
            return 'Computer wins!';
        } else {
            humanScore++;
            return 'Human wins!';
        }
    }
    else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore++;
            return 'Computer wins!';
        } else {
            humanScore++;
            return 'Human wins!';
        }
    }
    else {
        return 'Invalid choice!';
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        console.log(playRound(humanChoice, computerChoice));
    }

    if (humanScore > computerScore) {
        return 'Human wins the game!';
    } else if (humanScore < computerScore) {
        return 'Computer wins the game!';
    } else {
        return 'The Game is a tie!';
    }
}

console.log(playGame());