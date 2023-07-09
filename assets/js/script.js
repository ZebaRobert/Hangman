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
      /**
       * Checks whether or not timer checkbox is checked
       * @returns true or false
       */
      getTimerCheckbox: function () {
        let timerCheckbox = document.getElementById("timerCheckbox");
        if (timerCheckbox.checked) {
          return true;
        } else {
          return false;
        }
      },
      name: document.getElementById("name").value,
      difficulty: null,
      timer: null,
      consGames: document.getElementById("wordCount").value,
    };
    player.difficulty = player.getDifficulty();
    player.timer = player.getTimerCheckbox();
    return player;
  });
});

let playButton = document.getElementsByClassName("play")[0];
playButton.addEventListener("click", function (event){
  event.preventDefault();
  drawKeyboard();
  displaySection();
  runGame(player);
});

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
      let playAgain = document.getElementsByClassName("play")[1];
      let changeSettings = document.getElementById("cSettings");
      playAgain.addEventListener("click", function (event) {
        currentSec.setAttribute("class", "hidden");
        sections[1].setAttribute("class", "");
      });
      changeSettings.addEventListener("click", function (event) {
        currentSec.setAttribute("class", "hidden");
        sections[0].setAttribute("class", "");
      });
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
}