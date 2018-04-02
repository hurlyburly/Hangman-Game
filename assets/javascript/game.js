//         1. COMPLETE:Array of phrases that pop up in response to correct answer for hangman
//         2. COMPLETE:Array of images that pop up in response to correct answer for hangman
//         3. COMPLETE:Populate new word for the game and hide it from user.
//         4. COMPLETE:Display correct amount of spaces for the next word in the array.
//         5. COMPLETE:Display correct letters in spaces for each word as correct letters are guessed.
//         6. COMPLETE:Countdown number of guesses made remaining from set number of guesses before game over.
//         7. COMPLETE:Don't count down on guesses for the same letter already made in the round.
//         8. COMPLETE Display letters already guessed in the current round.
//         9. COMPLETE Don't display guesses already made more than once.
//         10.COMPLETE Reset the game once guesses remaining drops to zero.
//         11.COMPLETE Count up wins when game is solved properly.

//Global array of words, phrases, and images that will load randomly for users to try and guess
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
//global variables
var guessWord;
var spaces = [];
var spacesRemaining = spaces.length;
var guessesRemaining;
var userInput;
var userStart = false;
var wins = 0;
var lettersGuessed = [];

function resetGame() {
//this function resets all game variables to initial values except for wins
  guessesRemaining = 9;
  document.querySelector("#guessesRemaining").innerHTML = guessesRemaining;
  userStart = false;
  lettersGuessed = [];
  spaces=[];
  document.querySelector("#lettersGuessed").innerHTML = lettersGuessed.join(
    " "
  );
}
function inputGuess() {
//this function pushes the user input to the necessary arrays and pushes the guesses onto the screen
  guessesRemaining--;
  document.querySelector("#guessesRemaining").innerHTML = guessesRemaining;
  lettersGuessed.push(userInput);
  checkLetter = guessWord.word.indexOf(userInput);
  document.querySelector("#lettersGuessed").innerHTML = lettersGuessed.join(
    " "
  );
}
function wrongGuess() {
//lets the user know they guessed incorrectly
  document.querySelector("#userInput").innerHTML = "Sorry, guess again!";
  document.querySelector("#guessesRemaining").innerHTML = guessesRemaining;
}

function startGame() {
//starts the game 
  guessesRemaining = 9;
  userStart = true;
  document.querySelector("#userInput").innerHTML = "You've started the game!";
  guessWord = words[Math.floor(Math.random() * words.length)];
  console.log(guessWord);
  for (var i = 0; i < guessWord.word.length; i++) {
    spaces[i] = "_";
  }
  document.querySelector("#word").innerHTML = spaces.join(" ");
}
function winGame() {
  wins++;
  document.querySelector("#userInput").innerHTML = "You Win!";
  document.querySelector("#wins").innerHTML = wins;
//   document.getElementById("#barking").play();
  document.querySelector("#phrases").innerHTML = "<p>"+guessWord.phrases+"</p>";
   document.querySelector("#winningImage").innerHTML ="<img src=\"" + guessWord.images+">";
}
function endGame() {
//This function ends the game
  document.querySelector("#userInput").innerHTML =
    "GAME OVER." + "<br>" + "Press any key to restart!";
}

document.onkeyup = function(event) {
    
  if (userStart) {
    //Runs the game logic once the game has been started
    function checkUserInput() {
      userInput = event.key.toLowerCase();
      var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
      var checkValidity = alphabet.indexOf(userInput);
      var checkRepeat = lettersGuessed.indexOf(userInput);
      var checkLetter = guessWord.word.indexOf(userInput);
      if (checkValidity == -1) {
        //Makes sure user selects valid key for guess
        document.querySelector("#userInput").innerHTML =
          "Please guess a letter.";
      } else {
        if (guessesRemaining < 1) {
          //GAME OVER message once user exhausts all guesses without solving the word. Resets the game to the initial state
          endGame();
          resetGame();
        } else {
          if (checkRepeat == -1) {
              //If the userInput has not already been keyed previously for the word then this portion of the program will update the word and various cards.
              inputGuess(); 
            for (var i = 0; i < guessWord.word.length; i++) {
              if (guessWord.word[i] === userInput) {
                spaces[i] = userInput;
                spacesRemaining--;
                document.querySelector("#word").innerHTML = spaces.join(" ");
                document.querySelector("#userInput").innerHTML =
                  "Great! That letter is in the word!";   
              } 
            } if (spaces.indexOf("_")==-1) {
                winGame();
                resetGame();
              } 
          }else {
            //If the userInput was already keyed for the word this will alert the user to try another letter and will not countdown the remaining guesses
            document.querySelector("#userInput").innerHTML =
              "You have already guessed this letter. Please try another.";
          }
          if (checkLetter == -1) {
            wrongGuess();
          } 
        }
      }
    }
    checkUserInput();
  } else {
    //If the conditions for the game start have not been met this will start the game. 
    startGame();
  }
};
