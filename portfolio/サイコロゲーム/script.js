const diceImages = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png"
];

function startGame() {
  document.getElementById("startBtn").style.display = "none"; 
  document.getElementById("game").style.display = "block";    
}

function rollDice() {
  let player = Math.floor(Math.random() * 6);
  document.getElementById("playerDice").src = diceImages[player];

  let cpu = Math.floor(Math.random() * 6);
  document.getElementById("cpuDice").src = diceImages[cpu];

  let resultText = "";
  if (player > cpu) resultText = "🎉 あなたの勝ち！";
  else if (player < cpu) resultText = "💻 コンピュータの勝ち！";
  else resultText = "🤝 引き分け！";

  document.getElementById("result").innerHTML = resultText;
}

function goBack() {
  document.getElementById("game").style.display = "none";
  document.getElementById("startBtn").style.display = "block";
  document.getElementById("result").innerHTML = "";
  document.getElementById("playerDice").src = "images/dice.png";
  document.getElementById("cpuDice").src = "images/dice.png";
}
