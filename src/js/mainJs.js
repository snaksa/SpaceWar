function ShowDiv(p) {
    $("#" + p).slideDown();
}

function HideDiv(p) {
    $("#" + p).slideUp();
}

function StartGame() {
	HideDiv("splashScreen");
	var game = new Game();
	game.start();
}