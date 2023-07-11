# Testing

## Full testing was performed on the following devices:

Desktop:
  * 4k resolution, 28 inch monitor
Mobile Devices:
  * OnePlus9-Pro

Each device tested the site using the following browsers:
* Google Chrome
* Microsoft Edge
* Firefox

## Welcome Section

| Feature  | Expected Outcome | Testing Performed | Result | Pass/Fail |
|----------|------------------|-------------------|--------|-----------|        
| Username input field|The user is able to input only letters in to the field and create a username he/she would like to be referred to as.| Tried inputting symbols and numbers|Was unable to|Pass|
|Game difficulty selection|The user is able to select only one of 4 options|Tried selection more options|Was unable to|Pass|
|Number input for consecutive games |The user is only able to input a number|Tried inputting letters and symbols|Was unable to|Pass|
|Play button|Create a player object in JS from selected settings and display game section|Logged the player object to console|Everything was assigned correctly|Pass|

## Game Section

| Feature  | Expected Outcome | Testing Performed | Result | Pass/Fail |
|----------|------------------|-------------------|--------|-----------| 
|Virtual keyboard|If a button on the virtual keyboard was to be clicked the script would compare it to the mystery word and if it was found the content of the button (letter) would update the mystery word div in the correct spot|Logged to value of every variable involved in the process to the console|Everything was correctly assigned and the functions executed without issue|Pass|
|Mystery word|A random word would be pulled out of the words array and then an array would be created out of letters of the random word|Logged the random word and the array created from it to the console|Everything was assigned correctly|Pass|
|Win/Lose Counter|It would display how many game the player has won/lost|Played the game|Both counters update accordingly|Pass|
|Mystery word difficulty display|Based on the length of the mystery word it sould display difficulty of the word|Generated many random word|Display updates accordingly|Pass|

## Post Game Section 

| Feature  | Expected Outcome | Testing Performed | Result | Pass/Fail |
|----------|------------------|-------------------|--------|-----------| 
|Victory/Defeat Message|Would update the message accordingly to player's success|Played the game|The player is always greeted with appropriate message|Pass|
|Score display|Display a number of player's correct and incorrect guesses|Played the game|The score is always correct|Pass|
|Play again button|The game loop would start again with the same settings as before|Played the game|The game is same as it was before the end game screen|Pass|
|Change settings button|Takes you back to the Welcome screen and lets you reelect the settings|Clicked the button|Takes me back to Welcome screen/section|Pass|


