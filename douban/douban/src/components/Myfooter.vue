<template>
	<div id="footer">
		<div id="audio">
			<input type="range" @change='changenum($event)' @onmousemove='changenum($event)' :style="{'background-size':msg+'% 100%'}">
		</div>
		<div id="kongzhi">
			
		</div>
	</div>
</template>

<script>
	export default{
		name:'footer',
		data(){
			return{
				msg:'40'
			}
		},
		methods:{
			changenum:function(event){
				console.log(this.msg);
				console.log(event.currentTarget.value);
				this.msg=event.currentTarget.value;
			}
		}
	}
</script>

<style>
#footer{
	width: 80%;
	margin: 50px auto;
	margin-bottom: 0;
}
</style>