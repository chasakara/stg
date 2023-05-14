let playerPosition = 1; // istarting point for the player on the game board.


// Function to roll the dice and move the player(Ant)
const diceOne = document.querySelector(".diceOne");
const diceTwo = document.querySelector(".diceTwo");
const rollBtn = document.querySelector(".roll");
let diceOneResult;
let diceTwoResult;
let diceResult;

const randomDice = () => {
    const randomOne = Math.floor(Math.random() * 6 + 1);
    const randomTwo = Math.floor(Math.random() * 6 + 1);
    rollDiceOne(randomOne);
    rollDiceTwo(randomTwo);
    
    const diceResult = randomOne + randomTwo;
    movePlayer(diceResult);
};

const rollDiceOne = (randomOne) => {
    diceOne.classList.add("rolling-animation");

    setTimeout(() => {
        switch (randomOne) {
            case 1:
                diceOne.style.transform = "rotateX(0deg) rotateY(0deg)";
                diceOneResult = 1;
                break;

            case 6:
                diceOne.style.transform = "rotateX(180deg) rotateY(0deg)";
                diceOneResult = 6;
                break;

            case 2:
                diceOne.style.transform = "rotateX(-90deg) rotateY(0deg)";
                diceOneResult = 2;
                break;

            case 5:
                diceOne.style.transform = "rotateX(90deg) rotateY(0deg)";
                diceOneResult = 5;
                break;

            case 3:
                diceOne.style.transform = "rotateX(0deg) rotateY(90deg)";
                diceOneResult = 3;
                break;

            case 4:
                diceOne.style.transform = "rotateX(0deg) rotateY(-90deg)";
                diceOneResult = 4;
                break;

            default:
                break;
        }

        diceOne.classList.remove("rolling-animation") = "none";
    }, 1050);
};

const rollDiceTwo = (randomTwo) => {
    diceTwo.classList.add("rolling-animation");

    setTimeout(() => {
        switch (randomTwo) {
            case 1:
                diceTwo.style.transform = "rotateX(0deg) rotateY(0deg)";
                diceTwoResult = 1;
                break;

            case 6:
                diceTwo.style.transform = "rotateX(180deg) rotateY(0deg)";
                diceTwoResult = 6;
                break;

            case 2:
                diceTwo.style.transform = "rotateX(-90deg) rotateY(0deg)";
                diceTwoResult = 2;
                break;

            case 5:
                diceTwo.style.transform = "rotateX(90deg) rotateY(0deg)";
                diceTwoResult = 5;
                break;

            case 3:
                diceTwo.style.transform = "rotateX(0deg) rotateY(90deg)";
                diceTwoResult = 3;
                break;

            case 4:
                diceTwo.style.transform = "rotateX(0deg) rotateY(-90deg)";
                diceTwoResult = 4;
                break;

            default:
                break;
        }

        diceTwo.classList.remove("rolling-animation");
        diceResult = diceOneResult + diceTwoResult;
        document.querySelector(".result p").classList.add("display");
        document.querySelector("#result-number").textContent = diceResult;
    }, 1050);
    
};


rollBtn.addEventListener("click", randomDice);

// Functions to move player
function movePlayer(steps) {
    playerPosition = calculateNextPosition(playerPosition, steps); // Update players postiion depending on dice roll value
    handlePlayerPosition();

}


// function to handle player position
function handlePlayerPosition() {
    const positionActions = {
      // negative action positions(traps)

      0: function () {
        // Handle action for position 0 (Starting point)
        console.log("You are at the starting point");
      },
      1: function () {
        // Handle action for position 1
        console.log("take short cut or normal path");
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
        console.log("You have taken the shortcut");
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
        // Negative action for position 7
        handlePositiveAction();
      },
      33: function () {
        // Negative action for position 33
        handlePositiveAction();
      },
  
      44: function () {
        // Negative action for position 44
        handlePositiveAction();
      },
      57: function () {
        // Negative action for position 57
        handlePositiveAction();
      },
      81: function () {
        // Negative action for position 81
        handlePositiveAction();
      },
      85: function () {
        // Negative action for position 85
        handlePositiveAction();
      },
      98: function () {
        // Negative action for position 98
        handlePositiveAction();
      },
      107: function () {
        // Negative action for position 107
        handlePositiveAction();
      },
      116: function () {
        // Negative action for position 116
        handlePositiveAction();
      },
  
      120: function () {
        console.log("Congratulations! You've become a Jedi Master and saved the galaxy!");
      },
    };
  
    if (positionActions[playerPosition]) {
      positionActions[playerPosition]();
    } else {
      console.log("No action defined for position", playerPosition);
    }
    
    console.log("Current position:", playerPosition); // Display the current position
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
    console.log(randomAction);

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
    console.log(randomAction);
  
    if (randomAction.includes("Move back")) {
      const steps = parseInt(randomAction.match(/\d+/)[0], 10);
      playerPosition -= steps;
    }
  }

 // This function includes logic for player movement through the first short cut

 function calculateNextPosition(currentPosition, steps) {
  let nextPosition;

  if (currentPosition >= 1 && currentPosition <= 14) {
    // Right path from positions 1 to 14
    nextPosition = currentPosition + steps;
    if (nextPosition > 14) {
      nextPosition = 20;
    }
  } else if (currentPosition >= 15 && currentPosition <= 19) {
    // Shortcut path from positions 15 to 19
    nextPosition = currentPosition + steps;
    if (nextPosition > 19) {
      nextPosition = 14;
      if (nextPosition + steps > 19) {
        nextPosition = 20 + (nextPosition + steps - 19);
      }
    }
  } else {
    // Regular path after position 20
    nextPosition = currentPosition + steps;
    if (nextPosition > 120) {
      nextPosition = 120;
    }
  }

  return nextPosition;
}



  // Test case for moving through the right path (positions 1 to 14)
console.log(calculateNextPosition(1, 3)); // Expected output: 4
console.log(calculateNextPosition(5, 2)); // Expected output: 7
console.log(calculateNextPosition(10, 5)); // Expected output: 20 

// Test case for moving through the shortcut path (positions 15 to 19)
console.log(calculateNextPosition(15, 3)); // Expected output: 18 (within the shortcut range)
console.log(calculateNextPosition(15, 5)); // Expected output: 20 (exits the shortcut and enters the regular path)

// Test case for moving through the regular path (positions after 20)
console.log(calculateNextPosition(25, 3)); // Expected output: 28
console.log(calculateNextPosition(120, 5)); // Expected output: 120 (reaches the end of the game board)
