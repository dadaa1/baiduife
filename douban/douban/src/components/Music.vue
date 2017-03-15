<template>
	<audio autoplay :src="dizhi" id='music'
	loop='true'></audio>
</template>

<script>
	export default{
		name:'music',
		props: ['dizhi'],
		data(){
			return {

			}
		},
		methods:{
			zanting:function(){
				document.getElementById('music').pause();
			},
			xiayishou:function(){

			},
			shangyishou:function(){

			},
			xuhuan:function(){

			},
			timePlay:function(){

			}

		}
	}
</script>

<style>
	audio{
		display: none;
	}
</style>