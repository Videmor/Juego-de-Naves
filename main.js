var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

//crear el objeto de la nave
var nave = {
	x: 100,
	y: 100,
	width: 50,
	height: 50
}

var teclado = [];

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

function addEventKeyboard(){
	addEvents(document, "keydown", function(e){
		teclado[e.keyCode] = true;
	});
	addEvents(document, "keyup", function(e){
		teclado[e.keyCode] = false;
	});

	function addEvents(elemento, nombreEvento, funcion){
		if (elemento.addEventListener){
			elemento.addEventListener(nombreEvento, funcion,false);
		}else if (elemento.attachEvent){
			elemento.attachEvent(nombreEvento, funcion);
		}

	}
}

function moveNave(){
	if (teclado[37]){
		nave.x -= 10;
		if (nave.x < 0) nave.x = 0;
	}
	if (teclado[39]){
		var limit = canvas.width - nave.width;
		nave.x += 10;
		if (nave.x > limit) nave.x = limit;
	}

}

function frameloop(){
	moveNave()
	drawBackground();
	drawNave();
}

addEventKeyboard()
loadMedia();