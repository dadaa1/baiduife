var list=[{value:'你好',fontSize:'16px',color:'red'},
	{value:'你好',fontSize:'16px',color:'#fff'},
	{value:'你好',fontSize:'16px',color:'#f1f'},
	{value:'你好',fontSize:'16px',color:'#234'},
	{value:'你好',fontSize:'16px',color:'#ef5'},
	{value:'你好',fontSize:'16px',color:'red'},
	{value:'你好',fontSize:'16px',color:'red'},
	{value:'你好',fontSize:'16px',color:'red'},
	{value:'你好',fontSize:'16px',color:'red'},
	{value:'你好',fontSize:'16px',color:'red'},
	{value:'你好',fontSize:'16px',color:'red'},
	{value:'你好',fontSize:'16px',color:'red'},
	{value:'你好',fontSize:'16px',color:'red'},
	{value:'你好',fontSize:'16px',color:'red'},
	{value:'你好',fontSize:'16px',color:'red'},
	{value:'你好',fontSize:'16px',color:'red'},
	{value:'你好',fontSize:'16px',color:'red'},
	{value:'你好',fontSize:'16px',color:'red'},
	{value:'你好',fontSize:'16px',color:'red'},
	{value:'你好',fontSize:'16px',color:'red'},
	{value:'你好',fontSize:'16px',color:'red'},
	{value:'你好',fontSize:'16px',color:'red'},
	{value:'你好',fontSize:'16px',color:'red'}
];

var π=Math.PI;
var m=0,n=0;
var timer;
function init(){
var len=list.length;
	var r=len*5;
	console.log(len)
	if(r<50){
		r=150;
	}
	var dom=document.createDocumentFragment();
	for(var i=0;i<len;i++){
		var θ = Math.acos(((2*i)-1)/len - 1);
		var Φ = θ * Math.sqrt(len*π);
		var x = r * Math.sin(θ)*Math.cos(Φ);   
		var y = r * Math.sin(θ)*Math.sin(Φ);  
		var z = r * Math.cos(θ);
		if(i==0){
			x=0;
			y=0;
			z=150;
		}
	addLi(dom,x,y,z,list[i]);
	}
	document.getElementById('app').innerHTML='';
	document.getElementById('app').appendChild(dom);
	clearInterval(timer);
	sudu();
}
function sudu(){
timer=setInterval(function(){
	xuanzhuan('x',1)
},200)
}
function addLi(dom,x,y,z,value){
	var li=document.createElement('li');
	console.log(value.value);
	li.innerText=value.value;
	li.style='transform:translate3d('+x+'px,'+y+'px,'+z+'px);color:'+value.color+';font-size:'+value.fontSize;
	li.style.fontSize=value.fontSize;
	dom.appendChild(li);
}

var nn=0;
document.body.onmousemove=function(e){
			nn++;
			if(nn%15==0){
				clearInterval(timer);
				aaa();
				nn=0;
			}
			clearInterval(timer);
			sudu();
	function aaa(){
		if(Math.abs(e.clientX-m)>Math.abs(e.clientY-n)){
		if(e.clientX-m>0){
			xuanzhuan('y',-1);
		}else{
			xuanzhuan('y',1);
		}
	}else{
		if(e.clientY-n>0){
			xuanzhuan('x',-1);
		}else{
			xuanzhuan('x',-1);
		}
	}
	m=e.clientX;
	n=e.clientY;
	}
}
function xuanzhuan(xy,f){
	var deg=(-1)*(-f)*π/12;
	var li=document.getElementsByTagName('li');
	if(xy=='y'){
		for(var j=0;j<li.length;j++){
		//console.log(li[j])
		var x1=getxz(li[j])[0]*Math.cos(deg)-getxz(li[j])[2]*Math.sin(deg);
		var z1=getxz(li[j])[2]*Math.cos(deg)+getxz(li[j])[0]*Math.sin(deg);
		
		li[j].style='transform:translate3d('+x1+'px,'+getxz(li[j])[1]+'px,'+z1+'px);color:'+getxz(li[j])[3]+';font-size:'+getxz(li[j])[4];
		}
	}else{
		for(var j=0;j<li.length;j++){
		//console.log(li[j])
		var y1=getxz(li[j])[1]*Math.cos(deg)-getxz(li[j])[2]*Math.sin(deg);
		var z1=getxz(li[j])[2]*Math.cos(deg)+getxz(li[j])[1]*Math.sin(deg);
		//console.log(x1,z1)
		li[j].style='transform:translate3d('+getxz(li[j])[0]+'px,'+y1+'px,'+z1+'px);color:'+getxz(li[j])[3]+';font-size:'+getxz(li[j])[4];
		}
	}
	
}

function getxz(li){
	var a=li.style.transform.split('(')[1].split('px');
	var s=new Array()
	s.push(a[0],a[1].slice(1),a[2].slice(1),li.style.color,li.style.fontSize);
	return s;
}
document.getElementById('sub').onclick=function(){
	var a=new Object();
	a.value=document.getElementById('nei').value;
	a.fontSize=document.getElementById('daxiao').value;
	a.color=document.getElementById('yanse').value;
	list.push(a);
	init();
}

init();