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
  "Corgi",
  "Terrier",
  "Pug",
  "Dalmatian",
  "Dachshund",
  "Beagle",
  "Labrador"
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
var lettersGuessed = [];
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

var userStart = false;
//start game by pressing any key

document.onkeyup = function(event) {
  if (userStart) {
    function checkUserInput() {
      var userInput = event.key;
      var checkValidity = alphabet.indexOf(userInput);
      lettersGuessed.push(userInput);
      console.log(lettersGuessed);
      if (checkValidity == -1) {
        document.querySelector("#userInput").innerHTML =
          "Please guess a letter.";
      } else {
        var checkLetter = guessWord.indexOf(userInput);
        guessesRemaining--;
        document.querySelector("#guessesRemaining").innerHTML=guessesRemaining;

        if (checkLetter>-1) {
        

        
            
        }
        else{
            document.querySelector("#userInput").innerHTML="Sorry, guess again!";
        }
      }
    }
    checkUserInput();
  } else {
    userStart = true;
    document.querySelector("#userInput").innerHTML = "You've started the game!";
    guessWord = words[Math.floor(Math.random() * words.length)];
    console.log(guessWord);
    var blank = "";
    for (var i = 0; i < guessWord.length; i++) {
      blank = blank + "_ ";
    }
    document.querySelector("#word").innerHTML = blank;
  }

  //   if (guessesRemaining<1){
  //       document.querySelector("#guessesRemaining").innerHTML=("Game Over");
  //   }
  //     else {
  //         document.querySelector("#guessesRemaining").innerHTML=guessesRemaining;

  //   }
};
