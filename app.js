
function checkGuess() {
    const max=parseInt(prompt("Enter the maximum number:"));
    const randomNumber= Math.floor(Math.random()*max)+1;
    let guess = parseInt(prompt("Guess a number between 1 and " +max + ":"));
    
    while (true) {

      if (guess === null || guess == "quit"){
        document.getElementById("result").innerText="Game cancelled.";
        break;
      }

      if (isNaN(guess) || guess < 1 || guess > max) {
        document.getElementById("result").innerText="Invalid input. Please enter a number between 1 and " + max + ".";
        guess = parseInt(prompt("Guess a number between 1 and " + max + ":"));
      }
      else if (guess == randomNumber) {
         document.getElementById("result").innerText="Congratulations! You guessed the number " + randomNumber + " correctly!";
        break;
      }
      else if (guess > randomNumber) {
        guess= prompt("Your guess was too high. Try again.");
        
      }
      else {
      guess =prompt("Your guess was too low. Try again.");
      }
    }
}