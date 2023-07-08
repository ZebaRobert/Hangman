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
playButton.addEventListener("click", displaySection);

function displaySection() {
  let sections = document.getElementsByTagName("section");
  let currentSec;
  
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].className === "") {
      currentSec = sections[i];
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
      playAgain.addEventListener("click", function (event){
        currentSec.setAttribute("class", "hidden");
        sections[1].setAttribute("class", "");
      });
      changeSettings.addEventListener("click", function(event){
        currentSec.setAttribute("class", "hidden");
        sections[0].setAttribute("class", "");
      });
      break;
    default:
      break;
  }
}
/**
 * Generate a random word using math.random()
 * @returns random Word form the word array
 */
function generateWord(){
  let wordArray = ["bacon","bamboo","farm","fashion","individual","indoor","repeat","replace","typical", "ugly"];
  let randomNumber = Math.floor(Math.random() * 10);
  let randomWord = wordArray[randomNumber];
  return randomWord;
}
