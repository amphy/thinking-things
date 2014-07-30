//Set up Canvas & Execute main game loop
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);
	var image = new Image();
	image.src = "http://diveintohtml5.info/i/openclipart.org_media_files_johnny_automatic_1360.png";
	image.onload = function() {
		context.drawImage(image, 300, 300);
	};

draw();

//Game update loop
var FPS = 30;
setInterval(function() {
  update();
  draw();
}, 1000/FPS);

function draw() {

	ctx.fillStyle = "#000"; // Set color to black
	ctx.fillText("This is some text", 100, 50);
	ctx.fillText("This is some more text", 100, 100);
	//More drawImage stuff: drawImage(image, dx, dy, dw, dh)
	
}

