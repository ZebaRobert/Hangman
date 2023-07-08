var player = {};

window.addEventListener("DOMContentLoaded", function () {
  let playerForm = document.getElementById("playerSettings");
  playerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    player = {
      getDifficulty: function () {
        let radioGrupe = document.getElementsByClassName("diffSelection");
        for (let i = 0; i < radioGrupe.length; i++) {
          if (radioGrupe[i].checked) {
            return radioGrupe[i].value;
          }
        }
      },
      getTimerCheckbox: function () {
        let timerCheckbox = document.getElementById("timerCheckbox");
        if(timerCheckbox.checked){
          return true;
        }else{
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

