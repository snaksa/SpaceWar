function PlayerBulletsToEnemyCollision(){
	var bulletsLength = bullets.length;
	var enemiesLength = enemies.length;
	var bullLength = s_player_bullet.width;
	for (var i = 0; i < bulletsLength; i++) {
		for(var j = 0; j < enemiesLength; j++){
			if(enemies[j].visible){
				if(bullets[i].x + bullLength > enemies[j].x && 
					bullets[i].x + bullLength < enemies[j].x + s_enemyShips[enemies[j].type].width){

					if(bullets[i].y > enemies[j].y && 
						bullets[i].y < enemies[j].y + s_enemyShips[enemies[j].type].height){
					
						bullets.splice(i, 1);
						i--;
						bulletsLength = bullets.length;

						enemies[j].Damage(player.bulletDamage);
						if(enemies[j].damage <= 0){
							enemies[j].visible = false;
							player.kills++;
							player.score += 50;
							ShipExplosion(enemies[j].x, enemies[j].y, enemies[j].type);
						}
						else{
							player.score += 20 * player.bulletDamage;
						}
						
						UpdatePlayerScoreStatusbar();
						break;
					}
				}
			}
		}
	}
}

function EnemyBulletsToPlayerCollision(){
	var enemiesLength = enemies.length;
	for(var i = 0; i < enemiesLength; i++){
		var enemyBulletsLength = enemies[i].bullets.length;
		var bullLength = s_enemyBullets[enemies[i].type].width;
		for(var j = 0; j < enemyBulletsLength; j++){
			if(enemies[i].bullets[j].x + 30 < player.x + s_player.width && 
					enemies[i].bullets[j].x > player.x){

					if(enemies[i].bullets[j].y + s_enemyBullets[enemies[i].type].height / 2 > player.y && 
						enemies[i].bullets[j].y + s_enemyBullets[enemies[i].type].height / 2 < player.y + s_player.height){

						enemies[i].bullets.splice(j, 1);
						j--;
						enemyBulletsLength = enemies[i].bullets.length;
						player.Damage();

						if(player.currentDamage == player.damage) {
							UpdatePlayerDamageStatusbar(true);
							UpdateLivesStatusBar();
						}
						else UpdatePlayerDamageStatusbar();

						if(player.lives == 0){
							//show game over screen
							currentState = states.GameOver;
						}
					}
			}
		}
	}
}

function PlayerPowerUpsCollision(){
	var powerupsLength = powerups.length;
	for(var i = 0; i < powerupsLength; i++){
		if(PowerupCheck(i)){
			if(powerups[i].type == powerUpTypes.Points){
				player.score += 300;
				UpdatePlayerScoreStatusbar();
			}
			else if(powerups[i].type == powerUpTypes.Bullets){
				player.bulletSpeed *= 2;
				player.bulletDamage *= 2;
			}
			else if(powerups[i].type == powerUpTypes.Repair){
				player.lives = 3;
				player.currentDamage = player.damage;

				UpdatePlayerDamageStatusbar(true);
				UpdateLivesStatusBar();
			}
			else if(powerups[i].type == powerUpTypes.Clean){
				KillAllEnemies();
			}

			powerups.splice(i, 1);
			i--;
			powerupsLength = powerups.length;
		}
	}
}

function KillAllEnemies(){
	var enemiesLength = enemies.length;
	for(var i = 0; i < enemiesLength; i++){
		if(enemies[i].visible){
			ShipExplosion(enemies[i].x, enemies[i].y, enemies[i].type);
			player.kills++;
			player.score += 20 * player.bulletDamage;
			enemies[i].visible = false;
		}
	}
	UpdatePlayerScoreStatusbar();
}

function PowerupCheck(i){
	//top left
	if(player.x > powerups[i].x && 
		 player.x < powerups[i].x + s_powerups[powerups[i].type].width){
		if(player.y > powerups[i].y && 
			player.y < powerups[i].y + s_powerups[powerups[i].type].height){
			return true;
		}
	}

	//top right
	if(player.x + s_player.width > powerups[i].x + 30 && 
		 player.x + s_player.width < powerups[i].x + s_powerups[powerups[i].type].width){
		if(player.y > powerups[i].y && 
			player.y < powerups[i].y + s_powerups[powerups[i].type].height){
			return true;
		}
	}

	//bottom right
	if(player.x + s_player.width > powerups[i].x + 30 && 
		player.x + s_player.width < powerups[i].x + s_powerups[powerups[i].type].width){
		if(player.y + s_player.height > powerups[i].y && 
			player.y + s_player.height < powerups[i].y + s_powerups[powerups[i].type].height){
			return true;
		}
	}

	//bottom left
	if(player.x > powerups[i].x && 
		 player.x < powerups[i].x + s_powerups[powerups[i].type].width){
		if(player.y + s_player.height > powerups[i].y && 
			player.y + s_player.height < powerups[i].y + s_powerups[powerups[i].type].height){
			return true;
		}
	}

	return false;
}