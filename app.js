const max=prompt("Enter the maximum number:");
const randomNumber= Math.floor(Math.random()*max)+1;
const guess = prompt("Guess a number between 1 and " +max + ":");
function checkGuess(guess, randomNumber) {
    if (guess < 1 || guess > max) {
        return "Invalid guess. Please enter a number between 1 and " + max + ".";
    }
    else if (guess < randomNumber) {
        return "Hint : number is too small..";
    }
    else if (guess > randomNumber) {
        return "Hint : number is too large..";
    }
    else {
        return "Congratulations! you guessed the number!";
    }
}