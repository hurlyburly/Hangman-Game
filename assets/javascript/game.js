// Javascript:
//         3. h2 Array of phrases that pop up in response to correct answer for hangman
//         4. Array of images that pop up in response to correct answer for hangman
//         5. COMPLETE:Populate new word for the game and hide it from user.
//         6. COMPLETE:Display correct amount of spaces for the next word in the array.
//         7. Display correct letters in spaces for each word as correct letters are guessed.
//         8. COMPLETE:Countdown number of guesses made remaining from set number of guesses before game over. 
//         9. Don't count down on guesses for the same letter already made in the round.
//         10. COMPLETE Display letters already guessed in the current round. 
//         11. Don't display guesses already made more than once.
//         12. COMPLETE Reset the game once guesses remaining drops to zero. 

//If using the rps game, make sure you change the code so that each key press isn't counted as a new game.

var guessesRemaining = 9;
var wins = 0;
// var words = [
//   "corgi",
//   "terrier",
//   "pug",
//   "dalmatian",
//   "dachshund",
//   "beagle",
//   "labrador"
// ];
// var phrases = [
//   "Corgis are Cute!",
//   "Terriers are terrific!",
//   "Pugs are pugnacious!",
//   "Dalmations are dolls!",
//   "Dachshunds are delightful!",
//   "Beagles are beautiful!",
//   "Labradors are lovable!"
// ];
// var images = [
//   "assets/images/corgi.jpeg",
//   "assets/images/terrier.jpeg",
//   "assets/images/pug.jpeg",
//   "assets/images/dalmatians.jpeg",
//   "assets/images/dachschund.jpeg",
//   "assets/images/beagle.jpeg",
//   "assets/images/labrador.jpeg"
// ];
var words = [
  {
    word: "corgi",
    phrases: "Corgis are Cute!",
    images: "assets/images/corgi.jpeg"
  },
  {
    word: "terrier",
    phrases: "Terriers are terrific!",
    images: "assets/images/terrier.jpeg"
  },
  {
    word: "pug",
    phrases: "Pugs are pugnacious!",
    images: "assets/images/pug.jpeg"
  },
  {
    word: "dalmatian",
    phrases: "Dalmations are dolls!",
    images: "assets/images/dalmatians.jpeg"
  },
  {
    word: "dachshund",
    phrases: "Dachshunds are delightful!",
    images: "assets/images/dachschund.jpeg"
  },
  {
    word: "beagle",
    phrases: "Beagles are beautiful!",
    images: "assets/images/beagle.jpeg"
  },
  {
    word: "labrador",
    phrases: "Labradors are lovable!",
    images: "assets/images/labrador.jpeg"
  }
];
var guessWord;
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
      } else if (guessesRemaining > 0) {
        //Checks if letter guessed is in the word in play and pushes user input to array of letters already guessed
        guessesRemaining--;
        document.querySelector("#guessesRemaining").innerHTML = guessesRemaining;
        lettersGuessed.push(userInput);
        console.log(lettersGuessed);
        var checkLetter = guessWord.word.indexOf(userInput);

        //Displays letters already guessed in the "Letters Already Guessed" section in the document.
        document.querySelector("#lettersGuessed").innerHTML = lettersGuessed.join(" ");

        if (checkLetter > -1) {
          for (i = 0; i <= guessWord.word.length; i++) {
          document.querySelector("#userInput").innerHTML = "Great! That letter is in the word!";
          }
        } else {
          document.querySelector("#userInput").innerHTML = "Sorry, guess again!";
        }
      } else {
        //GAME OVER message once user exhausts all guesses without solving the word.
        document.querySelector("#userInput").innerHTML = "GAME OVER."+"<br>"+"Press any key to restart!";
        //This part of the program resets the game to the initial state
        guessesRemaining = 9;
        document.querySelector("#guessesRemaining").innerHTML= guessesRemaining;
        userStart = false;
        lettersGuessed = [];
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

    console.log(guessWord);
    //remove this console log when program is completed. only using this for testing.

    var blank = "";
    for (var i = 0; i < guessWord.word.length; i++) {
      blank = blank + "_ ";
    }
    document.querySelector("#word").innerHTML = blank;
  }
};
