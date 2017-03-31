function $(a){
	return document.getElementById(a);
}
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
var s_r,s_g,s_b,s_l,s_s,s_h;
var oneg=$('one').getContext('2d');
var twog=$('two').getContext('2d');
one_draw('rgb(0,248,195)');
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
		yingshe_2();
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
		yingshe(t_yn);
		yingshe_2();
	}
	document.onmouseup=function(){
		t_y=t_yn;
		document.onmousemove=null;
	}
}
$('r').onchange=function(){
	concertNumber('t');
	changexy();
}
$('g').onchange=function(){
	concertNumber('t');
	changexy();
}
$('b').onchange=function(){
	concertNumber('t');
	changexy();
}
$('h').onchange=function(){
	concertNumber('b');
	changexy();
}
$('s').onchange=function(){
	concertNumber('b');
	changexy();
}
$('l').onchange=function(){
	concertNumber('b');
	changexy();
}

function concertNumber(w){
	if(w=='t'){
		s_g=$('g').value;
		s_r=$('r').value;
		s_b=$('b').value;
		var a=new Array();
		a.push(s_r,s_g,s_b);
		a=rgbChangeIntohsl(a);
		$("h").value=a[0];
		$("s").value=a[1];
		$("l").value=a[2];
	}else{
		s_h=$('h').value;
		s_s=$('s').value;
		s_l=$('l').value;
		var a=new Array();
		a.push(s_h,s_s,s_l);
		a=hslChangeIntorgb(a);
		$("r").value=a[0];
		$("g").value=a[1];
		$("b").value=a[2];
	}
	
}

function changexy(){//根据颜色改变坐标
	var h=$('h').value;
	var s=$('s').value;
	var l=$('l').value;
	console.log(h,s,l);
	t_yn=(h/360)*400;
	o_x=o_xm=400*(1-l);
	o_y=o_yn=400*(1-s);
	yingshe(t_yn);
	$('two_c').style.top=(h/360)*400+'px';
	$('one_c').style.top=400*(1-s)+'px';
	$('one_c').style.left=400*(1-l)+'px';
	console.log('完成~');
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
function yingshe(t_yn){
	var color=twog.getImageData(0,+t_yn+9,1,1).data;
	var r=color[0];
	var g=color[1];
	var b=color[2];
	rgb='rgb('+r+','+g+','+b+')';
	console.log('two',rgb)
	one_draw(rgb);
	rgb='rgb(0,0,0)';
}

function yingshe_2(){
	var color=oneg.getImageData(+o_xm+9,+o_yn+9,1,1).data;
	var r=color[0];
	var g=color[1];
	var b=color[2];
	rgb='rgb('+r+','+g+','+b+')';
	console.log(rgb);
	number_color(r,g,b)
	rgb='rgb(0,0,0)';
}
function number_color(r,g,b){
	$("r").value=r;
	$("g").value=g;
	$("b").value=b;
	var a=new Array();
	a.push(r,g,b);
	a=rgbChangeIntohsl(a);
	$("h").value=a[0];
	$("s").value=a[1];
	$("l").value=a[2];
}

function rgbChangeIntohsl(rgb) {
        var r = rgb[0] / 255,
            g = rgb[1] / 255,
            b = rgb[2] / 255;
        var min = Math.min.apply(Array, [r, g, b]),
            max = Math.max.apply(Array, [r, g, b]);
        var h, s, l;
        if (max == min) {
            h = 0;
        }
        else if (max == r && g >= b) {
            h = 60 * (g - b) / (max - min);
        }
        else if (max == r && g < b) {
            h = 60 * (g - b) / (max - min) + 360;
        }
        else if (max == g) {
            h = 60 * (b - r) / (max - min) + 120;
        }
        else if (max == b) {
            h = 60 * (r - g) / (max - min) + 240;
        }
        l = (max + min) / 2;
        if (l == 0 || max == min) {
            s = 0;
        }
        else if (l > 0 && l <= 0.5) {
            s = (max - min) / (2 * l);
        }
        else if (l > 0.5) {
            s = (max - min) / (2 - 2 * l);
        }

        return [Math.round(h), Math.round(s * 100) / 100, Math.round(l * 100) / 100];

    }

function hslChangeIntorgb(hsl) {
        var h = hsl[0] - 0,
            s = hsl[1] - 0,
            l = hsl[2] - 0;

        var r, g, b;
        if (s == 0) {
            r = g = b = l;
        }
        else {
            var p, q, k;
            if (l < 0.5) {
                q = l * (1 + s);
            }
            else if (l >= 0.5) {
                q = l + s - (l * s);
            }
            p = 2 * l - q;
            k = h / 360;

            r = singleColorCalculation(k + 1 / 3);
            g = singleColorCalculation(k);
            b = singleColorCalculation(k - 1 / 3);

        }

        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];

function singleColorCalculation(k) {

            var color;

            if (k < 0) {
                k += 1;
            }
            if (k > 1) {
                k -= 1;
            }

            if (k * 6 < 1) {
                color = p + ((q - p) * 6 * k);
            }
            else if (k * 6 >= 1 && k < 0.5) {
                color = q;
            }
            else if (k >= 0.5 && 3 * k < 2) {
                color = p + ((q - p) * 6 * (2 / 3 - k));
            }
            else {
                color = p;
            }

            return color;

        }

    }