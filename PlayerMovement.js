// let playerPosition = 0; // starting point for the player on the game board.


// Function to roll the dice and move the player
const diceOne = document.querySelector(".diceOne");
const diceTwo = document.querySelector(".diceTwo");
const rollBtn = document.querySelector(".roll");
let diceOneResult;
let diceTwoResult;
let diceResult;

// function to culculate the dice value
const randomDice = () => {
    const randomOne = Math.floor(Math.random() * 6 + 1);
    const randomTwo = Math.floor(Math.random() * 6 + 1);
    rollDiceOne(randomOne);
    rollDiceTwo(randomTwo);

    const diceResult = randomOne + randomTwo;
    movePlayer(diceResult);
};







// Functions to move player
function movePlayer(steps) {
  movePlayer(playerPosition, steps);


}


// function to handle player position
function handlePlayerPosition() {
    const positionActions = {
      
      //  logic for dice rolls at shortcut paths
      0: function () {
        // Handle action for position 0 (Starting point)

        alert("You have crash landed on the planet of Endor you must roll the dice to choose a path");

        if ( diceResult > 6) {
          alert("You rolled a total of", diceResult + ". take the shortcut!");
          playerPosition = 15;
        } else {
          alert("You rolled a total of", diceResult + ". follow the path!");

          playerPosition = 1;
        }
      },
      51: function () {
        // Handle shortcut option for position 51

        alert("you must roll the dice to choose a path");

        if ( diceResult > 6) {
          alert("You rolled a total of", diceResult + ". take the shortcut!");
          playerPosition = 62;
        } else {
          alert("You rolled a total of", diceResult + ". follow the path!");


          playerPosition = 52;
        }
      },
      70: function () {
        // Handle shortcut option for position 70

        alert("you must roll the dice to choose a path");

        if ( diceResult > 6) {
          alert("You rolled a total of", diceResult + ". take the shortcut!");
          playerPosition = 89;
        } else {
          alert("You rolled a total of", diceResult + ". follow the path!");

        


          playerPosition = 80;
        }
      },
      102: function () {
        // Handle shortcut option for position 102
 
        alert("you must roll the dice to choose a path");

        if ( diceResult > 6) {
          alert("You rolled a total of", diceResult + ". take the shortcut!");
          playerPosition = 112;
        } else {
          alert("You rolled a total of", diceResult + ". follow the path!");


          playerPosition = 103;
        }
      },
      1: function () {
        // Handle action for position 1

        alert("You are on the right path");

        
      },
     
      
      10: function () {
         // Negative action for position 10
         handleNegativeAction();
      },
      14: function () {
         // Negative action for position 14
         handleNegativeAction();
      },
      15: function () {
        // beginning of shortcut
        alert("You have taken the shortcut");
      },
      17: function () {
        // Negative action for position 17
        handleNegativeAction();
      },
      19: function () {
        // Negative action for position 19
        handleNegativeAction();
      },
      26: function () {
        // Negative action for position 26
        handleNegativeAction();
      },
      53: function () {
        // Negative action for position 53
        handleNegativeAction();
      },
      63: function () {
        // Negative action for position 63
        handleNegativeAction();
      },
      67: function () {
        // Negative action for position 67
        handleNegativeAction();
      },
      84: function () {
        // Negative action for position 84
        handleNegativeAction();
      },
      89: function () {
        // Negative action for position 89
        handleNegativeAction();
      },
      90: function () {
        // Negative action for position 90
        handleNegativeAction();
      },
      95: function () {
        // Negative action for position 95
        handleNegativeAction();
      },
      104: function () {
        // Negative action for position 104
        handleNegativeAction();
      },
      111: function () {
        // Negative action for position 111
        handleNegativeAction();
      },
    
      // Positive actions ...
  
      4: function () {
        // Positive action for position 4
        handlePositiveAction();
      },
      7: function () {
        // Positive action for position 7
        handlePositiveAction();
      },
      33: function () {
        //Positive action for position 33
        handlePositiveAction();
      },
  
      44: function () {
        // Positive action for position 44
        handlePositiveAction();
      },
      57: function () {
        // Positive action for position 57
        handlePositiveAction();
      },
      81: function () {
        // Positive action for position 81
        handlePositiveAction();
      },
      85: function () {
        // Positive action for position 85
        handlePositiveAction();
      },
      98: function () {
        // Positive action for position 98
        handlePositiveAction();
      },
      107: function () {
        // Positive action for position 107
        handlePositiveAction();
      },
      116: function () {
        // Positive action for position 116
        handlePositiveAction();
      },
  
      120: function () {
        alert("Congratulations! You've become a Jedi Master and saved the galaxy!");
      },
    };
  
    if (positionActions[playerPosition]) {
      positionActions[playerPosition]();
    } 
  
    // Get the current position element and add the "active" class to it
    const currentPosition = document.getElementById("position-" + playerPosition);
    currentPosition.classList.add("active");
  }


  
  
  // Function to handle positive action
  function handlePositiveAction() {
    const positiveActions = [
      "You discovered an Ewok village. Move forward 3 steps.",
      "You befriended an Ewok warrior. Move forward 2 steps.",
      "You found a hidden cache of Rebel supplies. Move forward 4 steps.",
      "You rode a speeder bike through the dense forests of Endor. Move forward 5 steps.",
      "You received guidance from a wise Ewok elder. Move forward 2 steps.",
      "You helped the Ewoks fend off an Imperial scout patrol. Move forward 3 steps.",
      "You stumbled upon the remnants of an ancient Jedi temple. Move forward 4 steps.",
      "You witnessed a stunning Endorian sunset. Move forward 2 steps.",
      "You rescued a stranded Rebel pilot. Move forward 3 steps.",
      "You encountered a playful Ewok tribe. Move forward 2 steps.",
      "You discovered a secret Rebel outpost on Endor. Move forward 4 steps.",
      "You navigated through the treacherous Ewok tree bridges. Move forward 5 steps.",
      "You found a hidden path leading to an Endorian waterfall. Move forward 3 steps.",
      "You participated in an Ewok celebration feast. Move forward 2 steps.",
      "You encountered a rare species of Endorian wildlife. Move forward 4 steps.",
      "You received a message from the Rebel Alliance leadership. Move forward 3 steps.",
      "You explored the ancient Ewok cave dwellings. Move forward 2 steps.",
      "You helped the Ewoks build a defense against the Empire. Move forward 5 steps.",
      "You witnessed a traditional Ewok tribal dance. Move forward 2 steps.",
      "You received the honor of being named an honorary Ewok. Move forward 4 steps.",
    ];
    

    const randomAction = positiveActions[Math.floor(Math.random() * positiveActions.length)];
    alert(randomAction);

    if (randomAction.includes("Move forward")) {
      const steps = parseInt(randomAction.match(/\d+/)[0], 10);
      playerPosition += steps;
    }
  }


  // Function to handle negative action
  function handleNegativeAction() {
    const negativeActions = [
      "You stumbled into an Ewok trap. Move back 3 steps.",
      "You angered a territorial Gorax. Move back 2 steps.",
      "You got entangled in Endorian vines. Move back 4 steps.",
      "You encountered a hostile tribe of Duloks. Move back 5 steps.",
      "You fell into an Ewok pitfall. Move back 2 steps.",
      "You got lost in the dense forests of Endor. Move back 3 steps.",
      "You were chased by a pack of wild Wisties. Move back 4 steps.",
      "You encountered a treacherous Ewok hunting party. Move back 2 steps.",
      "You were caught in an Ewok net trap. Move back 3 steps.",
      "You disturbed the sacred burial grounds of the Ewoks. Move back 2 steps.",
      "You encountered an enraged mother Gorax. Move back 4 steps.",
      "You got caught in an Endorian thunderstorm. Move back 5 steps.",
      "You encountered a swarm of dangerous Endorian insects. Move back 3 steps.",
      "You accidentally angered an Ewok shaman. Move back 2 steps.",
      "You triggered an Ewok booby trap. Move back 4 steps.",
      "You disturbed the natural balance of the Endorian ecosystem. Move back 3 steps.",
      "You encountered a group of hostile Endorian wildlife. Move back 2 steps.",
      "You angered a territorial flock of Yuzzum birds. Move back 5 steps.",
      "You got caught in an Ewok log trap. Move back 2 steps.",
      "You stumbled upon a forbidden Ewok sacred site. Move back 4 steps.",
    ];
  
    const randomAction = negativeActions[Math.floor(Math.random() * negativeActions.length)];
    alert(randomAction);
  
    if (randomAction.includes("Move back")) {
      const steps = parseInt(randomAction.match(/\d+/)[0], 10);
      playerPosition -= steps;
    }
  }

 // This function includes logic for player movement through the short cuts and noraml paths.

 function calculateNextPosition(currentPosition, steps) {
  let nextPosition;

  // Right path from positions 1 to 14
  if (currentPosition >= 1 && currentPosition <= 14) {
    nextPosition = currentPosition + steps;
    if (nextPosition > 14) {
      nextPosition = 20;
    }
  }
  // Shortcut path from positions 15 to 19
  else if (currentPosition >= 15 && currentPosition <= 19) {
    nextPosition = currentPosition + steps;
    if (nextPosition > 19) {
      nextPosition = 14;
      if (nextPosition + steps > 19) {
        nextPosition = 20 + (nextPosition + steps - 19);
      }
    }
  }
  // Normal path from position 52 to 61
  else if (currentPosition === 52) {
    nextPosition = currentPosition + steps;
    if (nextPosition > 61) {
      nextPosition = 69;
    }
  }
  // Shortcut path from position 62 to 68
  else if (currentPosition === 62) {
    nextPosition = currentPosition + steps;
    if (nextPosition > 68) {
      nextPosition = 89;
    }
  }
  // Normal path from position 88 to 91
  else if (currentPosition === 88) {
    nextPosition = currentPosition + steps;
    if (nextPosition > 91) {
      nextPosition = 91 + (nextPosition - 91);
    }
  }
  // Shortcut path from position 89 to 90
  else if (currentPosition === 89) {
    nextPosition = currentPosition + steps;
    if (nextPosition > 90) {
      nextPosition = 88;
      if (nextPosition + steps > 90) {
        nextPosition = 91 + (nextPosition + steps - 90);
      }
    }
  }
  // Shortcut path from position 90 to 88
  else if (currentPosition === 90) {
    nextPosition = currentPosition + steps;
    if (nextPosition > 88) {
      nextPosition = 91;
    }
  }
  // Normal path from position 103 to 111
  else if (currentPosition >= 103 && currentPosition <= 111) {
    nextPosition = currentPosition + steps;
    if (nextPosition > 111) {
      nextPosition = 120;
    }
  }
  // Shortcut path from position 112 to 119
  else if (currentPosition === 112) {
    nextPosition = currentPosition + steps;
    if (nextPosition > 119) {
      nextPosition = 111;
    }
  }
  // Regular path after position 20 and final position at 120
  else {
    nextPosition = currentPosition + steps;
    if (nextPosition > 120) {
      nextPosition = 120;
    }
  }

  return nextPosition;
}

