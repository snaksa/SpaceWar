function ShowDiv(p) {
    $("#" + p).slideDown();
}

function HideDiv(p) {
    $("#" + p).slideUp();
}

function StartGame() {
	HideDiv("splashScreen");
	HideDiv('levelOne');
	ShowDiv('playerStats');
	ShowDiv('playerRoadContainer');
	var game = new Game(6);
	game.start();
}

function StartStory(){
	ShowDiv('startGame');
}

function ShowLevelOne(){
	HideDiv('startGame');
	ShowDiv('levelOne');
}