var url='';
function $(a){
	return document.getElementById(a);
}
var canvas=document.createElement('canvas');
var resize=document.createElement('div');
resize.innerText='aaa';
resize.id='resize';
canvas.id='canvas';
var img=new Image();
var ctx=canvas.getContext('2d');
$('input').onchange=function(e){
	if(!this.files || !this.files[0]){
	return;
	}
	var reader = new FileReader();
 	reader.onload = function(evt){
 		url=evt.target.result;
 		img.src=url;
 		console.log(img.width,img.height);
 		canvas.width=img.width;
 		canvas.height=img.height;
 		canvas.style.border='1px solid red';
 		ctx.drawImage(img,0,0)
 		$('main').appendChild(canvas);
	}
	reader.readAsDataURL(this.files[0]);
	
}
var x,y,w,h,cx,cy,flag=false;
canvas.onmousedown=function(e){
	console.log(e.clientX,e.clientY);
	flag=true;
	x=e.clientX-8;
	y=e.clientY-33;
	resize.style.top=y+'px';
	resize.style.left=x+'px';
	resize.style.height='20px';
	resize.style.width='20px';
	$('main').appendChild(resize);
}
var app=$('app').getContext('2d');
canvas.onmouseup=function(e){
	console.log(e.clientX,e.clientY);
	cx=e.clientX-x-8;
	cy=e.clientY-33-y;
	console.log('app的宽高',cx,cy);
	resize.style.height=cy+'px';
	resize.style.width=cx+'px';
	$('app').height=cy;
	$('app').width=cx;
	app.clearRect(0,0,img.width,img.height);
	app.drawImage(img,x,y,cx,cy,0,0,cx,cy)
	x=null,y=null;
}

resize.onresize=function(){
	$('app').height=resize.style.height;
	$('app').width=resize.style.width;
	app.clearRect(0,0,img.width,img.height);
	app.drawImage(img,x,y,resize.style.width,resize.style.height,0,0,resize.style.width,resize.style.height)
	alert('aaaa')
}
