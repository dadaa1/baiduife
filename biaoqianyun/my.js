var list=['你好','哈哈','失望','好玩','努力','江海','历史','你好','哈哈','失望','好玩','努力','江海','历史','你好','哈哈','失望','好玩','努力','江海','历史','你好','哈哈','失望','好玩','努力','江海','历史','成长'];
var len=list.length;
var π=Math.PI,r=150;
var m=0,n=0;
var dom=document.createDocumentFragment();
for(var i=0;i<len-1;i++){
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
	addLi(x,y,z,list[i]);
}
document.getElementById('app').appendChild(dom);

function addLi(x,y,z,value){
	var li=document.createElement('li');
	li.innerText=value;
	li.style='transform:translate3d('+x+'px,'+y+'px,'+z+'px)';
	dom.appendChild(li);
}


document.getElementById('btn').onclick=function(){
	xuanzhuan('x',-1);
}
var n;
document.body.onmousemove=function(e){

			n++;
			if(n%15==0){
				aaa();
				n=0;
			}
			
	
	console.log(e.clientX-m,e.clientY-n);
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
	}
}
function xuanzhuan(xy,f){
	var deg=(-1)*(-f)*π/12;
	console.log(deg)
	var li=document.getElementsByTagName('li');
	if(xy=='y'){
		for(var j=0;j<li.length;j++){
		//console.log(li[j])
		var x1=getxz(li[j])[0]*Math.cos(deg)-getxz(li[j])[2]*Math.sin(deg);
		var z1=getxz(li[j])[2]*Math.cos(deg)+getxz(li[j])[0]*Math.sin(deg);
		//console.log(x1,z1)
		li[j].style='transform:translate3d('+x1+'px,'+getxz(li[j])[1]+'px,'+z1+'px)';
		}
	}else{
		for(var j=0;j<li.length;j++){
		//console.log(li[j])
		var y1=getxz(li[j])[1]*Math.cos(deg)-getxz(li[j])[2]*Math.sin(deg);
		var z1=getxz(li[j])[2]*Math.cos(deg)+getxz(li[j])[1]*Math.sin(deg);
		//console.log(x1,z1)
		li[j].style='transform:translate3d('+getxz(li[j])[0]+'px,'+y1+'px,'+z1+'px)';
		}
	}
	
}

function getxz(li){
	var a=li.style.transform.split('(')[1].split('px');
	var s=new Array()
	s.push(a[0],a[1].slice(1),a[2].slice(1));
	return s;
}
