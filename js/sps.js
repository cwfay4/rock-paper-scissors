var  screen = document.getElementById("screen"),
help = document.getElementById('help'),
pcChoiceScreen = document.getElementById('pcChoiceScreen'),
options = ["stone", "paper", "scissors"], count = 0,
playerChoice = "", pcChoice = "", win = 0;

function play(option){
  pcChoice = "";
  playerChoice = "";
  win = 0;
  count = 0;
  pcChoice = selectChoice();
  playerChoice = option;
  evalChoises(playerChoice, pcChoice);
}

function reveal(pcChoice, playerChoice){
  switch(pcChoice){
    case "stone":
      break;
    case "paper":
      break;
    case "scissors":
      break;
  }
}

function selectChoice(){
  var c = options[Math.round(Math.random()*2)];
  return c;
}

function evalChoises(player, pc){
  switch (player) {
    case "stone":
      switch (pc) {
        case "stone":
          win = 2;
          break;
        case "paper":
          win = 0;
          break;
        case "scissors":
          win = 1;
          break;
      }
      break;
    case "paper":
      switch (pc) {
        case "stone":
          win = 1;
          break;
        case "paper":
          win = 2;
          break;
        case "scissors":
          win = 0;
          break;
      }
      break;
    case "scissors":
      switch (pc) {
        case "stone":
          win = 0;
          break;
        case "paper":
          win = 1;
          break;
        case "scissors":
          win = 2;
          break;
      }
      break;
  }
  showChoises();
}

function startGame(){
  screen.style.background = '#000';
  f = '<button type="button" id="stopGameBtn" onclick="startGame();">Salir</button>';
  fillScreen(f);
  showGameBoard();
  document.getElementById("stopGameBtn").addEventListener("click", stopGame, false);
}

function stopGame(){
  var close = confirm("Has pulsado salir.\n\nEstas seguro de esto?");
  if (close) {startGame();showInitScreen();}
}

function fillScreen(fill){
  screen.innerHTML = "";
  screen.innerHTML = fill;
}

function showGameBoard(){
  var board = '<div class="p-move"><br><h2>Elige Una Jugada</h2><br><div class="p-move"><div class="p-move-option"><a href="javascript:play(\'stone\');"><img src="assets/img/stone.png" ></a></div><div class="p-move-option"><a href="javascript:play(\'paper\');"><img src="assets/img/paper.png" ></a></div><div class="p-move-option"><a href="javascript:play(\'scissors\');"><img src="assets/img/scissors.png" ></a></div></div>';
  screen.innerHTML += board;
}

function showChoises(){
  switch(pcChoice){
    case "stone":
      pcTag = '<img src="assets/img/stone.png" />';
      break;
    case "paper":
      pcTag = '<img src="assets/img/paper.png" />';
      break;
    case "scissors":
      pcTag = '<img src="assets/img/scissors.png" />';
      break;
  }
  switch(playerChoice){
    case "stone":
      playerTag = '<img src="assets/img/stone.png" />';
      break;
    case "paper":
      playerTag = '<img src="assets/img/paper.png" />';
      break;
    case "scissors":
      playerTag = '<img src="assets/img/scissors.png" />';
      break;
  }
  var choices = '<div class="moves-board"><div class="choise" id="pc-choise"><div style="height: 70px;"></div>';
  choices += pcTag;
  choices += '</div><div class="choise" id="player-choise">';
  choices += playerTag;
  choices += '</div></div>';
  if (win == 0){
    window.requestAnimationFrame(countToLose);
  }
  if (win == 1){
    window.requestAnimationFrame(countToWin);
  }
  if (win == 2){
    window.requestAnimationFrame(countToTie);
  }

  fillScreen("");
  fillScreen(choices);
}

function countToLose(){
  count += 1;
  if (count == 51){
    showGameOverScreen();
  }else{
    window.requestAnimationFrame(countToLose);
  }
}

function countToWin(){
  count += 1;
  if (count == 51){
    showGameWinScreen();
  }else{
    window.requestAnimationFrame(countToWin);
  }
}

function countToTie(){
  count += 1;
  if (count == 51){
    showGameTieScreen();
  }else{
    window.requestAnimationFrame(countToTie);
  }
}

function showGameOverScreen(){
  screen.style.background = '#000 no-repeat center url("assets/img/game-over.jpg")';
  f = '<button type="button" id="startGameBtn" onclick="startGame();">Jugar de Nuevo</button>';
  fillScreen(f);
}

function showGameTieScreen(){
  screen.style.background = '#000 no-repeat center url("assets/img/game-tie.jpg")';
  f = '<button type="button" id="startGameBtn" style="margin-left:auto" onclick="startGame();">Jugar de Nuevo</button>';
  fillScreen(f);
}

function showGameWinScreen(){
  screen.style.background = '#000 no-repeat center url("assets/img/game-win.jpg")';
  f = '<button type="button" id="startGameBtn" onclick="startGame();">Jugar de Nuevo</button>';
  fillScreen(f);
}

function showHelp(){
  if (help.style.display == "none"){
    $(help).show();
  }else{
    $(help).hide();
  }
}

function showInitScreen(){
  screen.style.background = '#000 no-repeat center url("assets/background.jpg")';
  f = '<button type="button" id="startGameBtn" onclick="startGame();">Empezar juego</button>';
  f += '<div style="text-align:right"><a id="helpBtn" href="javascript:showHelp();">Ayuda</a></div>';
  fillScreen(f);
}

$(document).ready(()=>{
  showInitScreen();
});
