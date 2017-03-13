<template>
  <div id="app">
    <myheader></myheader>
    <mybody></mybody>
  </div>
</template>

<script>
import Myheader from './components/Myheader'
import Mybody from './components/Mybody'
import Myfooter from './components/Myfooter'

export default {
  name: 'app',
  components: {
    Myheader,Mybody,Myfooter
  }
}
</script>

<style>
@import './assets/index.css';
#app {
  height: 100%;
  width: 100%;
  color:rgba(255,255,255,0.5);
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#footer{
  color: red;
}
</style>
