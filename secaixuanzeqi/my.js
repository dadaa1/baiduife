function $(a){
	return document.getElementById(a);
}
var con=document.createElement('canvas');
con.width='1';
con.height='1';
var o_x=o_xm=175,
	o_y=o_yn=175,
	t_y=t_yn=175;
var rgb='rgb(0,0,0)';
var o_wx=$('app').getBoundingClientRect().left;
var o_wy=$('app').getBoundingClientRect().top;
var t_wy=$('hua').getBoundingClientRect().top;
$('one').width='400';
$('one').height='400';
$('two').width='25';
$('two').height='400';

var oneg=$('one').getContext('2d');
var twog=$('two').getContext('2d');
one_draw('blue');
two_draw();

$('one_c').onmousedown=function(e){
	document.onmousemove=function(ev){
		e.stopPropagation();
		console.log('计算位置:',o_x+ev.clientX-e.clientX,o_y+ev.clientY-e.clientY);
		if(o_x+ev.clientX-e.clientX<390&&o_x+ev.clientX-e.clientX>-10){
			o_xm=o_x+ev.clientX-e.clientX;
			$('one_c').style.left=o_xm+'px';
		}
		if(o_y+ev.clientY-e.clientY<390&&o_y+ev.clientY-e.clientY>-10){
			o_yn=o_y+ev.clientY-e.clientY;
			$('one_c').style.top=o_yn+'px';
		}
		
	}
	document.onmouseup=function(){
		o_x=o_xm;
		o_y=o_yn;
		document.onmousemove=null;
	}
}


$('two_c').onmousedown=function(e){
	document.onmousemove=function(ev){
		e.stopPropagation();
		console.log('计算位置:',t_y+ev.clientY-e.clientY);
		if(t_y+ev.clientY-e.clientY<390&&t_y+ev.clientY-e.clientY>-10){
			t_yn=t_y+ev.clientY-e.clientY;
			$('two_c').style.top=t_yn+'px';
		}
		var color=twog.getImageData(0,+t_yn+9,1,1).data;
		var r=color[0];
		var g=color[1];
		var b=color[2];
		rgb='rgb('+r+','+g+','+b+')';
		one_draw(rgb);
	}
	document.onmouseup=function(){
		t_y=t_yn;
		document.onmousemove=null;
	}
}







function one_draw(color){
	console.log(color)
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
	grd.addColorStop(0.667,'rgb(0,0,255');
	grd.addColorStop(0.833,'rgb(248,0,248)');
	grd.addColorStop(1,'red');
	//应用渐变
	twog.fillStyle = grd;
	twog.fill();
	grd=null;
}