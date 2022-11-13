// The computerplay() function is choosing between 3 different things, so we want an array of the options

const options = ["rock", "paper", "scissors"];

// we want to use a random function to select an option. Math.random picks a random number between 0 and 1 (arrays start from 0, so the above array will be numbered as so: [0, 1, 2]), we want to multiply that by the length of the array (options.length) and then use Math.floor to round the decimal down to a whole number

function computerPlay() {
    return computerSelection = options[Math.floor(Math.random()*options.length)];
}

// Add an event listener to the buttons that call your playRound() function with the correct player selection every time the button is clicked

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const playerPick = document.querySelector('.player-pick > p');
const playerPickDiv = document.querySelector('.player-pick');
const computerPick = document.querySelector('.computer-pick > p');
const computerPickDiv = document.querySelector('.computer-pick');
const resultStatement = document.querySelector('.result-statement > p');

const win = document.querySelector('.wins > p');
const lose = document.querySelector('.losses > p');
const tie = document.querySelector('.ties > p');

const anyButton = document.querySelectorAll('button');

const finalResult = document.querySelector('.finalResult > p');

function assignCompColor(computerSelection) {
    if (computerSelection === "rock") {
        computerPickDiv.style.color = 'rgb(241, 149, 206)';
        computerPick.style.color = 'rgb(241, 149, 206)';
    } else if (computerSelection === "paper") {
        computerPickDiv.style.color = 'rgb(43, 167, 250)';
        computerPick.style.color = 'rgb(43, 167, 250)';
    } else {
        computerPickDiv.style.color = 'rgb(255, 208, 0)';
        computerPick.style.color = 'rgb(255, 208, 0)';
    }
}

let numberOfRounds = 0;
let playerSelection = "";

let roundResult = "";

function rpsPlay() {
    computerPlay();
    assignCompColor(computerSelection);
    playRound();
    playerPick.textContent = `You picked ${playerSelection}.`;
    computerPick.textContent = `The computer picked ${computerSelection}.`;
    resultStatement.textContent = `${roundResult}`;
    win.textContent = `${wins}`;
    lose.textContent = `${losses}`;
    tie.textContent = `${ties}`;
}

function checkNumberOfRounds(numberOfRounds) {
    if (wins === 5 || losses === 5){
        disableButtons();
        printFinalResult();
    } else {
    }    
}

function disableButtons() {
    for (button of anyButton) {
        button.disabled = "true";
    }
}

function printFinalResult() {
    if (wins > losses) {
        resultStatement.textContent = "Congrats! You've won this round! :)";
    } else if (losses > wins) {
        resultStatement.textContent = "Sorry, you've lost this round :(";
    } 
}

rockBtn.addEventListener('click', () => {
    playerSelection = "rock";
    playerPickDiv.style.color = 'rgb(241, 149, 206)';
    playerPick.style.color = 'rgb(241, 149, 206)';
    ++numberOfRounds;
    rpsPlay();
    checkNumberOfRounds(numberOfRounds);
});

paperBtn.addEventListener('click', () => {
    playerSelection = "paper";
    playerPickDiv.style.color = 'rgb(43, 167, 250)';
    playerPick.style.color = 'rgb(43, 167, 250)';
    ++numberOfRounds;
    rpsPlay();
    checkNumberOfRounds(numberOfRounds);
});

scissorsBtn.addEventListener('click', () => {
    playerSelection = "scissors";
    playerPickDiv.style.color = 'rgb(255, 208, 0';
    playerPick.style.color = 'rgb(255, 208, 0';
    ++numberOfRounds;
    rpsPlay();
    checkNumberOfRounds(numberOfRounds);
});


let wins = 0
let losses = 0
let ties = 0


function playRound() {
    if (playerSelection === computerSelection) {
        ++ties;
        roundResult = "Tie game!";
        resultStatement.style.color = 'rgb(43, 167, 250)';
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        ++losses;
        roundResult = "You lose! Paper beats rock.";
        resultStatement.style.color = 'rgb(255, 106, 37)';
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        ++wins;
        roundResult = "You win! Rock beats scissors.";
        resultStatement.style.color = 'rgb(37, 255, 171)';
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        ++wins;
        roundResult = "You win! Paper beats rock.";
        resultStatement.style.color = 'rgb(37, 255, 171)';
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        ++losses;
        roundResult = "You lose! Scissors beats paper.";
        resultStatement.style.color = 'rgb(255, 106, 37)';
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        ++wins;
        roundResult = "You win! Scissors beats paper.";
        resultStatement.style.color = 'rgb(37, 255, 171)';
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++losses;
        roundResult = "You lose! Rock beats scissors.";
        resultStatement.style.color = 'rgb(255, 106, 37)';
    } 
};



//New step: comment out the logic that plays exactly 5 rounds:

//We want a function that counts up to 5 rounds. 1 round is counted each time a button (any button) is clicked. Once the 5 rounds are reached, state final score and fade out buttons



