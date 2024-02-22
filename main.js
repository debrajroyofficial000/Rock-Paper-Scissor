const Play = () => {
  const spells = ["rock", "paper", "scissor"];
  return spells[Math.floor(Math.random() * spells.length + 1)];
};

function startGame() {
  let userPoint = 0;
  let computerPoint = 0;

  for (let round = 0; round < 5; round++) {
    const userSpell = prompt(
      "Enter your choice \n 1. Rock \n 2. Paper \n 3. Scissor"
    ).toLowerCase();
    const computerSpell = Play();
    if (userSpell === "rock" && computerSpell === "scissor") {
      userPoint++;
      alert("you won");
    }
    if (userSpell === "rock" && computerSpell === "paper") {
      computerPoint++;
      alert("computer won");
    }
    if (userSpell === "scissor" && computerSpell === "paper") {
      userPoint++;
      alert("you won");
    }
    if (userSpell === "scissor" && computerSpell === "rock") {
      computerPoint++;
      alert("computer won");
    }
    if (userSpell === "paper" && computerSpell === "rock") {
      userPoint++;
      alert("you won");
    }
    if (userSpell === "paper" && computerSpell === "scissor") {
      computerPoint++;
      alert("computer won");
    }
    if (userSpell === computerSpell) {
      alert("both of you draw");
    }
  }

  if (userPoint > computerPoint) alert("the user won the final battle");
  else if (userPoint === computerPoint) alert("the batter is tie");
  else alert("the computer won the final battle");
}

startGame();
