function $(a){
	return document.getElementById(a);
}

$('one').width='400';
$('one').height='400';
$('two').width='25';
$('two').height='400';

var oneg=$('one').getContext('2d');
var twog=$('two').getContext('2d');
one_draw('blue');
two_draw();

$('one').onmousedown=function(e){
	document.onmousemove=function(ev){

	}
}







function one_draw(color){
	oneg.clearRect(0,0,400,400);
	oneg.rect(0,0,400,400);
	var grd = oneg.createLinearGradient(0,0,400,400);
	//添加颜色断点
	grd.addColorStop(0,'white');
	grd.addColorStop(0.5,color);
	grd.addColorStop(1,'black');
	//应用渐变
	oneg.fillStyle = grd;
	oneg.fill();
	grd=null;
}
function two_draw(){
	twog.clearRect(0,0,25,400);
	twog.rect(0,0,25,400);
	var grd = twog.createLinearGradient(0,0,25,400);
	//添加颜色断点
	grd.addColorStop(0,'red');
	grd.addColorStop(0.167,'rgb(248,248,0)');
	grd.addColorStop(0.334,'rgb(0,248,0)');
	grd.addColorStop(0.5,'rgb(0,248,248)');
	grd.addColorStop(0.667,'blue');
	grd.addColorStop(0.833,'rgb(248,0,248)');
	grd.addColorStop(1,'red');
	//应用渐变
	twog.fillStyle = grd;
	twog.fill();
	grd=null;
}