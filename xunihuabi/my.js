var bi=['huabi','shuazi','penqiang',{name:'xiangpi',
							type:'juxing',//yuan&fang
							r:'10',
							}]
var now=bi[0];
function $(a){
	return document.getElementById(a);
}
$('huabi').onchange=function(e){
	console.log(this.checked);
	if(this.checked==true){
		now=bi[0];
	}
	console.log(now)
}						
$('shuazi').onchange=function(e){
	console.log(this.checked);
	if(this.checked==true){
		now=bi[1];
	}
	console.log(now)
}
$('penqiang').onchange=function(e){
	console.log(this.checked);
	if(this.checked==true){
		now=bi[2];
	}
	console.log(now)
}
$('xiangpi').onchange=function(e){
	console.log(this.checked);
	if(this.checked==true){
		now=bi[3];
	}
	console.log(now)
}
$('yuan').onchange=function(){
	console.log(this.checked);
	if(this.checked==true){
		bi[3].type='yuan';
	}
	console.log(now)
}

$('juxing').onchange=function(){
	console.log(this.checked);
	if(this.checked==true){
		bi[3].type='juxing';
	}
	console.log(now)
}
$('queding').onclick=function(e){
	bi[3].r=$('banjing').value;
	console.log(now)
}

$('clear').onclick=function(){
	app.clearRect(0,0,600,500);
}
//准备工作做完了,下面开始进入正题~
var x=0,
	y=0;
console.log($('app').getBoundingClientRect().top,$('app').getBoundingClientRect().left);
$('app').onmousedown=function(e){

	x=e.clientX-$('app').getBoundingClientRect().left;
	y=e.clientY-$('app').getBoundingClientRect().top;
	if(typeof now=='object'){
		if(now.type=='yuan'){
			xiangpi(x,y,x+1,y+1);
		}else{
			app.fillStyle='#fff';
			app.fillRect(x-now.r/4,y-now.r/4,now.r/2,now.r/2);
		}
		
	}
	document.onmousemove=function(ev){
		if(now=='shuazi'){
			shuazi(x,y,ev.clientX-$('app').getBoundingClientRect().left,ev.clientY-$('app').getBoundingClientRect().top);
		}else if(now=='huabi'){
			huabi(x,y,ev.clientX-$('app').getBoundingClientRect().left,ev.clientY-$('app').getBoundingClientRect().top);
		}else if(now=='penqiang'){
			penqiang(x,y,ev.clientX-$('app').getBoundingClientRect().left,ev.clientY-$('app').getBoundingClientRect().top);
		}else{
			xiangpi(x,y,ev.clientX-$('app').getBoundingClientRect().left,ev.clientY-$('app').getBoundingClientRect().top);
		}
		x=ev.clientX-$('app').getBoundingClientRect().left;
		y=ev.clientY-$('app').getBoundingClientRect().top;		
	}
	document.onmouseup=function(){
		document.onmousemove=null;
	}
}
var app=$('app').getContext('2d');
function huabi(x1,y1,x2,y2){
	console.log(x1,y1,x2,y2)
	app.beginPath();
	app.globalAlpha=1;
	app.moveTo(x1,y1);
	app.lineWidth = 2;
	app.lineJoin = "round";
	app.strokeStyle = "#000";
	app.lineTo(x2,y2);
	app.closePath();
	app.stroke();
}

function shuazi(x1,y1,x2,y2){
	console.log(x1,y1,x2,y2)
	app.beginPath();
	app.moveTo(x1,y1);
	app.globalAlpha=1;
	app.lineWidth = 30;
	app.lineJoin = "round";
	app.strokeStyle = "#000";
	app.lineTo(x2,y2);
	app.closePath();
	app.stroke();
}

function penqiang(x1,y1,x2,y2){
	for(var i=0;i<10;i++){
    	var randomNum=Math.random()*15;
        app.fillStyle='#000';
        app.beginPath();
        app.globalAlpha=0.4;
        app.arc(x1+randomNum,y1+randomNum,1,0,2*Math.PI);
        app.fill();
    }
}

function xiangpi(x1,y1,x2,y2){
	console.log(x1,y1,x2,y2)
	app.beginPath();
	app.lineWidth = now.r/2;
	app.globalAlpha=1;
	app.lineCap='square';
	if(now.type=='yuan'){
		app.lineJoin = "round";
	}else{
		app.lineJoin = "bevel";
	}
	app.strokeStyle = "#fff";
	app.moveTo(x1,y1);
	app.lineTo(x2,y2);
	app.closePath();
	app.stroke();
}