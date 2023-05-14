const players = [
  { name: "player1" },
  { name: "player2" },
  { name: "player3" },
  { name: "player4" },
];

// Function to determine player order:
function determinePlayerOrder() {
  // Roll a random dice and return the result
  function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  players.forEach((player) => {
    player.initialRoll = rollDice();
  });
  players.sort((a, b) => b.initialRoll - a.initialRoll);
}


function movePlayer(steps) {
  // Your logic to move the player goes here
}

function playTurn(player) {
  console.log(`It's ${player.name}'s turn.`);
  const steps = rollDice();
  console.log(`${player.name} rolled ${steps}`);
  movePlayer(steps);
  console.log(
    `${player.name} moved ${steps} steps and is now at position ${player.position}`
  );

  // (Depending on what player lands on, follow up with an action)
  // Eg: "You narrowly escaped a Wampa attack. Due to injuries sustained, you cannot move for your next turn"

  movePlayer(steps);
}

// Determine player order at start of  game
determinePlayerOrder();


players.forEach((player) => {
  playTurn(player);
});
