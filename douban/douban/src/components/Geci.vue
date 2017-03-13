<template>
	<div id="geci">
		<p @click="shouqi()">收起歌词</p>
		<h2>{{message}}</h2>
	</div>
</template>

<script>
	export default{
		name:'geci',
		props: ['message'],
		data(){
			return {

			}
		},
		methods:{
			shouqi:function(){
				this.$emit('shouqi');
				console.log('面板收起');
			}
		}
	}
</script>

<style>
	#geci{
		width: 80%;
		left:50%;
		transform: translateX(-50%);
		position: absolute;
		top:0;
		height: 400px;
		background-color: red;
		overflow: scroll;
	}
	#geci>p{
		margin-top: 10px;
		padding-bottom: 10px;
		border-bottom:1px solid #cacaca;
	}
</style>
