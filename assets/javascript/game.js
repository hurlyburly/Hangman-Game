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
var spaces = [];
var spacesRemaining = spaces.length;
var guessesRemaining;
var userInput;
var userStart = false;
var wins = 0;
var lettersGuessed = [];

function resetGame() {
  guessesRemaining = 9;
  document.querySelector("#guessesRemaining").innerHTML = guessesRemaining;
  userStart = false;
  lettersGuessed = [];
  document.querySelector("#lettersGuessed").innerHTML = lettersGuessed.join(
    " "
  );
}
function inputGuess() {
  guessesRemaining--;
  document.querySelector("#guessesRemaining").innerHTML = guessesRemaining;
  lettersGuessed.push(userInput);
  checkLetter = guessWord.word.indexOf(userInput);
  document.querySelector("#lettersGuessed").innerHTML = lettersGuessed.join(
    " "
  );
  console.log(lettersGuessed);
}
function wrongGuess() {
  document.querySelector("#userInput").innerHTML = "Sorry, guess again!";
  guessesRemaining--;
  document.querySelector("#guessesRemaining").innerHTML = guessesRemaining;
}

function startGame() {
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
  document.getElementById("#barking").play();
  document.querySelector("#phrases").innerHTML = guessWord.phrases;
  document.querySelector("#winningImage").innerHTML = guessWord.images;
}
function endGame() {
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
        //Makes sure user presses valid letter for guess
        document.querySelector("#userInput").innerHTML =
          "Please guess a letter.";
      } else {
        if (guessesRemaining < 1) {
          //GAME OVER message once user exhausts all guesses without solving the word. Resets the game to the initial state
          endGame();
          resetGame();
        } else {
          if (checkRepeat == -1) {
            for (var i = 0; i < guessWord.word.length; i++) {
              if (guessWord.word[i] === userInput) {
                spaces[i] = userInput;
                spacesRemaining--;
                document.querySelector("#word").innerHTML = spaces.join(" ");
                document.querySelector("#userInput").innerHTML =
                  "Great! That letter is in the word!";
                inputGuess();
              } else if (spaces.length + spacesRemaining < 1) {
                winGame();
                resetGame();
              } else {
                document.querySelector("#userInput").innerHTML =
                  "You have already guessed this letter. Please try another.";
              }
            }
          }
          if (checkLetter > -1) {
            wrongGuess();
          } else {
          }
        }
      }
    }
    checkUserInput();
    console.log(userInput);
  } else {
    startGame();
  }
};
