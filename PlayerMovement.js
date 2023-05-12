let playerPosition = 0; // istarting point for the player on the game board.


// Function to roll the dice and move the player(Ant)


// Functions to move player
function movePlayer(steps) {
    playerPosition = calculateNextPosition(playerPosition, steps); // Update players postiion depending on dice roll value
    handlePlayerPosition();

}


// function to handle player position
function handlePlayerPosition() {
    const positionActions = {
      0: function () {
        // Handle action for position 0 (Starting point)
        console.log("You are at the starting point");
      },
      1: function () {
        // Handle action for position 1
        console.log("take short cut");
      },
      
      5: function () {
        // Negative action for position 5
        handleRandomAction([
          "You got captured by Stormtroopers. Move back 3 steps.",
          "You were attacked by Sith Lords. Move back 2 steps.",
          "You fell into a dark pit. Move back 4 steps.",
        ]);
      },
      10: function () {
        // Negative action for position 10
        handleRandomAction([
          "You encountered a band of bounty hunters. Move back 2 steps.",
          "You were ambushed by Tusken Raiders. Move back 3 steps.",
          "You stumbled upon a Sith shrine. Move back 4 steps.",
        ]);
      },
      // ... Add more negative actions at other positions ...
  
      20: function () {
        // Positive action for position 20
        handleRandomAction([
          "You discovered a hidden Jedi temple. Move forward 4 steps.",
          "You encountered a friendly Ewok tribe. Move forward 3 steps.",
          "You received a vision from the Force. Move forward 2 steps.",
        ]);
      },
      25: function () {
        // Negative action for position 25
        handleRandomAction([
          "You got caught in a Death Star attack. Move back 4 steps.",
          "You were ensnared by a Sith trap. Move back 3 steps.",
          "You encountered a mind-controlled Jedi. Move back 2 steps.",
        ]);
      },
      // ... Add more positive actions at other positions ...
  
      120: function () {
        console.log("Congratulations! You've become a Jedi Master and saved the galaxy!");
      },
    };
  
    if (positionActions[playerPosition]) {
      positionActions[playerPosition]();
    }
  }
  
  // Function to handle positive action
function handlePositiveAction(actions) {
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    console.log(randomAction);
  
    if (randomAction.includes("Move forward")) {
      const steps = parseInt(randomAction.match(/\d+/)[0], 10);
      playerPosition += steps;
    }
  }

  // Function to handle negative action
function handleNegativeAction(actions) {
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    console.log(randomAction);
  
    if (randomAction.includes("Move back")) {
      const steps = parseInt(randomAction.match(/\d+/)[0], 10);
      playerPosition -= steps;
    }
  }

function calculateNextPosition(currentPosition, steps) {
    const nextPosition = currentPosition + steps;
  
    if (nextPosition >= 120) {
      // Ensure the player does not exceed the maximum position
      return 120;
    } else {
      return nextPosition;
    }
  }



