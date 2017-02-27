var cude=[1,1];
var f=['shang','you','xia','zuo'];
var n=0;
var chaoxiang=f[n];
var run=document.getElementById('run');
function zuo_run(){
	run.style.left=string_p(parse_p(run.style.left)-40)
	cude[0]-=1;
	console.log(cude);
}
function you_run(){
	run.style.left=string_p(parse_p(run.style.left)+40);
	cude[0]+=1;
	console.log(cude);
}
function shang_run(){
	run.style.top=string_p(parse_p(run.style.top)-40);
	cude[1]-=1;
	console.log(cude);
}
function xia_run(){
	run.style.top=string_p(parse_p(run.style.top)+40);
	cude[1]+=1;
	console.log(cude);
}
function parse_p(a){//'100px';
	console.log(a);
	return parseInt(a);
}
function string_p(a){
	console.log(a);
	return a+'px';
}
function parse_deg(a){
	return parseInt(a.slice(7));
}
function you_90(){
	run.style.transform='rotate('+(parse_deg(run.style.transform)+90)%360+'deg)'
	if(n==3){
		n=0;
		chaoxiang=f[0];
	}else{
		n++;
		chaoxiang=f[n]
	}
	console.log(n,chaoxiang,run.style.transform);
}
function zuo_90(){
	run.style.transform='rotate('+(parse_deg(run.style.transform)-90)%360+'deg)'
	if(n==0){
		n=3;
		chaoxiang=f[3];
	}else{
		n--;
		chaoxiang=f[n]
	}
	console.log(n,chaoxiang,run.style.transform);
}
function shang(){
	run.style.transform='rotate(0deg)';
	n=0;
	chaoxiang=f[n];
} 
function xia(){
	run.style.transform='rotate(180deg)';
	n=2;
	chaoxiang=f[n];
}
function zuo(){
	run.style.transform='rotate(-90deg)';
	n=3;
	chaoxiang=f[n];
}
function you(){
	run.style.transform='rotate(90deg)';
	n=1;
	chaoxiang=f[n];
}
function go(chao){
	switch (chao){
		case 'shang':
		console.log('shang~');
		if(cude[1]>1){
			shang_run();
		}else{
			alert('到顶了~');
		}
		break;
		case 'you':
		console.log('you~');
		if(cude[0]<10){
			you_run();
		}else{
			alert('到右边了~')
		}
		break;
		case 'xia':
		console.log('xia~');
		if(cude[1]<10){
			xia_run();
		}else{
			alert('到底了~')
		}
		break;
		case 'zuo':
		console.log('zuo');		
		if(cude[0]>1){
			zuo_run();
		}else{
			alert('到左边了~')
		}
		break;
	}
}
window.onload=function(){
	var a=document.getElementById('a');
	var b=document.getElementById('b');
	b.onclick=function(){
		switch(a.value.toLowerCase()){
			case 'go':
			go(chaoxiang);
			break;
			case 'tun lef':
			zuo_90();
			break;
			case 'tun rig':
			you_90();
			break;
			case 'tun bac':
			you_90();
			you_90();
			break;
			case 'tra lef': 
			go('zuo');
			break;
			case 'tra top':
			go('shang')
			break;
			case 'tra rig':
			go('you')
				break;
			case 'tra bot':
			go('xia')
				break;
			case 'mov lef':
			zuo();
			go('zuo');
				break;
			case 'mov top':
			shang();
			go('shang');
				break;
			case 'mov rig':
			you();
			go('you')
				break;
			case 'mov bot':
			xia();
			go('xia')
				break;
		}
	}
}
