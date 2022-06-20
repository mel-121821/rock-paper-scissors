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

// we want to use a random function to select an option


function computerPlay() {
    optionSelected = options[Math.floor(Math.random()*options.length)];
    console.log(optionSelected);
}

computerPlay();