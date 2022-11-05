// The computerplay() function is choosing between 3 different things, so we want an array of the options

const options = ["rock", "paper", "scissors"];

// we want to use a random function to select an option. Math.random picks a random number between 0 and 1 (arrays start from 0, so the above array will be numbered as so: [0, 1, 2]), we want to multiply that by the length of the array (options.length) and then use Math.floor to round the decimal down to a whole number

function computerPlay() {
    return computerSelection = options[Math.floor(Math.random()*options.length)];
}


function getPlayerSelection() {
    return playerSelection = prompt("Choose an option");
};


let wins = 0
let losses = 0

function playRound() {


    if (playerSelection.toLowerCase() === computerSelection) {
        //return "Tie game!";
        console.log("Tie game!");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        ++losses;
        //return "You lose! Paper beats rock.";
        console.log("You lose! Paper beats rock.");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        ++wins;
        //return "You win! Rock beats scissors.";
        console.log("You win! Rock beats scissors.");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        ++wins;
        //return "You win! Paper beats rock.";
        console.log("You win! Paper beats rock.");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        ++losses;
        //return "You lose! Scissors beats paper.";
        console.log("You lose! Scissors beats paper.");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        ++wins;
        //return "You win! Scissors beats paper.";
        console.log("You win! Scissors beats paper.");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        ++losses;
        //return "You lose! Rock beats scissors.";
        console.log("You lose! Rock beats scissors.");
    } else if (playerSelection.toLowerCase() !== "rock" || playerSelection.toLowerCase() !== "paper" || playerSelection.toLowerCase() !== "paper") {
        //return "Sorry, this is not a valid input. Please try again.";
        console.log("Sorry, this is not a valid input. Please try again.");
    } else {
        //return "What happened?"
        console.log("What happened?");
    }
};

// Collect input from user and convert to lowercase. Copy the computerPlay() function to the computerSelection parameter so we can pass it to the playRound function.


let numberOfRounds = 0;

function game() {

    for (let i = 0; i < 5; i++) {
        ++numberOfRounds;

        if (i < 5) {
            
            getPlayerSelection();
            console.log(playerSelection);
            
            console.log(computerPlay());

            playRound(playerSelection, computerSelection);

            console.log(`Wins = ${wins}`);
            console.log(`Losses = ${losses}`); 

        
                if (numberOfRounds === 5 && wins > losses) {
                    console.log("Congrats! You've won this round! :)");
                } else if (numberOfRounds === 5 && losses > wins) {
                    console.log("Sorry, you've lost this round :(");
                } else if (numberOfRounds === 5 && losses === wins) {
                    console.log("It's a tie!")
                }  

        } else {
            console.log("Game over")
        }
    }
}

game();

