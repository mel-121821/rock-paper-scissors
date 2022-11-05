My Rock Paper Scissors Project

Initial Startup Qs:

Does your program have a user interface? 
-   No (will be coming later)

What inputs will your program have? 
-   User will enter 1 of 3 options and will be given an error message if input is something outside of these options

What is the desired output? 
-   A "You win", "You lose" or "Tie game" depending on choices by user and computer 

Given your inputs, what are the steps necessary to return the desired output? See plan below: 

Plan: User selects 1 of 3 options, rock/paper/scissors and stores the result in a variable. The computer generates a random selection of the same 3 options and stores it in another variable. Matchups follow rps rules. 

Create a function called computerPlay() that will randomly return either rock, paper or scissors. Write another function that plays a single round of rock paper scissors, the function should take 2 parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You lose! Paper beats Rock". the playerSelection parameter needs to be case insensitive.

Next, write a function that plays a single round of rock paper scissors. The function should take 2 parameters - the playerSelection and computerSelection - and return a string that declares the winner of the round like so: "You lose! Paper beats Rock."

Next, create a new function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser in the end.

Create a counter that counts the number of rounds up to 5 and then ends the game. Create a function that counts the number of wins by the user(Added this to playRound()). If the number of wins is greater than the number of losses, the user wins, if losses is higher, the user loses if equal, it's a tie. Have the function prompt the user with each loop iteration and stop prompts after 5 rounds.




Image credits:

construction.jpg: JESHOOTS.com