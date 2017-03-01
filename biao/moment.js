var gshi,gfen,gmiao,shi,fen,miao;
    function add(){
        for (var i=0;i<30;i++){
            var a1=document.createElement('a');
            a1.className='a1';
            var p1=document.createElement('p');
            p1.className='left';
            var p2=document.createElement('p');
            p2.className="right"
            if(i%5==0){
                a1.style.height = '8px';
                p1.style.height='8px';
                p1.style.width='30px';
                p1.innerHTML='<span class="num"style="transform: translate(30px,-12px) rotate('+(-6*i)+'deg);">'+((9+i/5)>12?(9+i/5)-12:(9+i/5))+'</span>';
                p2.style.height='8px';
                p2.style.width="30px";
                p2.innerHTML='<span class="num" style="transform:translate(-30px,-12px) rotate('+(-6*i)+'deg)">'+(3+i/5)+'</span>';
            }
            a1.appendChild(p1);
            a1.appendChild(p2);
            a1.style.transform='rotate('+6*i+'deg)';
            document.body.children[0].appendChild(a1)
        }
    }
    var mz=document.getElementById("mz");
    var fz=document.getElementById("fz");
    var sz=document.getElementById("sz");
    function c(shi1,fen1,miao1){
        var miao=miao1%60;
        var fen=fen1%60;
        var h12=shi1%12;
        var x=(fen-1)*6+miao*0.1;
        mz.style.transform='rotate('+miao*6+'deg)';
        fz.style.transform='rotate('+x+'deg)';
        sz.style.transform='rotate('+((h12)*30+fen*0.5)+'deg)';
        $('time').innerText=new Date();
    }
    function $(a){
        return document.getElementById(a); 
    }
    window.onload=function(){
        add();
        var times=setInterval(function(){
            var d=new Date();
            c(d.getHours(),d.getMinutes(),d.getSeconds());
        },100);
        $('s4').onclick=function(){
        //获取用户输入
         shi=$('s1').value;
         fen=$('s2').value;
         miao=$('s3').value;
        var newd=new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),shi,fen,miao);
        clearInterval(times);
        clearInterval(times1);
        //点击时刻的时分秒的值
         gshi=new Date().getHours();
         gfen=new Date().getMinutes();
         gmiao=new Date().getSeconds();
        var times1=setInterval(function(){
            var now=new Date();
            c(shi-gshi+now.getHours(),fen-gfen+now.getMinutes(),miao-gmiao+now.getSeconds());
            console.log(shi-gshi+now.getHours(),fen-gfen+now.getMinutes(),miao-gmiao+now.getSeconds());
        },100);
        }
        $('n4').onclick=function(){
            var n1=$('n1').value;
            var n2=$('n2').value;
            var n3=$('n3').value;
            $('nao').innerText=n1+':'+n2+':'+n3;
         if(gshi==undefined){
            var nao=setInterval(function(){
            var a=new Date();
            if(a.getHours()==n1&&a.getMinutes()==n2&&a.getSeconds()==n3){
                alert('闹钟~');
                clearInterval(nao);
                $('nao').innerText='';
            }
            console.log(a);
            console.log(a.getHours(),a.getMinutes(),a.getSeconds());
            },1000);
            }else{
                var nao=setInterval(function(){
                var a=new Date();
                if((shi-gshi+a.getHours())==n1&&(fen-gfen+a.getMinutes())==n2&&(miao-gmiao+a.getSeconds())==n3){
                    alert('闹钟~');
                    clearInterval(nao);
                    $('nao').innerText='';
                }
                console.log(a);
                console.log(a.getHours(),a.getMinutes(),a.getSeconds());
            },1000);
            }
        }
    }