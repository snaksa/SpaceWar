//fire player bullet on every nth frame
function FireBullets(frequency){

	if(frames % frequency == 0){
		var b = new Bullet(player.x + s_player.width, player.y + s_player.height / 2, player.bulletSpeed);
		bullets.push(b);
	}
}

//fire enemy bullet on every 12th frame if the random frequency result allows it
function FireEnemyBullets(frequency, bulletSpeed){
	if(frames % 12 == 0){
		var enemiesLenght = enemies.length;
		for(var i = 0; i < enemiesLenght; i++){
			var rnd = Math.floor(Math.random() * 100);
			if(rnd >= enemyBulletFrequency && enemies[i].visible){
				var b = new Bullet(enemies[i].x, enemies[i].y + (s_enemyShips[enemies[i].type].height / 2), enemyBulletSpeed);
				enemies[i].bullets.push(b);
			}
		}
	}
}

function GenerateEnemy(){
	if(frames % enemyFrequency == 0){
		var rndY = Math.floor((Math.random() * 300) + 50);
		var rndType = Math.floor((Math.random() * 3));
		var rndRotation = Math.floor((Math.random() * 100));
		var rot = false;
		var startRot = 0;
		if(rndRotation > 20) {
			startRot =  Math.floor((Math.random() * 1000));
			rot = true;
		}
		var e = new Enemy(rndY, rndType, enemySpeed, enemyDamage, rot, startRot);
		enemies.push(e);
	}
}

function ShipExplosion(x, y, type){
	var shipCenterX = x + s_enemyShips[type].width / 2;
	var shipCenterY = y + s_enemyShips[type].height / 2;

	var explosionX = shipCenterX - s_explosions[0].width / 2;
	var explosionY = shipCenterY - s_explosions[0].height / 2;

	var e = new Explosion(explosionX, explosionY);
	explosions.push(e);
}

function GeneratePowerUp(){
	var rnd = Math.random() * 100 + 1;
	if(rnd >= 90){
		var rndY = Math.floor((Math.random() * 350) + 50);
		var rndType = Math.floor((Math.random() * 4));
		var p = new PowerUp(880, rndY, rndType);
		powerups.push(p);
	}
	else{
		if(rnd >= 50){
			var rndY = Math.floor((Math.random() * 350) + 50);
			var p = new PowerUp(880, rndY, 0);
			powerups.push(p);
		}
	}
}