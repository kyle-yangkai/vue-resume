// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store.js'
import animated from 'animate.css'
Vue.use(animated)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
window.onload = function(){
  setStandard();
}

// 动态设置font-size以及缩放比例
var setStandard = ()=>{
  let scale = 1 / devicePixelRatio;
  // console.log(scale);
  document.querySelector('meta[name="viewport"]').setAttribute('content','width=device-width, initial-scale='+ scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
  let _html =document.getElementsByTagName("html")[0];
  let fs = _html.getBoundingClientRect().width/10;
  _html.style.fontSize = fs + "px";
}

window.onresize = function (){
  setStandard();
}