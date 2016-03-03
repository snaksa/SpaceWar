function PowerUp(x, y, type){
	this.x = x;
	this.y = y;
	this.speed = 2;
	this.type = type;
}

PowerUp.prototype.Move = function(){
	this.x -= this.speed;
}