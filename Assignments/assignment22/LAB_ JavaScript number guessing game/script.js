window.numToGuess = Math.floor(Math.random() * 100 + 1); //Generates a random number between 1 and 100.
console.log("Answer:", window.numToGuess); //For you to know what the number is.

function playGuessingGame(totalGuesses = 10) {
   let promptText = "Enter a number between 1 and 100.";
   //Your answer goes here.
   

   /*
      Do not use alert() to let the user know of new messages
      (such as a guess less than or greater than the actual guess).
      Instead, in your loop, update the promptText variable's value.
      One of the cases has been done below as a demonstration
      of how you should do update prompText.
   */
   
   /*implement loop*/
   let tries = 0
   while (totalGuesses > 0) {
      tries++
      let num = prompt(promptText)
      if (num === null) {
         totalGuesses = 0
         return 0
      }
      
      if (num === "" || isNaN(num)) {
         promptText = "Please enter a number.";
         totalGuesses++
         tries--
      } else if (num < window.numToGuess) {
         promptText = num + " is too small. Guess a larger number."
      } else if (num > window.numToGuess) {
         promptText = num + " is too large. Guess a smaller number."
      } else {
         totalGuesses = 0

         return tries
      }
      totalGuesses--

   }
   return 0
}