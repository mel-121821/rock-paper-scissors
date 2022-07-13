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

let computerSelection = computerPlay();

console.log(computerSelection);

// Next step, write a function that plays a single round of rock paper scissors. The function should take 2 parameters - the playerSelection and computerSelection - and return a string that declares the winner of the round like so: "You lose! Paper beats Rock"

let wins = 0
let losses = 0

function playRound(playerSelection = prompt("Choose an option"), computerSelection) {
console.log(playerSelection);
console.log(computerSelection);

    if (playerSelection.toLowerCase() === computerSelection) {
        console.log("Tie game!");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        ++losses;
        console.log("You lose! Paper beats rock.");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        ++wins;
        console.log("You win! Rock beats scissors.");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        ++wins;
        console.log("You win! Paper beats rock.");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        ++losses;
        console.log("You lose! Scissors beats paper.");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        ++wins;
        console.log("You win! Scissors beats paper.");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        ++losses;
        console.log("You lose! Rock beats scissors.");
    } else if (playerSelection.toLowerCase() !== "rock" || playerSelection.toLowerCase() !== "paper" || playerSelection.toLowerCase() !== "paper") {
        console.log("Sorry, this is not a valid input. Please try again.");
    } else {
        console.log("What happened?")
    }
};



console.log(playRound())
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




//console.log(playerSelection);
//console.log(computerSelection);

//console.log(playRound(playerSelection, computerSelection));


console.log(wins);

// Next step, create a new function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser in the end

// Create a counter that counts the number of rounds up to 5 and then ends the game. Create a function that counts the number of wins by the user(Added this to playRound()). If the number of wins is greater than the number of losses, the user wins, if losses is higher, the user loseprompt("Choose an option")s if equal, it's a tie. Have the function prompt the user with each loop iteration and stop prompts after 5 rounds

let numberOfRounds = 0;

function game(playRound) {
    for (let i = 0; i < 5; i++) {
        numberOfRounds++;
        if (i < 5) {
            if (numberOfRounds === 5 && wins > losses) {
                console.log("Congrats! You've won this round! :)");
            } else if (numberOfRounds === 5 && losses > wins) {
                console.log("Sorry, you've lost this round :(");
            } else {
                console.log("It's a tie!")
            }
        } else {
            console.log("End of round.")
        }
    }
}

console.log(numberOfRounds);

//console.log(game(playRound(playerSelection, computerSelection)));