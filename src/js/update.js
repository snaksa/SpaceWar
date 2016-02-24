//update player bullets position
function UpdateBullets(){
	var arrayLength = bullets.length;
	for (var i = 0; i < arrayLength; i++) {
	    bullets[i].update();
	    //check if bullet is out of range or has hit an enemy
	    if(bullets[i].x > 850){
	    	bullets.splice(i, 1);
	    	i--;
	    	arrayLength = bullets.length;
	    }
	}
}

//update enemy position
function UpdateEnemies(){
	var enemiesLenght = enemies.length;
	for(var i = 0; i < enemiesLenght; i++){
		if(enemies[i].x + 100 < 0) {
			enemies.splice(i, 1);
			i--;
			enemiesLenght = enemies.length;
		}
		else{
			enemies[i].Move();
		}
	}
}

//update enemy bullets position
function UpdateEnemyBullets(){
	var enemiesLenght = enemies.length;
	for(var i = 0; i < enemiesLenght; i++){
		var bulletsLenght = enemies[i].bullets.length;
		for(var j = 0; j < bulletsLenght; j++){
			enemies[i].bullets[j].update();
			if(enemies[i].bullets[j].x < -100){
				enemies[i].bullets.splice(j, 1);
				bulletsLenght = enemies[i].bullets.length;
				j--;
			}
		}
	}
}

function UpdateExplosionStage(){
	var explosionsLenght = explosions.length;
	for(var i = 0; i < explosionsLenght; i++){
		explosions[i].Update();
		if(explosions[i].stage == 25){
			explosions.splice(i, 1);
			i--;
			if(i == -1) i = 0;
			explosionsLenght = explosions.length;
		}
	}
}

function UpdateExplosionPosition(){
	var explosionsLenght = explosions.length;
	for(var i = 0; i < explosionsLenght; i++){
		explosions[i].Move();
	}
}





function UpdatePlayerDamageStatusbar(fill){
	if(typeof fill !== 'undefined') $("#playerDamageCover").width(0);
	else $("#playerDamageCover").width($("#playerDamageCover").width() + 140 / player.damage);
}

function UpdateLivesStatusBar(){
	$("#playerLives").text(player.lives);
}

function UpdatePlayerScoreStatusbar(){
	$("#playerScore").text(player.score);
}