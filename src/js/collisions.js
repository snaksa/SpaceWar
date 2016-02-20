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

						enemies[j].Damage();
						if(enemies[j].damage == 0){
							enemies[j].visible = false;
							player.kills++;
							ShipExplosion(enemies[j].x, enemies[j].y, enemies[j].type);
						}
						break;
					}
				}
			}
		}
	}
}