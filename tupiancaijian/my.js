var url='';
var canvas=document.createElement('canvas');
var resize=document.createElement('div');
resize.id='resize';
resize.innerHTML='<span id="tl"></span><span id="tr"></span><span id="br"></span><span id="bl"></span>';
canvas.id='canvas';
var app=$('app').getContext('2d');//存放裁剪后的图片
var ctx=canvas.getContext('2d');//未裁剪的图片
//获取存放图片的div的位置
var wt=$('main').getBoundingClientRect().top;
var wl=$('main').getBoundingClientRect().left;
var w,h;
function $(a){
	return document.getElementById(a);
}
var img=new Image();
$('input').onchange=function(e){
	if(!this.files || !this.files[0]){
	return;
	}
	var reader = new FileReader();
 	reader.onload = function(evt){
  		url=evt.target.result;
 		img.src=url;
 		console.log(img.width,img.height);
 		w=img.width;
 		h=img.height;
 		canvas.width=w;
 		canvas.height=h;
 		$('main').style.width=w+2+'px';
 		$('main').style.height=h+2+'px';
 		canvas.style.border='1px solid red';
 		ctx.drawImage(img,0,0)
 		$('main').appendChild(canvas);
	}
	reader.readAsDataURL(this.files[0]);
}


var x,y,m,n,cx,cy,cxm,cyn;
canvas.onmousedown=function(e){//剪切
	console.log(e.clientX,e.clientY);
	m=x=e.clientX-wl;//在图片内的坐标
	n=y=e.clientY-wt;//在图片内的坐标
	resize.style.top=y+'px';
	resize.style.left=x+'px';
	resize.style.height=0;
	resize.style.width=0;
	$('main').appendChild(resize);
	canvas.onmousemove=function(e){
		console.log(e.clientX,e.clientY);
		cxm=cx=e.clientX-x-wl;//剪切出的图片的宽高
		cyn=cy=e.clientY-wt-y;//剪切出的图片的宽高
		console.log('app的宽高',cx,cy);
		resize.style.height=cy+'px';
		resize.style.width=cx+'px';
		$('app').height=cy;
		$('app').width=cx;
		app.clearRect(0,0,img.width,img.height);
		app.drawImage(img,x,y,cx,cy,0,0,cx,cy);
		canvas.onmouseup=function(){
			canvas.onmousemove=null;
		}
	}
}

resize.onmousedown=function(e){//拖动
	if(e.target.tagName=='SPAN'){
		move(e);
		return false;
	}
	e.stopPropagation();
	var ox=e.clientX;
	var oy=e.clientY;
	console.log('m',m,'n',n,x,y);
	resize.onmousemove=function(ev){
		e.stopPropagation();
		console.log('移动距离：',ev.clientX-ox,ev.clientY-oy)
		console.log('元坐标：',x,y);
		console.log('计算位置:',x+ev.clientX-ox,y+ev.clientY-oy)
		if((x+ev.clientX-ox+cx)<=w&&(x+ev.clientX-ox)>=0){
			m=x+ev.clientX-ox;
			resize.style.left=x+ev.clientX-ox+'px';
			app.clearRect(0,0,w,h);
			app.drawImage(img,m,n,cx,cy,0,0,cx,cy);
		}
		if((y+ev.clientY-oy+cy)<=h&&(y+ev.clientY-oy)>=0){
			n=y+ev.clientY-oy;
			resize.style.top=y+ev.clientY-oy+'px';
			app.clearRect(0,0,w,h);
			app.drawImage(img,m,n,cx,cy,0,0,cx,cy);
		}

	}
	document.onmouseup=function(e){
	x=m;
	y=n;
	console.log('m1',m,'n1',n,x,y);
	resize.onmousemove=null;
	}
}

function move(e){
	console.log(e);
	switch (e.target.id){
		case 'tl':move_tl(e);break;
		case 'tr':move_tr(e);break;
		case 'bl':move_bl(e);break;
		case 'br':move_br(e);break;
	}
}

