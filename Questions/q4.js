// Create a gmae where the user has to guess a number between 1 and 100. The user will input their guess, and the program will provide feedback on whether the guess is too low, too high, or correct. The game should continue until the user guesses the correct number.
let random_number = 25;
let n = prompt("Guess a number between 1 and 100:");
let attempt = 1;
while(n != random_number){
    if(n < random_number){
        console.log("Too Low! Try Again.")
        n = prompt("Guess a number between 1 and 100:");
        attempt++;
    }
    else if(n > random_number){
        console.log("Too High! Try Again.")
        n = prompt("Guess a number between 1 and 100:");
        attempt++;
    }
}
console.log("Congratulations! You guessed the correct number in " , attempt," attempts.");