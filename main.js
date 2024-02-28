// ! VARIABLES
const gameScore = document.querySelector("#gameScore");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");

const playerSpell = document.querySelector("#playerSpell");
const computerSpell = document.querySelector("#computerSpell");

const result = document.querySelector("#result");

const playerSpells = document.querySelectorAll(".spells");

const resetBtn = document.querySelector("#reset");

// ! HELPER FUNCTIONS

// *  This functions return a random computer spell

function computerChoosingSpell() {
  const spells = ["rock", "paper", "scissor"];
  return spells[Math.floor(Math.random() * spells.length)];
}

// * This is the main game function where we are doing all the operations like comparing player's spell and computer's spell.

function play(player) {
  // * Will start the game if the game counter is less than 5

  if (Number(gameScore.textContent) < 5) {
    // * Incrementing game counter

    gameScore.textContent = Number(gameScore.textContent) + 1;
    playerSpell.textContent = player;
    const computer = computerChoosingSpell();
    computerSpell.textContent = computer;
    console.log(player);

    // * Comparison for player and computer spell

    if (player === computer) {
      result.textContent = "Its a draw";
    } else if (
      (player === "rock" && computer === "scissor") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissor" && computer === "paper")
    ) {
      result.textContent = "Yey ! You beat Computer !";
      playerScore.textContent = Number(playerScore.textContent) + 1;
    } else {
      result.textContent = "Oh! Computer beats you !";
      computerScore.textContent = Number(computerScore.textContent) + 1;
    }
  }

  // * Else we advise to restart the game
  else {
    playerSpells.forEach((spell) => {
      spell.disabled = true;
    });
    if (Number(playerScore.textContent) > Number(computerScore.textContent)) {
      result.textContent = "You have won the game . Re start the Game";
    } else if (
      Number(playerScore.textContent) < Number(computerScore.textContent)
    ) {
      result.textContent = "Computer has won the game. Re play the Game";
    } else {
      result.textContent = "Game has drawn";
    }
  }
}

// * Reset the game

function resetGame() {
  console.log("reset button is clicked");
  gameScore.textContent = 0;
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  playerSpell.textContent = "";
  computerSpell.textContent = "";
  result.textContent = "Players are you ready ?";

  playerSpells.forEach((spell) => {
    spell.disabled = false;
  });
}

// ! EVENT LISTENERS

playerSpells.forEach((spell) => {
  spell.addEventListener("click", (id) => {
    play(id.target.id);
  });
});

// Button to reset the game

resetBtn.addEventListener("click", resetGame);
