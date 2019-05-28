<template>
  <div class="background" ref="tem" >
    <div class="box" ref="box" v-if="isPc">
    	<canvas id="chart"> 你的浏览器不支持HTML5 canvas </canvas>
	  </div>
    <div class="box1" v-if="!isPc">
      <p class="title">技术栈</p>
      <div :class="['skill animated rotateIn',item.class]" v-for="(item, index) in skillList" :key="index">
        <svg class="icon " aria-hidden="true">
          <use :xlink:href="item.icon"></use>
        </svg>
        <p class="name">{{item.name}}</p>
        <p class="detail">{{item.detail}}</p>
      </div>
    </div>

  </div>
</template>

<script>
import store from '@/store/store.js'
export default {
  name: 'skillStack',
  data () {
    return {
      skillList: [
        {
          class: '',
          icon: '#iconHTMLtubiao',
          name: 'html',
          detail: '熟悉常用html元素特性，熟悉盒模型及各种布局方式'
        },
        {
          class: 'delay-1s',
          icon: '#iconCSS',
          name: 'css',
          detail: '熟练使用css布局和动画，伪类，伪元素等'
        },
        {
          class: 'delay-2s',
          icon: '#iconJavaScript',
          name: 'javascript',
          detail: '熟悉es6，熟悉模块化开发，熟悉封装'
        },
        {
          class: 'delay-3s',
          icon: '#iconJquery',
          name: 'jquery',
          detail: '熟练使用jquery进行常规dom操作'
        },
        {
          class: 'delay-4s',
          icon: '#iconVue',
          name: 'vue全家桶',
          detail: '熟练使用vue全家桶完成项目开发'
        },
        {
          class: 'delay-5s',
          icon: '#iconwebpack',
          name: 'webpack',
          detail: '熟练使用webpack打包发布'
        },
        {
          class: 'delay-6s',
          icon: '#icongit',
          name: 'git',
          detail: '熟练使用git工具进行版本管理及团队协作'
        }

        // [100,"#2dc6c8","git","熟练使用git工具进行版本管理及团队协作"], 
        // [100,"#b6a2dd", "webpack","熟练使用webpack打包发布"], 
        // [200,"#5ab1ee","vue全家桶","熟练使用vue全家桶完成项目编写"],
        // [200,"#5c9c57","jquery","熟练使用jquery进行常规dom操作"], 
        // [300,"#d7797f","html","熟悉常用html元素特性，熟悉盒模型及各种布局方式"],
        // [300,"#7490cf","css","熟练使用css布局和动画，伪类，伪元素等"],
        // [400,"#b35a49","javascript","熟悉es6，熟悉模块化开发，熟悉封装"]
      ]
    }
  },
  computed: {
    isPc () {
      return store.state.isPc
    }
  },
  mounted: function () {
    var _width = parseInt(window.getComputedStyle(this.$refs.tem).width)
    this.$refs.box.setAttribute("width",_width)
    this.$refs.box.setAttribute("height",(_width/2))
  },
  methods: {
    enterAnimate () {
      this.showMe = true
    }
  }
}
</script>
<style scoped>
.background {
  background:linear-gradient(to bottom, rgb(0,254,248), rgb(0,214,209));
  width: 100vw;
  height: 100vh;
}
.box {
  margin-top:3%;
  margin-left:5%; 
}
.box1 {
  padding-top: 10%;
  width: 70%;
  margin: 0 auto;
}
.title {
  margin-bottom: 0.2rem;
}
.skill {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.1rem;
  text-align: left;
}
.skill p {
  font-size: 0.15rem;
}
.name {
  white-space:nowrap;
  width: 20%;
  margin-left:0.2rem; 
  height:0.2rem;
  line-height: 0.2rem;
}
.icon {
  height: 0.2rem;
  width: 0.2rem;
}
.delay-6s {
  animation-delay: 6s;
}
</style>

