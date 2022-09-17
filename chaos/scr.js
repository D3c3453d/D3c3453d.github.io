var background = document.getElementById("background");
var ctx = background.getContext("2d");
background.width = background.height = 7000;
var t = 0.0;

function random(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

 function maker(x, y){
	var x1 = x*x + t*y - x*t -x;
	var y1 = -y*y -t*t - x*y -x*t -y*t-y;
	return {x : x1, y : y1};
 }
 
function draw(x, y){
	//ctx.fillStyle = "rgba("+(Math.sin(Math.log(t*10000))+1)*80+50+","+Math.log(t*10000)*100%200+", "+(Math.cos(Math.log(t*10000))+1)*80+50+", 1)";
	ctx.fillStyle = "rgba(" + random(150, 255) +","+ random(150, 255) +","+ random(150, 255) +", 1)";
	ctx.beginPath();
	ctx.arc(x, y, 2, 0, 2 * Math.PI);
	ctx.fill();
}
function line(x1, y1, x2, y2){
	ctx.strokeStyle = "rgba(" + random(150, 255) +","+ random(150, 255) +","+ random(150, 255) +", 1)";
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
}

var pos = maker(t, t);
var posback = maker(t, t);
var cam = -2000;
let posm = new Array();

ctx.fillStyle = "rgba(0,0,0,1)";
ctx.fillRect(0, 0, background.width, background.height);


function myCallback() {
	ctx.fillStyle = "rgba(0,0,0, 0.1)";
	ctx.fillRect(0, 0, background.width, background.height);
	pos = maker(t, t);
	for(var i = 0; i < 12000; i++){ 
		posm[i] = pos;
		draw(700*pos.x-cam, 700*pos.y-cam-1000);
		//line(700*posm[i].x-cam+700, 700*posm[i].y-cam, 700*pos.x-cam, 700*pos.y-cam);
		posback = pos;
		pos = maker(pos.x, pos.y);
	}
	t += 0.001;
}
setInterval(myCallback, 5);