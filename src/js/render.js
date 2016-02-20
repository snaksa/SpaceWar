function RenderBackground(){
	s_bg1.draw(ctx, bgpos, 0);
	s_bg1.draw(ctx, s_bg1.width + bgpos, 0);
	if (bgpos <= -WIDTH) bgpos = 0;
}

function RenderPlayerBullets(){
	var arrayLength = bullets.length;
	for (var i = 0; i < arrayLength; i++) {
	    s_player_bullet.draw(ctx, bullets[i].x, bullets[i].y);
	}
}

function RenderEnemies(){
	arrayLength = enemies.length;
	for (var i = 0; i < arrayLength; i++) {
		if(enemies[i].visible){
	    	s_enemyShips[enemies[i].type].draw(ctx, enemies[i].x, enemies[i].y);
		}
	}
}

function RenderEnemyBullets(){
	var enemiesLength = enemies.length;
	for (var i = 0; i < enemiesLength; i++) {
	    var bulletsLenght = enemies[i].bullets.length;
	    for(var j = 0; j < bulletsLenght; j++){
	    	s_enemyBullets[enemies[i].type].draw(ctx, enemies[i].bullets[j].x, enemies[i].bullets[j].y);
	    }
	}
}

function RenderExplosions(){
	var explosionsLenght = explosions.length;
	for(var i = 0; i < explosionsLenght; i++){
		s_explosions[explosions[i].stage].draw(ctx, explosions[i].x, explosions[i].y);
	}
}