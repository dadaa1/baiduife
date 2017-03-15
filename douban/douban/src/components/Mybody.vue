<template>
<div id="body">
	<div id="left">	
		<div class="first">
			<p>正在播放{{num}}</p>
			<p @click='qingkong()'>清空全部</p>
		</div>
		<div class="two">
			<ul>
				<li v-for='value in geci'>
					<span>{{value['歌词']}}</span>
					<span>{{value['作者']}}</span>
					<span>X</span>
				</li>
			</ul>
		</div>
		<div class="three">
			<div class="play">
				<p><span>
					{{geming}}
				</span><span>
					{{time}}
				</span></p>
				<div class="line">
					<input type="range" @change='changenum($event)'  :style="{'background-size':line+'% 100%'}" value='0'>
				</div>
			</div>
			<div class="tupiao">
				<i class="iconfont" :class="{'icon-icon-test9':xunhuan,'icon-icon-test8':!xunhuan}"
				@click='changexunhuan()'></i>
				<i class="iconfont icon-icon-test12"></i>
			</div>
			<div class="ktm">
				<i class="iconfont icon-icon-test"
				@click='shangyishou()'></i>
				<i class="iconfont" @click='zanting()' v-bind:class="{'icon-icon-test1':zan,'icon-icon-test4':!zan}"></i>
				<i class="iconfont icon-icon-test6" @click='xiayishou()'></i>
			</div>
		</div>
	</div>
	<div id="right">
		<img src="../assets/logo.png" style="width:100px;height:100px;">
		<p class='min'>民谣</p>
		<p>程泓语</p>
		<p class="guan">
		<span>8863关注</span>
		<span>23首歌</span>
		</p>
		<p class="chakan" @click='chakan'>查看歌词</p>
		<transition name='fade'>
		<geci v-show="gg" :message=msg
		v-on:shouqi='chakan()'
		></geci>
		</transition>
	</div>
	<music :dizhi='music[i].music_url'></music>
</div>
</template>

<script>
	import Geci from './Geci'
	import Music from './Music'
	export default {
		name:'mybody',
		components:{
			Geci,Music
		},
		data(){
			return {
				i:0,
				num:'6/6',
				time:'1.11',
				geming:'瞬',
				zan:true,
				line:0,
				msg:'歌词内容',
				gg:false,
				xunhuan:false,
				music:[
					{music_url:'http://192.168.97.99/cache/1/05/guodashan.me/381adcd37c5b245a18268baea6c4c7dd/I%20Hate%20You%20But%20I%20Love%20You.mp3'
					},{music_url:'http://192.168.97.99/cache/1/05/guodashan.me/381adcd37c5b245a18268baea6c4c7dd/I%20Hate%20You%20But%20I%20Love%20You.mp3'
					},{music_url:'http://192.168.97.99/cache/1/05/guodashan.me/381adcd37c5b245a18268baea6c4c7dd/I%20Hate%20You%20But%20I%20Love%20You.mp3'
					},
				],
				geci:[
				{'歌词':'11111111',
				'作者':'2222222222'},
				]
			}
		},
		methods:{
			changenum:function(event){
				console.log(this.line);
				console.log(event.currentTarget.value);
				this.line=event.currentTarget.value;
			},
			qingkong:function(){
				this.geci=''
			},
			chakan:function(){
				this.gg=!this.gg;
				console.log(this.gg)
			},
			shangyishou:function(){
				if(this.i<0){
					console.log('daotoule~');
					return;
				}
				document.getElementById('music').src=this.music[this.i--].music_url;
			},
			zanting:function(){
				this.zan=!this.zan;
				var m=document.getElementById('music');
				if(m.paused){
					m.play();
					console.log('1');
				}else{
					m.pause();
					console.log('2');
				}
				
			},
			xiayishou:function(){
				if(this.i>this.music.length){
					console.log('daotoule~');
					return;
				}
				document.getElementById('music').src=this.music[this.i++].music_url;
			},
			changexunhuan:function(){
				this.xunhuan=!this.xunhuan;
				document.getElementById('music').lood=!this.xunhuan
				console.log(!this.xunhuan);
			}

		}
	}
</script>

<style>
@import url('../assets/iconfont.css');
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}

#body{
	height: 400px;
	width: 80%;
	margin: 50px auto;
	margin-bottom: 0;
}
#left{
	width: 65%;
	display: inline-block;
	height: 100%;
}
#right{
	width: 35%;
	position: relative;
	display: inline-block;
	text-align: center;
	float:right;
	height: 100%;
}
.min{
	font-size:12px;
	margin:10px 0 ;
}
.chakan:hover,.min:hover{
	color: #cacaca;	
}
.guan{
	width: 150px;
	padding: 5px;
	margin: 10px auto;
	border:solid 1px #cacaca;
	border-right: none;
	border-left: none;
}
.first{
	height: 40px;
	line-height: 40px;
}
.first>p:last-of-type{
	float: right;
}
.first>p:last-of-type:hover{
	color: #cacaca;
}
.first>p:first-child{
	float: left;
}
.two{
	height: 350px;
	overflow-y: scroll;
	overflow-x: hidden;
}
.three{
	margin-top: 10px;
}
.play{
	width: 70%;
}
.play>p>span:first-child{
	margin-left:6%;
}
.play>p>span:last-child{
	margin-left:70%;
}
.line{
	margin-top: 10px;
}

.tupiao{
	margin-left: 80%;
	margin-top: -25px;
}
.ktm>i,.tupiao>i{
	padding: 10px;
	font-size: 24px;
}
.ktm{
	margin-left: 120%;
		margin-top: -25px;
	width: 200px;
}
.two>ul>li{
	height: 40px;
	line-height: 40px;
	border-bottom: solid #444242 1px;
}
</style>
