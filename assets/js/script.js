var player = {};

window.addEventListener("DOMContentLoaded", function () {
  let playerForm = document.getElementById("playerSettings");
  playerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    player = {
      /**
       * Gets radio buttons with class diffSelection and
       * checks which difficulty setting has been chosen
       * @returns value of the chosen difficulty
       */
      getDifficulty: function () {
        let radioGrupe = document.getElementsByClassName("diffSelection");
        for (let i = 0; i < radioGrupe.length; i++) {
          if (radioGrupe[i].checked) {
            return radioGrupe[i].value;
          }
        }
      },
      name: document.getElementById("name").value,
      difficulty: null,
      consGames: document.getElementById("wordCount").value,
    };
    player.difficulty = player.getDifficulty();
    });
    return player;
});
let playAgain = document.getElementsByClassName("play")[1];
let changeSettings = document.getElementById("cSettings");
let answerForm = document.getElementById("answerForm");
let submitButton = document.getElementById("submitAnswer");
let keyboardSubmit = document.getElementsByClassName("keys");
let diffDisplay = document.getElementById("diffDisplay");
let time = document.getElementById("time");

playAgain.addEventListener("click", displaySection);
changeSettings.addEventListener("click", displaySection);
answerForm.elements["answer"].addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submitButton.click();
  }
});

let play = document.getElementsByClassName("play")[0];
play.addEventListener("click", function (event){
  drawKeyboard();
  var mysteryWord = generateWord();
  mysteryWord = mysteryWord.toUpperCase();
  var mWordArray = mysteryWord.split("");
  drawMysteryWord(mWordArray);
  displaySection();
  updateUI(player);
})

const maxGuess = 5;
let guessCount = 0;
let wrongGuess = 0;
let usedLetters = [];
let correctGuess = [];

let checkUserInput = document.getElementById("submitAnswer");
checkUserInput.addEventListener("click", function(event){
    event.preventDefault();
    let answer = answerForm.elements["answer"].value;
    let answerASCII = answer.charCodeAt(0);
    if (answerASCII >= 65 && answerASCII <= 90) {
      checkAnwser(
        answer,
        guessCount,
        wrongGuess,
        correctGuess,
        usedLetters,
        mWordArray
      );
    } else if (answerASCII >= 97 && answerASCII <= 122) {
      let upperCase = answer.toUpperCase();
      answerASCII = upperCase.charCodeAt(0);
      checkAnwser(
        answer,
        guessCount,
        wrongGuess,
        correctGuess,
        usedLetters,
        mWordArray
      );
    } else {
      alert(
        `Sorry ${playerObj.name}, but ${answer} is not a valid option. Please try again using letters from the English alphabet`
      );
    }
});

/**
 * Inputs the clicked virtual key value to inpute filed 
 * @param {*} event click
 */
function handleClick(event) {
  event.preventDefault();
  let pressedKey = this.textContent;
  answerForm.elements["answer"].value = pressedKey;
}

/**
 * applies events liseners to virtual keyboard keys
 */
function addEventListeners() {
  for (let i = 0; i < keyboardSubmit.length; i++) {
    keyboardSubmit[i].addEventListener("click", handleClick);
  }
}

/**
 * removes previosly applied event listeners for virtual keyboard
 */
function removeEventListeners() {
  for (let i = 0; i < keyboardSubmit.length; i++) {
    keyboardSubmit[i].removeEventListener("click", handleClick);
  }
}

/**
 * Determines which section is currently visible and switches to the next
 */
function displaySection() {
  let sections = document.getElementsByTagName("section");

  for (let i = 0; i < sections.length; i++) {
    if (sections[i].className === "") {
      var currentSec = sections[i];
      break;
    }
  }

  switch (currentSec.id) {
    case "welcomeSec":
      currentSec.setAttribute("class", "hidden");
      sections[1].setAttribute("class", "");
      break;
    case "gameSec":
      currentSec.setAttribute("class", "hidden");
      sections[2].setAttribute("class", "");
      break;
    case "postgameSec":
      if (playAgain == event.target){
        drawKeyboard();
        currentSec.setAttribute("class", "hidden");
        sections[1].setAttribute("class", "");
      } else if (changeSettings == event.target){
        currentSec.setAttribute("class", "hidden");
        sections[0].setAttribute("class", "");
      }else {
        console.log("Somethings wrong");
      };
      break;
    default:
      alert("Something went wrong");
      break;
  }
}
/**
 * Generate a random word using math.random() and an array of words
 * @returns random Word form the word array
 */
