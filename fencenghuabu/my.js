var list=[];
var i=0;
var one=document.getElementById('one');

var a=one.getContext('2d');
var img=new Image();
img.src='bg.jpg';
img.onload=function(){
	var pattern = a.createPattern(img,"repeat");
	a.fillStyle = pattern;
	a.fillRect(0,0,500,500);
}

var bound=document.getElementById('con').getBoundingClientRect();

var x=0,y=0;
document.getElementById('con').onmousedown=function(e){
	e.stopPropagation();
	var flag=false;
	var m=e.clientX-bound.left;
	var n=e.clientY-bound.top;
	var c=document.createElement('canvas');
	c.width='500';
	c.height='500';
	console.log(c)
	document.onmousemove=function(ev){
		document.getElementById('con').appendChild(c);
		e.stopPropagation();
		x=ev.clientX-bound.left;
		y=ev.clientY-bound.top;
		if(x<=500&&y<=500){
			flag=true;
			c.getContext('2d').clearRect(0,0,500,500);
			drawLine(c.getContext('2d'),m,n,x,y);
		}
			
	}
	document.onmouseup=function(){
		e.stopPropagation();
		if(flag){
			xiaoC(m/10,n/10,x/10,y/10);
			flag=false;
			c.setAttribute('index',i++);
			list.push({'canvas':c,'m':m,'n':n,'x':x,'y':y});
		}
		document.onmousemove=null;
	}
}

function drawLine(con,m,n,x,y){
	con.beginPath();
	con.moveTo(m,n);
	con.lineWidth = 5;
	con.strokeStyle = "#000";
	con.lineTo(x,y);
	con.stroke();	
}

function xiaoC(m,n,x,y){
	var c=document.createElement('canvas');
	var div=document.createElement('div');
	var span=document.createElement('button');
	var but=document.createElement('input');
	but.type='button';
	but.value='1'
	span.innerText='删除';	
	var span1=document.createElement('button');
	span1.innerText='隐藏';
	div.setAttribute("index",i);
	div.appendChild(but);
	div.appendChild(span1)
	div.appendChild(span);
	div.appendChild(c);
	console.log(div);
	document.getElementById('lan').appendChild(div);
	c.style.border='1px solid red';
	c.width='50';
	c.height='50';
	var img=new Image();
	img.src='bg.jpg';
	img.onload=function(){
	var pattern = c.getContext('2d').createPattern(img,"repeat");
		c.getContext('2d').fillStyle = pattern;
		c.getContext('2d').fillRect(0,0,50,50);
		c.getContext('2d').beginPath();
		c.getContext('2d').moveTo(m,n);
		c.getContext('2d').lineWidth = 1;
		c.getContext('2d').strokeStyle = "#000";
		c.getContext('2d').lineTo(x,y);
		c.getContext('2d').stroke();
	}
	
}

function shanchu_yincang(target,that,index){
	if(target.innerText=='删除'){
		that.removeChild(findDom(document.getElementById('lan').children,index));
		document.getElementById('con').removeChild(findDom(document.getElementById('con').children,index));
		list[index]=null;
	}else if(target.innerText=='隐藏'){
		findDom(document.getElementById('lan').children,index).querySelector('button').innerText='显示';
		list[index]['canvas'].style.display='none';
	}else if(target.innerText=='显示'){
		findDom(document.getElementById('lan').children,index).querySelector('button').innerText='隐藏';
		list[index]['canvas'].style.display='block';
	}
}

function chonghui(color,index){
	var xiao=findDom(document.getElementById('lan').children,index).querySelector('canvas').getContext('2d');
	list[index]['canvas'].getContext('2d').clearRect(0,0,500,500);
	list[index]['canvas'].getContext('2d').fillStyle=color;
	list[index]['canvas'].getContext('2d').fillRect(0,0,500,500);
	drawLine(list[index]['canvas'].getContext('2d'),list[index]['m'],list[index]['n'],list[index]['x'],list[index]['y'])
	xiao.clearRect(0,0,50,50);
	xiao.fillStyle=color;
	xiao.fillRect(0,0,50,50);
	xiao.beginPath();
	xiao.moveTo(list[index]['m']/10,list[index]['n']/10);
	xiao.lineWidth = 1;
	xiao.strokeStyle = "#000";
	xiao.lineTo(list[index]['x']/10,list[index]['y']/10);
	xiao.stroke();
}
function findDom(dom,index){
	for(var i=0;i<dom.length;i++){
		console.log(dom[i])
		if(dom[i].getAttribute('index')==index){
			return dom[i];
		}
	}
}
document.getElementById('lan').onclick=function(e){
	console.log(e.target.nodeName);
	var index=e.target.parentNode.getAttribute('index');
	console.log(index)
	if(e.target.nodeName.toLowerCase()=='button'){
		shanchu_yincang(e.target,this,index);
	}else if(e.target.nodeName.toLowerCase()=='canvas'){
		var color=prompt('请输入颜色值:','red');
		console.log(color)
		if(color==null){
			return;
		}
		chonghui(color,index)
	}else if(e.target.nodeName.toLowerCase()=='input'){
		var num=prompt('请输入上下层值:','10');
		console.log(num)
		if(num==null){
			return;
		}
		findDom(document.getElementById('lan').children,index).querySelector('input').value=num;
		findDom(document.getElementById('con').children,index).style['z-index']=num;
	}	
}