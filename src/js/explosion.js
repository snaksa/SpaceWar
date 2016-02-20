function Explosion(x, y){
	this.x = x;
	this.y = y;
	this.speed = 2;
	this.stage = 0;
}

Explosion.prototype.Update = function(){
	this.stage++;
}

Explosion.prototype.Move = function(){
	this.x -= this.speed;
}