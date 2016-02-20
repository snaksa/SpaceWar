function Bullet(x, y, speed){
	this.speed = speed;
	this.x = x;
	this.y = y;
}

Bullet.prototype.update = function(){
	this.x += this.speed;
}