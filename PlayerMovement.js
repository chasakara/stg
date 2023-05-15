let playerPosition = 0; // starting point for the player on the game board.

// Function to roll the dice and move the player
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

    diceOne.classList.remove("rolling-animation");
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

const players = []; // Initialize empty array to store selected players

// Character Choice
const characters = [
  { name: "C-3PO" },
  { name: "Chewbacca" },
  { name: "R2-D2" },
  { name: "Sith Lord Jar Jar" },
];

// Prompt to ask for number of players
let numberOfPlayers = parseInt(prompt("How many players? (2-4)"));
// Validate number of players
while (numberOfPlayers < 2 || numberOfPlayers > 4 || isNaN(numberOfPlayers)) {
  console.log("Invalid number of players. Please choose between 2 and 4.");
  numberOfPlayers = parseInt(prompt("How many players? (2-4)"));
}

// Prompt each player to choose a character and then loop over number of players
for (let i = 1; i <= numberOfPlayers; i++) {
  // Create array of available character names
  const availableCharacters = characters.map((character) => character.name);
  // Construct prompt message for current player
  const promptMessage = `Choose a character for Player ${i}:\n${availableCharacters.join(
    "\n"
  )}`;
  // Prompt player to choose a character and store input in playerName variable
  const playerName = prompt(promptMessage);
  // Make sure player can type in name capitalized, lowercase, etc.
  const selectedCharacter = characters.find(
    (character) => character.name.toLowerCase() === playerName.toLowerCase()
  );
  // Check if the selected character is valid (not undefined)
  if (selectedCharacter) {
    // Add selected player to players array
    players.push({ name: selectedCharacter.name });
    // Remove selected character from characters array
    characters.splice(characters.indexOf(selectedCharacter), 1);
  } else {
    // If selected character is invalid, display error message and decrement i to repeat current iteration until selected character is invalid
    console.log("Invalid character selection. Please try again.");
    i--;
  }
}

// Function to determine player order:
// function determinePlayerOrder() {
//   // Roll a random dice and return the result

//   players.forEach((player) => {
//     playerPosition = 0; // Set the initial position to 0 for each player
//     player.initialRoll = randomDice();
//   });
//   players.sort((a, b) => b.initialRoll - a.initialRoll);
// }

// added move player function here
function movePlayer(playerPosition, steps) {
  playerPosition = calculateNextPosition(playerPosition, steps);
  handlePlayerPosition(playerPosition);
}

function playTurn(player) {
  const promptMessage = `It's ${player.name}'s turn. Click OK to roll the dice`;
  let steps = 0;

  if (confirm(promptMessage)) {
    steps += Math.floor(Math.random() * 12 + 1);
  }

  console.log(`${player.name} rolled ${steps}`);

  // Calculate the new position by adding the steps to the current position
  const newPosition = playerPosition + steps;

  // Move the player to the new position
  movePlayer(newPosition);

  // Update the player position variable with the new position
  playerPosition = newPosition;

  console.log(
    `${player.name} moved ${steps} steps and is now at position ${playerPosition}`
  );

  // Handle the player's position
  handlePlayerPosition(playerPosition);
}


// Determine player order at start of  game
// determinePlayerOrder();

players.forEach((player) => {
  playTurn(player);
});

// function to handle player position
function handlePlayerPosition() {
  randomDice();
  const positionActions = {
    //  logic for dice rolls at shortcut paths
    0: function () {
      // Handle action for position 0 (Starting point)

      console.log(
        "You have crash landed on the planet of Endor you must roll the dice to choose a path"
      );

      if (diceResult > 6) {
        console.log("You rolled a total of", diceResult + ". take the shortcut!");
        playerPosition = 15;
      } else {
        console.log("You rolled a total of", diceResult + ". follow the path!");

        playerPosition = 1;
      }
    },
    51: function () {
      // Handle shortcut option for position 51

      console.log("you must roll the dice to choose a path");

      if (diceResult > 6) {
        console.log("You rolled a total of", diceResult + ". take the shortcut!");
        playerPosition = 62;
      } else {
        console.log("You rolled a total of", diceResult + ". follow the path!");

        playerPosition = 52;
      }
    },
    70: function () {
      // Handle shortcut option for position 70

      console.log("you must roll the dice to choose a path");

      if (diceResult > 6) {
        console.log("You rolled a total of", diceResult + ". take the shortcut!");
        playerPosition = 89;
      } else {
        console.log("You rolled a total of", diceResult + ". follow the path!");

        playerPosition = 80;
      }
    },
    102: function () {
      // Handle shortcut option for position 102

      console.log("you must roll the dice to choose a path");

      if (diceResult > 6) {
        console.log("You rolled a total of", diceResult + ". take the shortcut!");
        playerPosition = 112;
      } else {
        console.log("You rolled a total of", diceResult + ". follow the path!");

        playerPosition = 103;
      }
    },
    1: function () {
      // Handle action for position 1

      console.log("You are on the right path");
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
      console.log(
        "Congratulations! You've become a Jedi Master and saved the galaxy!"
      );
    },
  };

  const currentPosition = document.querySelector(".position.active");
  if (currentPosition) {
    currentPosition.classList.remove("active");
  }

  // Get the new position element and add the "active" class to it
  const newPosition = document.getElementById("position-" + playerPosition);
  if (newPosition) {
    newPosition.classList.add("active");
  }

  // Execute the position action if available
  if (positionActions[playerPosition]) {
    positionActions[playerPosition]();
  }
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
  forceCard.playbackRate = 1;
  forceCard.play();
  forceCard.currentTime = 0;


  const randomAction =
    positiveActions[Math.floor(Math.random() * positiveActions.length)];
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
  trapCard.playbackRate = 1;
  trapCard.play();
  trapCard.currentTime = 0;

  const randomAction =
    negativeActions[Math.floor(Math.random() * negativeActions.length)];
  console.log(randomAction);

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
    console.log("Congrats!!! You have won the game!!!")
    winSound.playbackRate = 1;
    winSound.play();
    winSound.currentTime = 0;
    
  }

  return nextPosition;
}
movePlayer(2)
