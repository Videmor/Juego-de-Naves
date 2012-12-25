var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

//crear el objeto de la nave
var nave = {
	x: 100,
	y: 100,
	width: 50,
	height: 50
}

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

function drawNave(){
	ctx.save();
	ctx.fillStyle = 'white';
	ctx.fillRect(nave.x, nave.y, nave.width, nave.height );
	ctx.restore();
}

function frameloop(){
	drawBackground();
	drawNave();
}

loadMedia();