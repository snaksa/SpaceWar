function Enemy(y, type, speed, damage, rotation, startRotation){
	this.x = 810;
	this.y = y;
	this.type = type;
	this.speed = speed;
	this.bullets = [];
	this.damage = damage;
	this.visible = true;
	this.rotation = rotation;
	this.rotationCount = startRotation;
}

Enemy.prototype.Move = function(){
	this.x -= this.speed;
	if (this.rotation) {
		this.y += Math.cos(this.rotationCount/100);
		this.rotationCount++;
	}
}

Enemy.prototype.Damage = function(damage){
	this.damage -= damage;
}