function move_br(e){
	document.onmousemove=function(ev){
		cyn=cy+ev.clientY-e.clientY;
		cxm=cx+ev.clientX-e.clientX;
		console.log(cyn,cxm)
		resize.style.height=cyn+'px';
		resize.style.width=cxm+'px';
		huizhi(m,n,cxm,cyn);
	}
	document.onmouseup=function(){
		cy=cyn;
		cx=cxm;
		document.onmousemove=null;
	}
}

function move_tl(e){
	document.onmousemove=function(ev){
		cyn=cy-ev.clientY+e.clientY;
		cxm=cx-ev.clientX+e.clientX;
		m=x+ev.clientX-e.clientX;
		n=y+ev.clientY-e.clientY;
		console.log(cyn,cxm)
		resize.style.top=n+'px';
		resize.style.left=m+'px';
		resize.style.height=cyn+'px';
		resize.style.width=cxm+'px';
		huizhi(m,n,cxm,cyn);
	}
	document.onmouseup=function(){
		cy=cyn;
		cx=cxm;
		x=m;
		y=n;
		document.onmousemove=null;
	}
}

function move_tr(e){
	document.onmousemove=function(ev){
		cyn=cy-ev.clientY+e.clientY;
		cxm=cx+ev.clientX-e.clientX;
		m=x;
		n=y+ev.clientY-e.clientY;
		console.log(cyn,cxm)
		resize.style.top=n+'px';
		resize.style.left=m+'px';
		resize.style.height=cyn+'px';
		resize.style.width=cxm+'px';
		huizhi(m,n,cxm,cyn);
	}
	document.onmouseup=function(){
		cy=cyn;
		cx=cxm;
		x=m;
		y=n;
		document.onmousemove=null;
	}
}

function move_bl(e){
	document.onmousemove=function(ev){
		cyn=cy+ev.clientY-e.clientY;
		cxm=cx-ev.clientX+e.clientX;
		m=x+ev.clientX-e.clientX;
		n=y;
		console.log(cyn,cxm)
		resize.style.top=n+'px';
		resize.style.left=m+'px';
		resize.style.height=cyn+'px';
		resize.style.width=cxm+'px';
		huizhi(m,n,cxm,cyn)
	}
	document.onmouseup=function(){
		cy=cyn;
		cx=cxm;
		x=m;
		y=n;
		document.onmousemove=null;
	}
}

function huizhi(x,y,cx,cy){
	$('app').height=cy;
	$('app').width=cx;
	app.clearRect(0,0,w,h);
	app.drawImage(img,x,y,cx,cy,0,0,cx,cy);
}

$('caijian').onclick=function(){
	var k=+$('k').value;
	var g=+$('g').value;
	m=x=0;
	n=y=0;
	cxm=cx=k;
	cxn=cy=g;
	resize.style.top=0;
	resize.style.left=0;
	resize.style.height=g+'px';
	resize.style.width=k+'px';
	$('main').appendChild(resize);
	if(k==''||g==''){
		alert('请填写宽高')
	}
	huizhi(0,0,k,g);
}


$('fu').onclick=function(){
	var data=$('app').toDataURL();
	// dataURL 的格式为 “data:image/png;base64,****”,逗号之前都是一些说明性的文字，我们只需要逗号之后的就行了
	data=data.split(',')[1];
	data=window.atob(data);
	var ia = new Uint8Array(data.length);
	for (var i = 0; i < data.length; i++) {
	ia[i] = data.charCodeAt(i);
	};
    // canvas.toDataURL 返回的默认格式就是 image/png
	var blob=new Blob([ia], {type:"image/png"});

	var fd=new FormData();
	fd.append('file',blob);
	$.ajax({
	    url:"127.0.0.1",
	    type:"POST",
	    data:fd,
	    success:function(){}
	});
}