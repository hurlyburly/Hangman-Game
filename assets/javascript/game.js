// Javascript:
//         3. h2 Array of phrases that pop up in response to correct answer for hangman
//         4. Array of images that pop up in response to correct answer for hangman
//         5. Count and display amount of words guessed correctly
//         6. Populate new word for the game and hide it from user
//         7. Display correct amount of spaces for the next word in the array. Display correct letters in spaces for each word as correct letters are guessed.
//         8. Countdown number of guesses made remaining from set number of guesses before game over. Don't count down on guesses for the same letter already made in the round.
//         9. Display letters already guessed in the current round. Don't display guesses already made more than once.

//If using the rps game, make sure you change the code so that each key press isn't counted as a new game.

var guessesRemaining = 9;
var wins = 0;
var words = [
  "corgi",
  "terrier",
  "pug",
  "dalmatian",
  "dachshund",
  "beagle",
  "labrador"
];
var phrases = [
  "Corgis are Cute!",
  "Terriers are terrific!",
  "Pugs are pugnacious!",
  "Dalmations are dolls!",
  "Dachshunds are delightful!",
  "Beagles are beautiful!",
  "Labradors are lovable!"
];
var images = [
  "assets/images/corgi.jpeg",
  "assets/images/terrier.jpeg",
  "assets/images/pug.jpeg",
  "assets/images/dalmatians.jpeg",
  "assets/images/dachschund.jpeg",
  "assets/images/beagle.jpeg",
  "assets/images/labrador.jpeg"
];
var guessWord;
var winningPhrase;
var winningImage;
var lettersGuessed = [];
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var userInput;
var userStart = false;
//start game by pressing any key

document.onkeyup = function(event) {
  if (userStart) {
    //Runs the game logic once the game has been started
    function checkUserInput() {
      userInput = event.key;
      var checkValidity = alphabet.indexOf(userInput);
      if (checkValidity == -1) {
        //Makes sure user presses valid letter for guess
        document.querySelector("#userInput").innerHTML =
          "Please guess a letter.";
      } else {
        //Checks if letter guessed is in the word in play and pushes user input to array of letters already guessed
        lettersGuessed.push(userInput);
        console.log(lettersGuessed);
        var checkLetter = guessWord.indexOf(userInput);

        
        //displays letters already guessed in the Letters Already Guessed section in the document.
        document.querySelector("#lettersGuessed").innerHTML = lettersGuessed.join(" ");
        guessesRemaining--;
        document.querySelector("#guessesRemaining").innerHTML = guessesRemaining;
        if (checkLetter > -1) {
          for (i = 0; i <= guessWord.length; i++) {
            // userInput.replaceAt(guessWord,lettersGuessed);
          }

          document.querySelector("#userInput").innerHTML =
            "Great! That letter is in the word!";
        } else {
          document.querySelector("#userInput").innerHTML =
            "Sorry, guess again!";
        }
      }
    }
    checkUserInput();
  } else {
    //Starts the game when user presses any key. Displays blank spaces after generating word in play.
    userStart = true;
    document.querySelector("#userInput").innerHTML = "You've started the game!";
    guessWord = words[Math.floor(Math.random() * words.length)];
    //write code here that also generates the matching picture and phrase for the chosen word in case the user wins
    //variables to call will be: winningPhrase and winningImage.
    winningPhrase= 
    console.log(guessWord);
    //remove this console log when program is completed. only using this for testing.

    var blank = "";
    for (var i = 0; i < guessWord.length; i++) {
      blank = blank + "_ ";
    }
    document.querySelector("#word").innerHTML = blank;
  }
};

//code snippets that might be useful later:
//   if (guessesRemaining<1){
//       document.querySelector("#guessesRemaining").innerHTML=("Game Over");
//   }
//     else {
//         document.querySelector("#guessesRemaining").innerHTML=guessesRemaining;

//   }
