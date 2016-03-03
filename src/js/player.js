function Player(){
	this.x = 20;
	this.y = 250;
	this.speed = 4;
	this.bulletFrequency = 12; //in frames
	this.bulletSpeed = 10;
	this.bulletDamage = 1;
	this.kills = 0;
	this.score = 0;
	this.lives = 3;
	this.damage = 10;
	this.currentDamage = this.damage;
}

Player.prototype.Up = function(){
	this.y -= this.speed;
}

Player.prototype.Down = function(){
	this.y += this.speed;
}

Player.prototype.Damage = function(){
	this.currentDamage--;
	if(this.currentDamage == 0) {
		this.lives--;
		this.currentDamage = this.damage;
	}
}