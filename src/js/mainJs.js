function ShowDiv(p) {
    $("#" + p).show();
	$("#levelContent").scrollTop(0);
	$("#lastContent").scrollTop(0);
}

function HideDiv(p) {
    $("#" + p).hide();
}

var game;
function StartGame() {
	var level = $("#levelNumber").text();
	HideDiv("splashScreen");
	HideDiv('levelInfo');
	if(level > 5){
		ShowLastPlanets();
		return;
	}

	ShowDiv('playerStats');
	ShowDiv('playerRoadContainer');

	//var game = new Game(1);
	 game.continue(level);
}

function StartStory(){
	ShowDiv('startGame');
	game = new Game();
}

function ShowLevelInfo(level){

	document.getElementById("levelInfo").scrollTop = 0;
	$("#levelTitle").text(levels[level-1].title);
	$("#levelContent").html(levels[level-1].content);
	$("#levelNumber").text(level);

	HideDiv('startGame');
	ShowDiv('levelInfo');
}

var last = 7;
function ShowLastPlanets(){
	HideDiv("levelInfo");
	if(last == 10){
		$("#playerPointsEnd").text(player.score);
		$("#killedEnemiesEnd").text(player.kills);
		HideDiv("lastPlanets");
		ShowDiv("endOfGame");
		return;
	}
	$("#lastTitle").text(levels[last-1].title);
	$("#lastContent").html(levels[last-1].content);
	ShowDiv("lastPlanets");
	last++;
}

function ShowGameOverStats(){
	ShowDiv('gameOver');
	$("#playerPoints").text(player.score);
	$("#killedEnemies").text(player.kills);
}

function Restart(){
	location.reload();
}

function PauseGame(){
	if(currentState == states.Score || currentState == states.GameOver) return;

	if(currentState == states.Pause){
		currentState = states.Game;
		interval = PlayerMapInterval();
		HideDiv("pauseDiv");
		document.getElementById("pauseGameImage").src = "images/pause.png";
	}
	else {
		currentState = states.Pause;
		ShowDiv("pauseDiv");
		document.getElementById("pauseGameImage").src = "images/continue.png";
	}
}