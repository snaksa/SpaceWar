function HandlePlayerInput(){
	if(keys[38] && player.y > 80) player.Up();
	else if(keys[40] && player.y < HEIGHT - s_player.height - 50) player.Down();
}

function onKeyDown(event){
	if(event.keyCode == 38){
		keys[38] = true;
	}
	else if(event.keyCode == 40){
		keys[40] = true;
	}
}

function onKeyUp(event){
	if(event.keyCode == 38){
		keys[38] = false;
	}
	else if(event.keyCode == 40){
		keys[40] = false;
	}
}