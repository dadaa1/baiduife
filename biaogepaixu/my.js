



function th(obj){//[['语文',0],['数学',0]]
	var a='<thead><tr>';
	var b='<span>▲</span><span>▼</span>';
	for(var i=0;i<obj.length;i++){
		if(obj[i][1]=='1'){
			a+='<th>'+obj[i][0]+b+'</th>';
		}else{
			a+='<th>'+obj[i][0]+'</th>';
		}
	}
	a+='</tr></thead>';
	return a;	
}
function tr(obj){//[[小马,10,20],[小明，10,20]]
	var a='';
	for (var i=0;i<obj.length;i++){
		a+='<tr>';
		for(var n=0;n<obj[i].length;n++){
			a+='<td>'+obj[i][n]+'</td>';
		}
		a+='</tr>';
	}
	return a;
}
function tr_a(obj2){
	return '<tbody>'+tr(obj2)+'</tbody>';
}
function paixu(obj,n,t){//bs
	for(var i=0;i<obj.length;i++){
				for(var j=i+1;j<obj.length;j++){
					if(t=='b'){//底部大
						if(obj[i][n]>obj[j][n]){
						var temp = obj[i];
						obj[i] = obj[j];
						obj[j] = temp;
					}
					}else{//上面大
						if(obj[i][n]<obj[j][n]){
						var temp = obj[i];
						obj[i] = obj[j];
						obj[j] = temp;
					}
					}
				}
		}
	console.log(obj);
	document.getElementsByTagName('tbody')[0].innerHTML=tr(obj);
}
function xuanran(e,i){
	if(e.target.innerText=='▲'){
			console.log('shang');
			paixu(obj2,i,'t');
		}else if(e.target.innerText=='▼'){
			console.log('xia');
			paixu(obj2,i,'b');
	}
}
	
function init(){
	var html='<table>'+th(obj1)+tr_a(obj2)+'</table>';
	document.body.innerHTML=html;
	var a=null;
	document.getElementsByTagName('table')[0].onclick=function(e){
		if(e.target.tagName=='SPAN'){
			console.log(e.target.parentNode.innerText.slice(0,2));
			for(var a=0;a<obj1.length;a++){
				if(e.target.parentNode.innerText.slice(0,2)==obj1[a][0]){
					i=a;
					break;
				}
			}
		}
	xuanran(e,i);
	}
	
}
init();
