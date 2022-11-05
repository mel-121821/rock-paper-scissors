

// The computerplay() function is choosing between 3 different things, so we want an array of the options

const options = ["rock", "paper", "scissors"];

// we want to use a random function to select an option. Math.random picks a random number between 0 and 1 (arrays start from 0, so the above array will be numbered as so: [0, 1, 2]), we want to multiply that by the length of the array (options.length) and then use Math.floor to round the decimal down to a whole number

//let computerSelection;

function computerPlay() {
    return computerSelection = options[Math.floor(Math.random()*options.length)];
}


//let computerSelection = computerPlay();

//console.log(computerPlay());
//console.log(computerSelection);

// computerPlay() and computerSelection now match every round (were previously returning different values)

// Next step, write a function that plays a single round of rock paper scissors. The function should take 2 parameters - the playerSelection and computerSelection - and return a string that declares the winner of the round like so: "You lose! Paper beats Rock"

//let playerSelection;

function getPlayerSelection() {
    return playerSelection = prompt("Choose an option");
};

//let playerSelection;
//console.log(playerSelection);

let wins = 0
let losses = 0

function playRound() {

    //let playerSelection = prompt("Choose an option");
//console.log(playerSelection);
//console.log(computerSelection);

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

//playRound(playerSelection, computerSelection);

// Collect input from user and convert to lowercase. Copy the computerPlay() function to the computerSelection parameter so we can pass it to the playRound function.


// Create a function that takes an input from the user and converts it to lowercase, assign the adjusted input to a variable

//let userPrompt = prompt("Choose an option")
//let playerSelection = userPrompt.toLowerCase(); 

//let playerSelection = prompt("Choose an option")

//function userPrompt() {
    //let playerSelection = (prompt("Choose an option").toLowerCase());
    //console.log(playerSelection);
//}

//userPrompt();


//console.log(wins);

// Next step, create a new function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser in the end

// Create a counter that counts the number of rounds up to 5 and then ends the game. Create a function that counts the number of wins by the user(Added this to playRound()). If the number of wins is greater than the number of losses, the user wins, if losses is higher, the user loseprompt("Choose an option")s if equal, it's a tie. Have the function prompt the user with each loop iteration and stop prompts after 5 rounds

let numberOfRounds = 0;

function game() {

    for (let i = 0; i < 5; i++) {
        ++numberOfRounds;

        if (i < 5) {
            //computerPlay();
            //let playerSelection = prompt("Choose an option")
            getPlayerSelection();
            console.log(playerSelection);
            //console.log(computerSelection);
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
//console.log(numberOfRounds);


//console.log(game(playRound(playerSelection, computerSelection)));