var page = require('webpage').create(),
  system = require('system'),
  address='https://www.baidu.com/s?wd=';

if (system.args.length === 1) {
  console.log('请输入关键字~');
  phantom.exit();
}

address += system.args[1];
var oldTime=new Date();
page.open(address, function(status) {
  if (status !== 'success') {
    console.log('失败了~');
  } else {
   var json=page.evaluate(function() {
         var t=[];
         var dom=document.getElementById('content_left').children;
         console.log(dom.length)
         for(var i=0;i<dom.length;i++){
            var o=new Object();
            o.title=dom[i].children[0].innerText;
            o.info=dom[i].children[1].innerText;
            o.link=dom[i].getElementsByTagName('a')[0].getAttribute('href');
            var pic=dom[i].getElementsByTagName('img');
            if(pic.length>0){
              o.pic=pic[0].getAttribute('src');
            }else{
              o.pic=null;
            }
            t.push(o);
         }
        // console.log(JSON.stringify(t));
         var oo=new Object();
         oo.code=0;
         oo.msg='抓取成功~';
         oo.word=document.getElementById('kw').value;
         oo.dataList=t;
         return oo;
     });
      json.time=new Date-oldTime;
      console.log(JSON.stringify(json));
  }
  phantom.exit();
});