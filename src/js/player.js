function Player(){
	this.x = 20;
	this.y = 250;
	this.speed = 4;
	this.bulletFrequency = 12; //in frames
	this.bulletSpeed = 10;
	this.kills = 0;
}

Player.prototype.Up = function(){
	this.y -= this.speed;
}

Player.prototype.Down = function(){
	this.y += this.speed;
}