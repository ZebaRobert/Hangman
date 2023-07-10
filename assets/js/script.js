var player = {};
const maxGuess = 5;
let oneLess = document.getElementById("wordCount").value - 1;
let wrongGuess = 0;
let usedLetters = [];
let correctGuess = [];
let mWordArray = null;

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
    mWordArray = generateWord();
    drawKeyboard();
    updateUI(player);
    displaySection();
  });
  return player;
});

let playAgain = document.getElementsByClassName("play")[1];
let changeSettings = document.getElementById("cSettings");
let virtualKeyboard = document.getElementsByClassName("keys");
let diffDisplay = document.getElementById("diffDisplay");
let h1Element = document.querySelector("#postgameM h1");
let pElement = document.querySelector("#postgameM p");

playAgain.addEventListener("click", function (event) {
  displaySection();
});
changeSettings.addEventListener("click", displaySection);

/**
 * applies events liseners to virtual keyboard keys
 */
function addEventListeners() {
  for (let i = 0; i < virtualKeyboard.length; i++) {
    virtualKeyboard[i].addEventListener("click", checkAnwser);
  }
}

/**
 * removes previosly applied event listeners for virtual keyboard
 */
function removeEventListeners() {
  for (let i = 0; i < virtualKeyboard.length; i++) {
    virtualKeyboard[i].removeEventListener("click", checkAnwser);
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
      if (playAgain == event.target) {
        drawKeyboard();
        currentSec.setAttribute("class", "hidden");
        sections[1].setAttribute("class", "");
      } else if (changeSettings == event.target) {
        currentSec.setAttribute("class", "hidden");
        sections[0].setAttribute("class", "");
      } else {
        console.log("Somethings wrong");
      }
      break;
    default:
      alert("Something went wrong");
      break;
  }
}
/**
 * Generate a random word using math.random() and an array of words
 * if the word meets criteria for the player difficulty call drawMysteryWord()
 * @returns random Word form the word array
 */
function generateWord() {
  let playerDiff = player.difficulty;
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
  randomWord = randomWord.toUpperCase();
  let mWordArray = randomWord.split("");
  do {
    switch (playerDiff) {
      case "easy":
        if (randomWord.length <= 5) {
          removeMysteryWord();
          drawMysteryWord(mWordArray);
          return mWordArray;
        } else {
          randomNumber = Math.floor(Math.random() * 10);
          randomWord = wordArray[randomNumber];
          randomWord = randomWord.toUpperCase();
          mWordArray = randomWord.split("");
          continue;
        }
        break;
      case "medium":
        if (randomWord.length <= 7 && randomWord.length > 5) {
          removeMysteryWord();
          drawMysteryWord(mWordArray);
          return mWordArray;
        } else {
          randomNumber = Math.floor(Math.random() * 10);
          randomWord = wordArray[randomNumber];
          randomWord = randomWord.toUpperCase();
          mWordArray = randomWord.split("");
          continue;
        }
        break;
      case "hard":
        if (randomWord.length > 7) {
          removeMysteryWord();
          drawMysteryWord(mWordArray);
          return mWordArray;
        } else {
          randomNumber = Math.floor(Math.random() * 10);
          randomWord = wordArray[randomNumber];
          randomWord = randomWord.toUpperCase();
          mWordArray = randomWord.split("");
          continue;
        }
        break;
      case "random":
        removeMysteryWord();
        drawMysteryWord(mWordArray);
        return mWordArray;
        break;
    }
  } while (true);
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
 * removes previosly drawn boxes for last mystery word
 */
function removeMysteryWord() {
  let wordDiv = document.getElementById("mysteryWord");
  wordDiv.innerHTML = "";
}
/**
 * Updates users game interface accordingly to his/hers settings
 *
 */
function updateUI(playerObj) {
  switch (playerObj.difficulty) {
    case "easy":
      diffDisplay.style.color = "green";
      diffDisplay.textContent = "Easy";
      break;
    case "medium":
      diffDisplay.style.color = "yellow";
      diffDisplay.textContent = "Medium";
      break;
    case "hard":
      diffDisplay.style.color = "red";
      diffDisplay.textContent = "Hard";
      break;
    case "random":
      diffDisplay.innerHTML = "Medium";
      diffDisplay.style.color = "yellow";
      break;
  }
}

/**
 * Checks if users guess is correct
 * @returns updated used letter array, guess count, wrong guess count and correct guess count
 */
function checkAnwser(event) {
  let answer = this.textContent;
  answer = answer.toUpperCase();

  for (let i = 0; i < usedLetters.length; i++) {
    if (answer === usedLetters[i]) {
      alert("You have already tried this letter. Please chose another one.");
      return;
    }
  }
  for (let i = 0; i < mWordArray.length; i++) {
    if (answer === mWordArray[i]) {
      let letterBox = document.getElementById(`${i}`);
      letterBox.textContent = answer;
      correctGuess.push(answer);
    } else if (usedLetters.indexOf(answer) == -1){
      usedLetters.push(answer);
      wrongGuess++;
    }
  }
  return;
}

function postGameResults() {
  if (wrongGuess === maxGuess) {
    h1Child.textContent = "Game Over!";
    pChild,
      (textContent = "I am sure you will do better next time! Try again.");
    displaySection();
  } else {
    h1Element.textContent = "Congratulations!!You won!";
    pElement.textContent =
      "Would you like to play another round and continue your winning streak?";
    displaySection();
  }
}
