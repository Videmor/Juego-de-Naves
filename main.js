var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

var fondo;

function loadMedia(){
	fondo = new Image();
	fondo.src = 'img/fondo.jpg';
	fondo.onload = function(){
		var intervalo = window.setInterval(frameloop, 1000/55);
	}
}

function drawBackground(){
	ctx.drawImage(fondo,0,0);
}

function frameloop(){
	drawBackground();
}

loadMedia();