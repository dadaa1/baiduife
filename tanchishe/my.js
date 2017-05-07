window.onload=function(){
	var app=document.getElementById('app');
	app.width=600;
	app.height=600;
	var ctx=app.getContext('2d');
	init(ctx);
	snake(ctx);
	food(ctx);
}

function init(ctx){//画网格
	//console.log(ctx)
	ctx.beginPath();
	ctx.lineWidth=1;
	ctx.strokeStyle='#001';
	for(var i=30;i<600;i+=30){
		ctx.moveTo(0,i);
		ctx.lineTo(600,i);
	}
	for(var i=30;i<600;i+=30){
		ctx.moveTo(i,0);
		ctx.lineTo(i,600);
	}
	ctx.stroke();
}
function snake(ctx){
	ctx.beginPath();
	ctx.rect(0,0,90,30);
	ctx.fillStyle = 'rgba(0,0,0,.5)';
	ctx.fill();
}
function food(ctx){
	ctx.beginPath();
	var ran1=Math.round(Math.random()*20);
	var ran2=Math.round(Math.random()*20);
	console.log(ran1,ran2);
	ctx.rect(ran1*30,ran2*30,30,30);
	ctx.fillStyle = 'red';
	ctx.fill();
}
