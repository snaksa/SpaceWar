function Enemy(y, type, speed, damage){
	this.x = 810;
	this.y = y;
	this.type = type;
	this.speed = speed;
	this.bullets = [];
	this.damage = damage;
	this.visible = true;
}

Enemy.prototype.Move = function(){
	this.x -= this.speed;
}

Enemy.prototype.Damage = function(damage){
	this.damage -= damage;
}