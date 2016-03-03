var
// Game vars //
canvas,
ctx,
bgpos = 0,
bgposSpeed = 0.4,
frames = 0,
currentState,
level,

generateEnemy = true,
enemyFrequency = 100, //in frames
enemySpeed,
enemyDamage,
enemyBulletFrequency = 80, //in range of 0 to 100 the generated random number should be bigger than this
enemyBulletSpeed = -10,

states = {
	Splash: 0, Game: 1, Pause: 2, Score: 3, GameOver: 4
},
levelTime = 60,

player,
bullets = [],
enemies = [],
explosions = [],
powerups = [],
keys = [],
interval,
loop2;

var WIDTH, HEIGHT;

function Game() {
	player = new Player();

	canvas = document.getElementById("gameCanvas");
	WIDTH = canvas.width;
	HEIGHT = canvas.height;

	// listen for input event
	document.addEventListener('keydown', onKeyDown, true);
	document.addEventListener('keyup', onKeyUp, true);
	//document.addEventListener('mousedown', onKeyDownMouse, true);
	//document.addEventListener('mouseup', onKeyUpMouse, true);
	keys[38] = false;
	keys[40] = false;

	ctx = canvas.getContext("2d");
	currentState = states.Score;

	// initate graphics
	HandleImageSprites();
}

Game.prototype.continue = function(lev){

	level = parseInt(lev);
	frames = 0;
	bullets = [];
	enemies = [];
	explosions = [];
	powerups = [];
	keys = [];

	player.bulletSpeed = 10;
	player.bulletDamage = 1;
	player.lives = 3;
	player.damage = levels[level-1].playerDamage;
	player.currentDamage = player.damage;
	UpdatePlayerDamageStatusbar(true);
	UpdateLivesStatusBar();

	enemyFrequency = levels[level-1].enemyFrequency;
	enemySpeed = levels[level-1].enemySpeed;
	enemyBulletFrequency = levels[level-1].enemyBulletFrequency;
	enemyBulletSpeed = levels[level-1].enemyBulletSpeed;
	enemyDamage = levels[level-1].enemyDamage;
	bgposSpeed = levels[level-1].backgroundSpeed;

	currentState = states.Game;

	interval = PlayerMapInterval();
}

function PlayerMapInterval(){
	return window.setInterval(function(){ 
		var rect = $("#playerRoadMapCover")[0].getBoundingClientRect();
		var width = rect.right - rect.left;
		var newWidth = width - (492 / levelTime) / 100;
		$('#playerRoadMapCover').width(newWidth);

		if(newWidth < 10) generateEnemy = false;
		if(!generateEnemy && enemies.length == 0) {
			//level finished
			currentState = states.Score;
			ShowLevelInfo(level + 1);
			$('#playerRoadMapCover').width("100%");
		}

	}, 1000 / 100);
}

function run() {
	loop = function() {
		update();
		render();
		loop2 = window.requestAnimationFrame(loop, canvas);
	}

	window.requestAnimationFrame(loop, canvas);
};


/*Game.prototype.start = function(){
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
};*/

function update(){
	frames++;

	if(currentState == states.Pause){
		window.clearInterval(interval);
	}

	if(currentState == states.GameOver) {
		window.clearInterval(interval);
		window.cancelAnimationFrame(loop);
		ShowGameOverStats()
	}

	if(currentState == states.Score && !generateEnemy){
		window.clearInterval(interval);
		window.cancelAnimationFrame(loop);
		generateEnemy = true;
	}

	if(currentState == states.Game){
		HandlePlayerInput();

		FireBullets(player.bulletFrequency);
		UpdateBullets();

		if(generateEnemy) GenerateEnemy();
		UpdateEnemies();
		FireEnemyBullets(enemyBulletFrequency);
		UpdateEnemyBullets();

		PlayerBulletsToEnemyCollision();
		EnemyBulletsToPlayerCollision();

		if(frames % 3 == 0) UpdateExplosionStage();
		UpdateExplosionPosition();

		if(frames % 100 == 0) GeneratePowerUp();
		UpdatePowerUps();
		PlayerPowerUpsCollision();

		bgpos -= bgposSpeed;
	}
}

function render(){
	ctx.fillRect(0, 0, WIDTH, HEIGHT);

	RenderBackground();

	RenderPowerUps();
	RenderPlayerBullets();
	RenderEnemies();
	RenderEnemyBullets();
	RenderExplosions();

	s_player.draw(ctx, player.x, player.y);
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

	var img4 = new Image();
	img4.onload = function() {
		initPowerUps(this);
	}
	img4.src = "images/powerups.png";
}





