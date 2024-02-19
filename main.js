const Play = () => {
  const spells = ["rock", "paper", "scissor"];
  return spells[Math.floor(Math.random() * spells.length + 1)];
};

function startGame() {
  let userPoint = 0;
  let computerPoint = 0;

  for (let round = 0; round < 5; round++) {
    const userSpell = Play();
    const computerSpell = Play();
    if (userSpell === "rock" && computerSpell === "scissor") {
      userPoint++;
      console.log("user won", userPoint);
    }
    if (userSpell === "rock" && computerSpell === "paper") {
      computerPoint++;
      console.log("computer won", computerPoint);
    }
    if (userSpell === "scissor" && computerSpell === "paper") {
      userPoint++;
      console.log("user won", userPoint);
    }
    if (userSpell === "scissor" && computerSpell === "rock") {
      computerPoint++;
      console.log("computer won", computerPoint);
    }
    if (userSpell === "paper" && computerSpell === "rock") {
      userPoint++;
      console.log("user won", userPoint);
    }
    if (userSpell === "paper" && computerSpell === "scissor") {
      computerPoint++;
      console.log("computer won", computerPoint);
    }
    if (userSpell === computerSpell) {
      console.log("both of them draw");
    }
  }

  if (userPoint > computerPoint) console.log("the final winner is user");
  else console.log("the final winner is computer");
}

startGame();
