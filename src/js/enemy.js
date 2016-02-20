function Enemy(y, type){
	this.x = 810;
	this.y = y;
	this.type = type;
	this.speed = 2;
	this.bullets = [];
	this.damage = 4;
	this.visible = true;
}

Enemy.prototype.Move = function(){
	this.x -= this.speed;
}

Enemy.prototype.Damage = function(){
	this.damage--;
}