var music=require('NeteaseCloudMusicApi').api;
var a=music.search('无果',function(data){
    console.log(data)
},true)
console.log(a)
var b=music.lrc('2347048',function(data){
	console.log(data)
})
music.song('2347048',function(data){
	console.log(data)
})