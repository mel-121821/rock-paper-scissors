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

const results = document.querySelector('.results > p');
const win = document.querySelector('.wins > p');
const lose = document.querySelector('.losses > p');
const tie = document.querySelector('.ties > p');




let numberOfRounds = 0;
let playerSelection = "";
let roundResult = "";

function rpsPlay() {
    computerPlay();
    playRound();
    results.textContent = `You picked ${playerSelection}, the computer picked ${computerSelection}.\n${roundResult}`;
    win.textContent = `${wins}`;
    lose.textContent = `${losses}`;
    tie.textContent = `${ties}`;
}

//for (i of anyButton) 
        //i.addEventListener('click', () => {
            //++numberOfRounds;
            //console.log(numberOfRounds);
        //})

function checkNumberOfRounds(numberOfRounds) {
    console.log(numberOfRounds);
    if (numberOfRounds < 5){
        console.log("Next selection")
    } else {
        disableButtons();
        console.log("Game Finished")
    }
}

function disableButtons () {
    const anyButton = document.querySelectorAll('button');
    for (button of anyButton) {
        button.disabled = "true";
    }
}

rockBtn.addEventListener('click', () => {
    playerSelection = "rock";
    ++numberOfRounds;
    rpsPlay();
    checkNumberOfRounds(numberOfRounds);
});

paperBtn.addEventListener('click', () => {
    playerSelection = "paper";
    ++numberOfRounds;
    rpsPlay();
    checkNumberOfRounds(numberOfRounds);
});

scissorsBtn.addEventListener('click', () => {
    playerSelection = "scissors";
    ++numberOfRounds;
    rpsPlay();
    checkNumberOfRounds(numberOfRounds);
});


let wins = 0
let losses = 0
let ties = 0

function playRound() {


    if (playerSelection.toLowerCase() === computerSelection) {
        ++ties;
        roundResult = "Tie game!";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        ++losses;
        roundResult = "You lose! Paper beats rock.";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        ++wins;
        roundResult = "You win! Rock beats scissors.";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        ++wins;
        roundResult = "You win! Paper beats rock.";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        ++losses;
        roundResult = "You lose! Scissors beats paper.";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        ++wins;
        roundResult = "You win! Scissors beats paper.";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        ++losses;
        roundResult = "You lose! Rock beats scissors.";
    } else if (playerSelection.toLowerCase() !== "rock" || playerSelection.toLowerCase() !== "paper" || playerSelection.toLowerCase() !== "paper") {
        //return "Sorry, this is not a valid input. Please try again.";
        console.log("Sorry, this is not a valid input. Please try again.");
    } else {
        //return "What happened?"
        console.log("What happened?");
    }
};



//New step: comment out the logic that plays exactly 5 rounds:

//We want a function that counts up to 5 rounds. 1 round is counted each time a button (any button) is clicked. Once the 5 rounds are reached, state final score and fade out buttons



//function game() {
    
        //if (numberOfRounds === 4) {
            //anyButton.disabled = true;
            //if (numberOfRounds === 5 && wins > losses) {
                //console.log("Congrats! You've won this round! :)");
            //} else if (numberOfRounds === 5 && losses > wins) {
                //console.log("Sorry, you've lost this round :(");
            //} else if (numberOfRounds === 5 && losses === wins) {
                //console.log("It's a tie!")
            //} 
            //console.log("Game over")
        //} else {
            
        //}
    //}

