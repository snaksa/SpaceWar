var
// Game vars //
canvas,
ctx,
bgpos = 0,
bgposSpeed = 0.4,
frames = 0,
currentState,

enemyFrequency = 100, //in frames
enemyBulletFrequency = 80, //in range of 0 to 100 the generated random number should be bigger than this
enemyBulletSpeed = -10,

states = {
	Splash: 0, Game: 1, Score: 2
},
player,
bullets = [],
enemies = [],
explosions = [],
keys = [];

var WIDTH, HEIGHT;

function Game() {
	player = new Player();
	keys[38] = false;
	keys[40] = false;
}

function run() {
	var loop = function() {
		update();
		render();
		window.requestAnimationFrame(loop, canvas);
	}
	window.requestAnimationFrame(loop, canvas);
};

Game.prototype.start = function(){
	// create canvas and set width/height
	canvas = document.getElementById("gameCanvas");
	WIDTH = canvas.width;
	HEIGHT = canvas.height;

	// listen for input event
	document.addEventListener('keydown', onKeyDown, true);
	document.addEventListener('keyup', onKeyUp, true);

	ctx = canvas.getContext("2d");
	currentState = states.Game;

	// initate graphics
	HandleImageSprites();
};



function update(){
	frames++;

	if(currentState == states.Game){
		HandlePlayerInput();

		FireBullets(player.bulletFrequency);
		UpdateBullets();

		GenerateEnemy();
		UpdateEnemies();
		FireEnemyBullets(enemyBulletFrequency);
		UpdateEnemyBullets();

		PlayerBulletsToEnemyCollision();
		if(frames % 3 == 0) UpdateExplosionStage();
		UpdateExplosionPosition();
		
		bgpos -= bgposSpeed;
	}
}

function render(){
	ctx.fillRect(0, 0, WIDTH, HEIGHT);

	RenderBackground();

	s_player.draw(ctx, player.x, player.y);

	RenderPlayerBullets();
	RenderEnemies();
	RenderEnemyBullets();
	RenderExplosions();
}

function HandleImageSprites(){
	ctx.fillStyle = "#000";

	var img1 = new Image();
	img1.onload = function() {
		initSprites(this);
		run();
	}
	img1.src = "images/spritesheet2.png";

	var img2 = new Image();
	img2.onload = function() {
		initEnemies(this);
	}
	img2.src = "images/enemiesSpriteSheet2.png";

	var img3 = new Image();
	img3.onload = function() {
		initExplosion(this);
	}
	img3.src = "images/explosion4.png";
}





