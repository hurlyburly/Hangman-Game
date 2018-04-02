//         1. Array of phrases that pop up in response to correct answer for hangman
//         2. Array of images that pop up in response to correct answer for hangman
//         3. COMPLETE:Populate new word for the game and hide it from user.
//         4. COMPLETE:Display correct amount of spaces for the next word in the array.
//         5. Display correct letters in spaces for each word as correct letters are guessed.
//         6. COMPLETE:Countdown number of guesses made remaining from set number of guesses before game over.
//         7. Don't count down on guesses for the same letter already made in the round.
//         8. COMPLETE Display letters already guessed in the current round.
//         9. Don't display guesses already made more than once.
//         10. COMPLETE Reset the game once guesses remaining drops to zero.
var guessesRemaining = 9;
var wins = 0;
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
var userInput;
var userStart = false;

document.onkeyup = function(event) {
  if (userStart) {
    //Runs the game logic once the game has been started
    function checkUserInput() {
      userInput = event.key.toLowerCase();
      var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
      var lettersGuessed = [];
      var checkValidity = alphabet.indexOf(userInput);
      var checkFrequency = lettersGuessed.indexOf(userInput);
      var replaceLetter = [];

      if (checkValidity == -1) {
        //Makes sure user presses valid letter for guess
        document.querySelector("#userInput").innerHTML =
          "Please guess a letter.";
      } else if (guessesRemaining > 0) {
        //Checks if letter guessed is in the word in play and pushes user input to array of letters already guessed
        guessesRemaining--;
        document.querySelector(
          "#guessesRemaining"
        ).innerHTML = guessesRemaining;
        lettersGuessed.push(userInput);
        console.log(lettersGuessed);
        var checkLetter = guessWord.word.indexOf(userInput);
        //Displays letters already guessed in the "Letters Already Guessed" section in the document.

        if (checkLetter > -1) {
          document.querySelector("#userInput").innerHTML =
            "Great! That letter is in the word!";

          for (i = 0; i < guessWord.word.length; i++) {
            if (guessWord.word[i] === userInput) {
              replaceLetter.push(userInput);
            } else {
              replaceLetter.push("_");
            }
          }
          document.querySelector(
            "#lettersGuessed"
          ).innerHTML = lettersGuessed.join(" ");

          document.querySelector("#word").innerHTML = replaceLetter.join(" ");
        } else {
          document.querySelector("#userInput").innerHTML =
            "Sorry, guess again!";
        }
      } else {
        //GAME OVER message once user exhausts all guesses without solving the word.
        document.querySelector("#userInput").innerHTML =
          "GAME OVER." + "<br>" + "Press any key to restart!";
        //This part of the program resets the game to the initial state
        guessesRemaining = 9;
        document.querySelector(
          "#guessesRemaining"
        ).innerHTML = guessesRemaining;
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
    console.log(guessWord);
    //remove this console log when program is completed. only using this for testing.
    var blank = "";
    for (var i = 0; i < guessWord.word.length; i++) {
      blank = blank + "_ ";
    }
    document.querySelector("#word").innerHTML = blank;
  }
};
