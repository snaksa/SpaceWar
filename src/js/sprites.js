var 

// Sprite vars //
s_bg1,
s_player,
s_player_bullet,
s_enemyShips = [],
s_enemyBullets = [],
s_explosions = [];

/**
 * Simple sprite class
 * 
 * @param {Image}  img    spritesheet image
 * @param {number} x      x-position in spritesheet
 * @param {number} y      y-position in spritesheet
 * @param {number} width  width of sprite 
 * @param {number} height height of sprite
 * @param {number} drawWidth drawWidth of sprite
 * @param {number} drawHeight drawHeight of sprite
 */
function Sprite(img, x, y, width, height) {
	this.img = img;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};
/**
 * Draw sprite ta canvas context
 * 
 * @param  {CanvasRenderingContext2D} ctx context used for drawing
 * @param  {number} x   x-position on canvas to draw from
 * @param  {number} y   y-position on canvas to draw from
 */
Sprite.prototype.draw = function(ctx, x, y) {
	ctx.drawImage(
		this.img, 
		this.x, 
		this.y, 
		this.width, 
		this.height,
		x, 
		y, 
		this.width, 
		this.height);
};

/**
 * Initate all sprite
 * 
 * @param  {Image} img spritesheet image
 */
function initSprites(img) {
	s_bg1 = new Sprite(img, 0, 0, 800, 496);
	s_player = new Sprite(img, 5, 498, 64, 50);
	s_player_bullet = new Sprite(img, 0, 561, 30, 8);
}

function initEnemies(img){
	s_enemyShips[0] = new Sprite(img, 0, 10, 75, 79);
	s_enemyShips[1] = new Sprite(img, 0, 114, 100, 90);
	s_enemyShips[2] = new Sprite(img, 94, 0, 71, 89);

	s_enemyBullets[0] = new Sprite(img, 176, 35, 36, 30);
	s_enemyBullets[1] = new Sprite(img, 176, 0, 40, 34);
	s_enemyBullets[2] = new Sprite(img, 0, 211, 39, 11);
}

function initExplosion(img){
	var width = 110;
	var count = 0;
	for(var i = 0; i < 5; i++){
		var row = i * width;
		var col = 0;
		for(var j = 0; j < 5; j++){
			s_explosions[count] = new Sprite(img, col, row, width, width);
			col += width;
			count++;
		}
	}
}