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
function determinePlayerOrder() {
  // Roll a random dice and return the result
  function rollDice() {
    return * 6) + 1;
  }
  players.forEach((player) => {
    player.position = 0; // Set the initial position to 0 for each player
    player.initialRoll = rollDice();
  });
  players.sort((a, b) => b.initialRoll - a.initialRoll);
}

// added move player function here
function movePlayer(playerPosition, steps) {
  playerPosition = calculateNextPosition(playerPosition, steps);
  handlePlayerPosition(playerPosition);
}

function playTurn(player) {
  console.log(`It's ${player.name}'s turn.`);
  const steps = rollDice();
  console.log(`${player.name} rolled ${steps}`);
  // passed the player position as an argument when calling movePlayer
  player.position = movePlayer(player.position, steps);
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
