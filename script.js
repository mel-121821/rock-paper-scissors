// Project: to build a rock paper scissors game //

// Does your program have a user interface? No (will be coming later)
// What inputs will your program have? User will enter 1 of 3 options and will be given an error message if input is something outside of these options
// What is the desired output? A "You win" or "You lose" depending on choices by user and computer
// Given your inputs, what are the steps necessary to return the desired output? See plan below: 

// Plan: User selects 1 of 3 options, rock, paper and scissors and stores the result in a variable. The computer generates a random selection of the same 3 options and stores it in another variable. If the user and computer pick the same option, print "Tie game." Remaining matchups below: //

// If user picks rock and computer picks scissors, print "You win" //
// If user picks rock and computer picks paper, print "You lose" //
// If user picks paper and computer picks rock, print "You win" //
// If user picks paper and computer picks scissors, print "You lose" //
// If user picks scissors and computer picks paper, print "You win" //
// If user picks scissors and computer picks rock, print "You win" //


// Create a function called computerPlay() that will randomly return either rock, paper or scissors. Write another function that plays a single round of rock paper scissors, the function should take 2 parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You lose! Paper beats Rock". the playerSelection parameter needs to be case insensitive. //

// The function is choosing between 3 different things, so we want an array of the options

const options = ["rock", "paper", "scissors"];

// we want to use a random function to select an option. Math.random picks a random number between 0 and 1 (arrays start from 0, so the above array will be numbered as so: [0, 1, 2]), we want to multiply that by the length of the array (options.length) and then use Math.floor to round the decimal down to a whole number


function computerPlay() {
    return options[Math.floor(Math.random()*options.length)];
}

// Next step, write a function that plays a single round of rock paper scissors. The function should take 2 parameters - the playerSelection and computerSelection - and return a string that declares the winner of the round like so: "You lose! Paper beats Rock"

function playRound(playerSelectionLower, computerSelection) {
    if (playerSelectionLower === computerSelection) {
        return "Tie game!";
    } else if (playerSelectionLower === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock.";
    } else if (playerSelectionLower === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors.";
    } else if (playerSelectionLower === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock.";
    } else if (playerSelectionLower === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beat paper.";
    } else if (playerSelectionLower === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beat paper.";
    } else if (playerSelectionLower === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors.";
    };
};

// Collect input from user and convert to lowercase. Copy the computerPlay() function to the computerSelection parameter so we can pass it to the playRound function.

let playerSelection = prompt("Choose an option"); 
let playerSelectionLower = playerSelection.toLowerCase();

let computerSelection = computerPlay();


console.log(playRound(playerSelectionLower, computerSelection));

// Next step, create a new function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser in the end

// Create a counter that counts the number of rounds up to 5 and then ends the game. Create a function that counts the number of wins by the user. If the number of wins is greater than the number of losses, the user wins, else the user loses

function getScore(playRound) 


function game(playRound) {
    for (let i = 0; i < 5; i++) {

    }
}