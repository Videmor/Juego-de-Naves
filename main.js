var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

//crear el objeto de la nave
var nave = {
	x: 100,
	y: canvas.height - 100,
	width: 50,
	height: 50
}

var teclado = [];

var disparos = [];

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

	if( teclado[32] ){
		if (!teclado.fire){
			fire();
			teclado.fire = true;
		}

	}else teclado.fire = false;

}

function moveDisparos(){
	for (var i in disparos) {
		var disparo = disparos[i];
		disparo.y -= 2;
	};
	disparos = disparos.filter(function(disparo){
		return disparo.y > 0;
	})
}

function fire(){
	disparos.push({
		x: nave.x + 20,
		y: nave.y - 10,
		width: 2,
		height: 30
	})
}

function drawDisparos(){
	ctx.save();
	ctx.fillStyle = "white";
	for (var i in disparos) {
		var disparo = disparos[i];
		ctx.fillRect(disparo.x, disparo.y, disparo.width, disparo.height);
	};
	ctx.restore();
}

function frameloop(){
	moveNave()
	moveDisparos();
	drawBackground();
	drawDisparos();
	drawNave();
}

addEventKeyboard()
loadMedia();