function generateWord() {
  let wordArray = [
    "bacon",
    "bamboo",
    "farm",
    "fashion",
    "individual",
    "indoor",
    "repeat",
    "replace",
    "typical",
    "ugly",
  ];
  let randomNumber = Math.floor(Math.random() * 10);
  let randomWord = wordArray[randomNumber];
  return randomWord;
}

/**
 * Takes letters from arrays and creates buttons that represent keyboard keys 
 */
function drawKeyboard() {
  removeEventListeners();
  let vKeyboard = document.getElementsByClassName("keysRow");
  let firstRow = ["q", "w", "e", "r", "t", "z", "u", "i", "o", "p"];
  let secundRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  let thirdRow = ["y", "x", "c", "v", "b", "n", "m"];
  for (let i = 0; i < firstRow.length; i++) {
    let letterBox = document.createElement("span");
    letterBox.setAttribute("class", "keys");
    letterBox.textContent = firstRow[i];
    vKeyboard[0].appendChild(letterBox);
  }
  for (let i = 0; i < secundRow.length; i++) {
    let letterBox = document.createElement("span");
    letterBox.setAttribute("class", "keys");
    letterBox.textContent = secundRow[i];
    vKeyboard[1].appendChild(letterBox);
  }
  for (let i = 0; i < thirdRow.length; i++) {
    let letterBox = document.createElement("span");
    letterBox.setAttribute("class", "keys");
    letterBox.textContent = thirdRow[i];
    vKeyboard[2].appendChild(letterBox);
  }
  addEventListeners();
}

/**
 * Draws empty boxes in the mystery word div according to the number of letter in the random word
 */
function drawMysteryWord(mWordArray) {
  let wordDiv = document.getElementById("mysteryWord");
  for (let i = 0; i < mWordArray.length; i++) {
    let letterBox = document.createElement("span");
    letterBox.textContent = "";
    letterBox.setAttribute("class", "letterBox");
    letterBox.setAttribute("id", `${i}`);
    wordDiv.appendChild(letterBox);
  }
}
/**
 * Starts the game loop
 * 
 */
function updateUI(playerObj) {
  
  switch (playerObj.difficulty) {
    case "easy":
      diffDisplay.innerHTML = "Easy";
      diffDisplay.style.color = "green";
      diffDisplay.textContent = "Easy";
      if (playerObj.timer) {
        time.textContent = "30 sec";
      }
      break;
    case "medium":
      diffDisplay.innerHTML = "Medium";
      diffDisplay.style.color = "yellow";
      diffDisplay.textContent = "Medium";
      if (playerObj.timer) {
        time.textContent = "20 sec";
      }
      break;
    case "hard":
      diffDisplay.innerHTML = "Hard";
      diffDisplay.style.color = "red";
      diffDisplay.textContent = "Hard";
      if (playerObj.timer) {
        time.textContent = "15 sec";
      }
      break;
    case "random":
      diffDisplay.innerHTML = "Medium";
      diffDisplay.style.color = "yellow";
      if (playerObj.timer) {
        time.textContent = "20 sec";
      }
      break;
  }
  
}

/**
 * Checks if users guess is correct
 * @param {string} answer users input 
 * @param {number} guessCount current guess count
 * @param {number} wrongGuess current wrong guess count
 * @param {number} correctGuess current correct guess letters array
 * @param {array} usedLetters array of used letters
 * @param {array} mysteryWord array of the mystery word letters
 * @returns updated used letter array, guess count, wrong guess count and correct guess count 
 */
function checkAnwser(
  answer,
  guessCount,
  wrongGuess,
  correctGuess,
  usedLetters,
  mWordArray
) {
  guessCount++;
  let condition = usedLetters.length;

  for (let i = 0; i <= usedLetters.length; i++) {
    if (answer === usedLetters[i]) {
      alert("You have already tried this letter. Please chose another one.");
      return;
    }
  }
  for (let i = 0; i < mWordArray.length; i++) {
    if (answer === mWordArray[i]) {
      let letterBox = document.getElementById(`${i}`);
      letterBox.textContent = answer;
      usedLetters.push(answer);
      correctGuess.push(answer);
      break;
    }
  }
  if (condition !== usedLetters.length) {
    wrongGuess++;
    usedLetters.push(answer);
  }
  return guessCount, wrongGuess, correctGuess, usedLetters;
}

