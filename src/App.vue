<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,html{
  margin: 0;
  position: relative;
  width: 100%;
  height: 100%;
  overscroll-behavior-y: contain;   /* 禁止下拉刷新*/
}
div,h1,h2,h3,h4,h5,h6,p,span,ul,li,a {
  margin: 0;
  padding: 0;
  font-size: 0.2rem;
  font-family: "微软雅黑";
}
a {
  text-decoration: none;
  color: #2c3e50;
}
a:active {
  color: #2c3e50;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
}
.icon {
  margin-bottom: 0.05rem;
  width: 0.15rem; 
  height: 0.15rem;
  vertical-align: -0.15em;
  font-size: 0.3rem;
  fill: currentColor;
  overflow: hidden;
}
img {
  width: 100%;
  height: 100%;
}
</style>
